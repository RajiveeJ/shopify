import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Login from "./Components/Login";
import Navigation from "./Navigation";
import ProductByCategory from "./ProductsByCategory";
import Provider from "./Provider";
import Home from "./Home";
import Paid from "./Paid"
import Signup from "./Components/Signup";
import "./styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider>
          <ToastContainer />
          <Navigation />

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/products" element={<Home />} />
            
            <Route path="/signup" element={<Signup />} />
            <Route path="/products/:category" element={<ProductByCategory />} />
            <Route path="/mycart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/paid" element={<Paid />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}
