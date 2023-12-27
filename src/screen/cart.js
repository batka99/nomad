import MainNavbar from "../component/navbar";
import React, { useContext, useState } from "react";
import { PRODUCTS, addentional } from "../data/data";
import Table from 'react-bootstrap/Table';
import { ShopContext } from '../context/shopping_cart'
import { Button, Carousel, Card, Navbar, Container } from 'react-bootstrap';
import axios from "axios"
import Footer from "../component/footer";
import { Link } from "react-router-dom";
import Question from "../component/question";


const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};




function Cart() {
  const { cartItems, getTotalCartAmount, checkout, addentionalCartItems } = useContext(ShopContext);

  const [test, setTest] = useState(getDefaultCart);
  const [addPrice, setAddPrice] = useState(0);



  const processCheckout = () => {

    axios.post(`http://localhost:5000/api/stripe/create-checkout-session`).then((res) => {
      console.log(res);
      if (res.data.url) {
        window.location.href = res.data.url
      }
    }).catch((err) => console.log(err.message));
  }



  return <div>
    <MainNavbar />
    <div className="text-center mt-4 mb-4">
      <h2>YOUR CART ITEMS </h2>
    </div>
    <div className="container">
      <Table responsive="sm " striped bordered hover>
        <thead >
          <tr >
            <th className="bg-warning">#</th>
            <th className="bg-warning">Product</th>
            <th className="bg-warning">Price</th>
            <th className="bg-warning">Quantity</th>
            <th className="bg-warning">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems[1] == 0 && cartItems[2] == 0 && cartItems[3] == 0 && cartItems[4] == 0 ?
            <> <tr>
              <td colSpan={5}>
                <div>
                  <h4 className="mt-2">YOUR CART IS EMPTY</h4>
                  <Link to="/"><label className="my-2">Go back and choose your greetings</label></Link>
                </div>

              </td>

            </tr></> : <>{PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <>
                  <tr >
                    <td style={{verticalAlign:"middle"}}>{
                    product.id}
                    </td>
                    <td style={{verticalAlign:"middle"}}><h5 className="text-start">{product.title}</h5>{addentional.map((addentionalItem)=>{
                      if(addentionalCartItems[addentionalItem.id] !==0){
                        return <p className="text-start m-0 p-0"><small>{addentionalItem.title + ", "} </small></p>
                      }})}</td>
                    <td style={{verticalAlign:"middle"}}>{product.price + addPrice}</td>
                    <td style={{verticalAlign:"middle"}}>{ }</td>
                    <td style={{verticalAlign:"middle"}}>{getTotalCartAmount}</td>
                  </tr></>;
              }
            })}</>}


        </tbody>
      </Table>



    </div>

    <Container>
      <div className=" row">



        <div className="col-6">



        </div>
        <div className="col-6 mt-2">
          <h3 className="text-end ">Sub total:  {getTotalCartAmount()}</h3>
          <p className="text-end">Tax included and shipping calculated at checkout</p>
          <div className="d-grid gap-2">
            <Button onClick={processCheckout} variant="warning" size="lg" className="my-4">
              CHECKOUT
            </Button>
          </div>
        </div>
      </div>
      <Question />
    </Container>
    <Footer />


  </div>;
}

export default Cart;