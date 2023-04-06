import {
  createSlice,
} from '@reduxjs/toolkit';

const initialState = {
  // Initial state:
  books: null,
  isFetching: false,
  data: null,
  error: null,
  postStatus: null,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    fetchDataRequest: (state) => ({
      ...state,
      isFetching: true,
      error: null,
    }),
    fetchDataSuccess: (state, action) => ({
      ...state,
      isFetching: false,
      error: null,
      data: action.payload,
      books: action.payload,
    }),
    fetchDataError: (state, action) => ({
      ...state,
      isFetching: false,
      error: action.payload,
      data: null,

    }),

    postedReducer: (state, { payload }) => ({
      ...state,
      postStatus: payload.toString(),
    }),
    addBook: (state, { payload }) => {
      /*eslint-disable */
      const {item_id, author, title, category} =
        payload;

      return {
        ...state,
        books: [
          ...state.books,
          {author, category, title},
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

export const {
  fetchDataRequest, fetchDataSuccess, fetchDataError, postedReducer, addBook, removeBook,
} = bookSlice.actions;
export default bookSlice.reducer;
