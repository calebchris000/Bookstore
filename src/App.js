import {
  Route,
  BrowserRouter,
  Routes,
} from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/books" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      ,
    </BrowserRouter>
  );
}

export default App;
