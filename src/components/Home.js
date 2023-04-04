import './Home.css';
import { CgProfile } from 'react-icons/cg';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { useState } from 'react';
import {
  addBook,
  removeBook,
} from '../redux/books/bookSlice';

const Header = () => (
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
          <a
            className="bookInteract"
            href="/home"
          >
            Comment
          </a>
          <a
            className="bookInteract"
            href="/home"
          >
            Remove
          </a>
          <a
            className="bookInteract"
            href="/home"
          >
            Edit
          </a>
        </div>
      </div>

      <div className="readTracker">
        <CircularProgressbar
          value={percent}
          strokeWidth={10}
          styles={{
            trail: {
              stroke: '#fff',
            },
            path: { stroke: '#167ff8' },
          }}
        />
        <div className="trackerText">
          <h3 className="percentCompleted">
            {percent}
            %
          </h3>
          <p className="completed">Completed</p>
        </div>
      </div>

      <div className="bookMeta">
        <p className="currentChapter">
          CURRENT CHAPTER
        </p>
        <p className="chapterText">{'chapter 1'}</p>
        <button id="updateButton" type="button">
          UPDATE PROGRESS
        </button>
        <button
          id="updateButton"
          type="button"
          onClick={() => dispatch(
            removeBook({
              item_id,
            }),
          )}
        >
          REMOVE BOOK
        </button>
      </div>
    </div>
  );
};

const AddBook = () => {
  const dispatch = useDispatch();
  const { books } = useSelector(
    (store) => store.book,
  );
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const newBook = {
    item_id: `item${books.length}`,
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
          onChange={(e) => setAuthor(e.target.value)}
        />

        <select
          className="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
            dispatch(addBook(newBook));
            setAuthor('');
            setTitle('');
            setCategory('Category');
          }}
        >
          ADD BOOK
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  const { books } = useSelector(
    (store) => store.book,
  );
  return (
    <div>
      <Header />
      {books.map((book) => (
        <Book
          key={book.item_id}
          genre={book.category}
          bookTitle={book.title}
          author={book.author}
          percent={'50'}
          item_id={book.item_id}
        />
      ))}
      <AddBook />
    </div>
  );
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
