import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Initial state:
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      /*eslint-disable */
      const {item_id, title, author, category} =
        payload;

      return {
        ...state,
        books: [
          ...state.books,
          {item_id, title, author, category},
        ],
      };
    },

    removeBook: (state, {payload}) => {
      const {item_id} = payload;
      const {books} = state;
      if (books.length < 1) {
        return books;
      }
      return {
        ...state,
        books: books.filter(
          (item) => item.item_id !== item_id
        ),
      };
    },
  },
});
/* eslint-enable */

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
