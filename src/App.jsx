import React  from "react"
import About from './pages/About'
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Collection from "./pages/Collection"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import PlaceOrder from "./pages/PlaceOrder"
import Login from "./pages/Login"
import Order from './pages/Order';
import Navbar from "./components/Navbar"
import {Routes,Route} from 'react-router-dom'
import Footer from "./components/Footer"
import Search from "./components/Search"
import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <ToastContainer/>
      <Navbar />
      <Search/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer/>
    </div>
  );
}



export default App
