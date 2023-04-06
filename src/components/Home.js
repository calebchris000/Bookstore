import './Home.css';
import { CgProfile } from 'react-icons/cg';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useEffect, useState } from 'react';
import {
  /* addBook */
  removeBook,
} from '../redux/books/bookSlice';
import fetchData, {
  sendData,
} from '../redux/books/bookAPI';

export const Header = () => (
  <nav className="header">
    <h1 className="title">BookStore CMS</h1>
    <div className="navigationLinks">
      <a href="/books">BOOKS</a>
      <a href="/categories">CATEGORIES</a>
    </div>
    <i className="profile">
      <CgProfile />
    </i>
  </nav>
);

const Book = (props) => {
  const dispatch = useDispatch();
  /*eslint-disable */
  const {
    genre,
    bookTitle,
    author,
    percent,
    chapter,
    item_id,
  } = props;

  return (
    <div className="bookContainer">
      <div className="first">
        <p className="genre">{genre}</p>
        <h2 className="bookTitle">{bookTitle}</h2>
        <p className="author">{author}</p>

        <div className="interactions">
          <button className="bookInteract" onClick={() => dispatch(toggleCommentPopup())}>
            Comment
          </button>
         
          <button
            className="bookInteract"
            onClick={() =>
              dispatch(removeBook({item_id}))
            }
          >
            Remove
          </button>
          <button className="bookInteract">
            Edit
          </button>
        </div>
      </div>

      <div className="readTracker">
        <CircularProgressbar
          value={percent}
          strokeWidth={8}
          styles={{
            trail: {
              stroke: "#fff",
            },
            path: {stroke: "#167ff8"},
          }}
        />
        <div className="trackerText">
          <h3 className="percentCompleted">
            {percent}%
          </h3>
          <p className="completed">Completed</p>
        </div>
      </div>

      <div className="bookMeta">
        <p className="currentChapter">
          CURRENT CHAPTER
        </p>
        <p className="chapterText">
          {chapter || "chapter 1"}
        </p>
        <button id="updateButton" type="button">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

const AddBook = () => {
  const dispatch = useDispatch();
  const {books} = useSelector(
    (store) => store.book
  );
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const bookValues = Object.values(books);
  const newBook = {
    item_id: `item${bookValues.length + 1}`,
    title,
    author,
    category,
  };

  return (
    <div className="addBook">
      <h2>ADD NEW BOOK</h2>
      <div className="addBookContainer">
        <input
          id="bookInput"
          value={title}
          type="text"
          placeholder="Book Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          id="bookInput"
          type="text"
          value={author}
          placeholder="Author"
          onChange={(e) =>
            setAuthor(e.target.value)
          }
        />

        <select
          className="category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option>Category</option>
          <option>Fiction</option>
          <option>Science Fiction</option>
          <option>Fantasy</option>
          <option>Mystery</option>
          <option>Fan Fiction</option>
        </select>

        <button
          id="addBook"
          type="button"
          onClick={() => {
            dispatch(sendData(newBook));
            setAuthor("");
            setTitle("");
            setCategory("Category");
          }}
        >
          ADD BOOK
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  const {
    books,
    isFetching,
    data,
    error,
    postStatus,
  } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (postStatus === "Created") {
      dispatch(fetchData());
    }
  }, [postStatus]);

  if (isFetching) {
    return (
      <div className="loading"></div>
    );
  }

  if (data) {
    return (
      <div>
        <Header />
        {Object.keys(books).map((book) => (
          <Book
            key={book}
            genre={books[book][0].category}
            bookTitle={books[book][0].title}
            author={books[book][0].author}
            chapter="Chapter 4"
            percent={"50"}
            item_id={book}
          />
        ))}
        <AddBook />
      </div>
    );
  }

  if (error) {
    <div>{error}</div>;
  }
};

Book.propTypes = {
  genre: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
};

export default Home;
