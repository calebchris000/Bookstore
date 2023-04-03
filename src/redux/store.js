import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categories/categoriesSlice';
import bookSlice from './books/bookSlice';

const store = configureStore({
  reducer: {
    book: bookSlice,
    category: categoriesSlice,
  },
});

export default store;
