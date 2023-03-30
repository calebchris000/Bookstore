import './Home.css';
import { CgProfile } from 'react-icons/cg';
import { BsCircle } from 'react-icons/bs';
import PropTypes from 'prop-types';

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
  const {
    genre, bookTitle, author, percent, chapter,
  } = props;

  return (
    <div className="bookContainer">
      <div className="first">
        <p className="genre">{genre}</p>
        <h2 className="bookTitle">{bookTitle}</h2>
        <p className="author">{author}</p>

        <div className="interactions">
          <a className="bookInteract" href="/home">Comment</a>
          <a className="bookInteract" href="/home">Remove</a>
          <a className="bookInteract" href="/home">Edit</a>
        </div>
      </div>

      <div className="readTracker">
        <BsCircle />
        <div className="trackerText">
          <h3 className="percentCompleted">{percent}</h3>
          <p className="completed">Completed</p>
        </div>
      </div>

      <div className="bookMeta">
        <p className="currentChapter">CURRENT CHAPTER</p>
        <p className="chapterText">{chapter}</p>
        <button id="updateButton" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

const AddBook = () => (
  <div className="addBook">
    <h2>ADD NEW BOOK</h2>

    <div className="addBookContainer">
      <input id="bookInput" type="text" placeholder="Book Title" />
      <select className="category">
        <option>Category</option>
        <option>Fiction</option>
        <option>Science Fiction</option>
        <option>Fantasy</option>
        <option>Mystery</option>
        <option>Fan Fiction</option>
      </select>
      <button id="addBook" type="button">ADD BOOK</button>
    </div>
  </div>
);

const Home = () => (
  <div>
    <Header />
    <Book genre="Action" bookTitle="The Hunger Games" author="Suzanne Collins" percent="63%" chapter="CHAPTER 17" />
    <Book genre="Science Fiction" bookTitle="Dune" author="Frank Herbert" percent="8%" chapter='Chapter 3: "A Lesson Learned"' />
    <Book genre="Economy" bookTitle="Capital in the Twenty-First Century" author="Suzanne Collins" percent="0%" chapter="Introduction" />
    <AddBook />
  </div>

);

Book.propTypes = {
  genre: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Home;
