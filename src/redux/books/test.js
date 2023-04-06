/*eslint-disable */
const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/k2KrkKjiqwBlRvvqvmbL/books';
const post = async () => {
  const request = await fetch(api, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: 'item3', title: '48 Hours a day', author: 'Little Bleary Zhao', category: 'Fiction',
    }),
  });
  const reply = await request.text();
  console.log(reply);
};

// post()

const api2 = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/k2KrkKjiqwBlRvvqvmbL/books';
const getID = async () => {
  const request = await fetch(api2);
  const reply = await request.text();
  console.log(reply);
};

// getID();

const item = {
  "item1":[{"author":"Seraphim","title":"Super","category":"Fiction"}],
  "item2":[{"author":"Seraphim","title":"Super Gene","category":"Fiction"}],"item3":[{"author":"Little Bleary Zhao","title":"48 Hours a day","category":"Fiction"}]
};

// console.log(item[0].item1[0])
const thing = Object.values(item);
console.log(thing)

// console.log(item['item2'])