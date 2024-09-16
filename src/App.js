
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Register from './Users/Register';
import Login from './Users/Login';
import Home from './Home/Home';
import Footer from './Footer';
import ProductDetailsComp from './ProductComponents/ProductDetails.component';
import ProductComponent from './ProductComponents/Product.component';
import CartComponent from './ProductComponents/Cart.component';
import PaymentComponent from './ProductComponents/Payment.component';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={<ProductComponent/>}></Route>
        <Route path="/product-details/:productId" element={<ProductDetailsComp/>}></Route>
        <Route path='/cart' element={<CartComponent/>}></Route>
        <Route path="/checkout" element ={<PaymentComponent/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
