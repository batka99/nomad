import './App.css';
import { Button, Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import Home from './screen/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Detail from './screen/detail';
import { ShopContextProvider } from './context/shopping_cart';
import Cart from './screen/cart';
import Login from './screen/login';
import { useState } from 'react';





function App() {

  const [cartItems, setCartItems] = useState([])




  return (
    

      <Router>
      <div className="App">
        <ShopContextProvider>
        <Routes cartItemss={cartItems}> 
          <Route
            exact
            path="/"
            element={<Home />}
          ></Route>
          <Route
            exact
            path="/detail/:id"
            element={<Detail /> }
          ></Route>
          <Route
            exact
            path="/checkout"
            element={<Cart />}
          ></Route>
          <Route
            exact
            path="/login"
            element={<Login />}
          ></Route>
        </Routes>
        </ShopContextProvider>
        
      </div>
    </Router>

  );
}

export default App;
