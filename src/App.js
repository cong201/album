import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './modules/Home';
import { Router, Route, Routes } from 'react-router-dom'
import Product from './modules/Product';
import ProductCart from './components/ProductCart';
import Products from './modules/Products';
import Cart from './modules/Cart';
import CategoryProduct from './modules/CategoryProduct';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path='/products' element={<Products />} />
        <Route path='/categories/:name' element={<CategoryProduct />} />
        <Route path='/carts' element={<Cart />} />
        <Route path='*' element={<div>404 not found</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
