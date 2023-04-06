import {
  fetchDataRequest, fetchDataSuccess, fetchDataError, postedReducer,
} from './bookSlice';

const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/k2KrkKjiqwBlRvvqvmbL/books';

function fetchData() {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    fetch(api)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => dispatch(fetchDataSuccess(data)))
      .catch((err) => dispatch(fetchDataError(err)));
  };
}

export const sendData = (book) => {
  /*eslint-disable */
  const {
    item_id, title, author, category,
  } = book;

  return dispatch => {
    dispatch(postedReducer('posting'))
    fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          item_id:item_id,  title:title, author:author, category:category,
        }),
    })
      .then(res => res.text())
      .then((data) => dispatch(postedReducer(data)))
      .catch((err) => dispatch(postedReducer(err)))
  }
};

export default fetchData;
