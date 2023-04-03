import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => ({
      ...state,
      books: [...state.books, payload],
    }),
    removeBook: (state) => {
      const { books } = state;
      if (books.length < 1) {
        return books;
      }
      return {
        ...state,
        books: books.slice(0, -1),
      };
    },
  },
});

export default bookSlice;
