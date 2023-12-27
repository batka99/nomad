import MainNavbar from "../component/navbar";
import { useNavigate, useParams } from 'react-router-dom';
import React, { useContext } from "react";
import image from "../images/product/5.jpeg"
import { Player, BigPlayButton } from 'video-react';
import { Button, Carousel, Card, Navbar, Form } from 'react-bootstrap';
import ExampleCarouselImage1 from '../images/carousels/aa.jpeg';
import ExampleCarouselImage2 from '../images/carousels/2.jpeg';
import ExampleCarouselImage3 from '../images/carousels/3.jpeg';
import { ShopContext} from '../context/shopping_cart'
import { PRODUCTS } from "../data/data";
import { addentional } from "../data/data";
import DemoCarousel from "../component/slider";
import Footer from "../component/footer";

import Checkbox from '../component/checkbox';








function Detail() {
    const {addToCart, cartItems, addAddiontionalToCart} = useContext(ShopContext);
    const [checked, setChecked] = React.useState(false);
    const params = useParams()
    let product = PRODUCTS.find((product)=> product.id === Number(params.id));
    let productAddin = addentional.find((product)=> product.id === Number(params.id));

    const handleChange = () => {
        setChecked(!checked);
        addAddiontionalToCart(2)

      };

    const navigate = useNavigate()

    const checkout = (productId) => {
        addToCart(productId)
        navigate("/checkout")
    }

    return ( <div>

        <MainNavbar/>

        <div className='row mt-4 p-4' style={{ borderRadius: "10px" }}>
                <div className='col-12 col-md-6 mt-4'>

                
           <DemoCarousel
           autoFocus
           autoPlay

           
           />

                    


                </div>
                <div className='col-12 col-md-6 mt-4'>
                    <h2 className="mt-4 text-start">{product.title}</h2>
                    <h5 className="mt-4 text-start">Delivered on Same Day to 2 days via email</h5>
                    <h5 className="mt-4 text-start">Any Message in Any Language Available</h5>
                    <label className="mt-4 text-start">Don't have time? We got you! Grab a Video Voucher at this limited price and claim your video anytime in the next 6 months!</label>
                    <h1 className="mt-4 text-start">Price: ${product.price}</h1>
                    <div  className="text-start" >
                        <h5>What song would you like?</h5>
                        <Checkbox label=" Our Team Picks for you (Speedy and Better Rhythm)"/>
                    </div>
                    <div className="col text-start">
                        <h5>Add another Photo?(+ 18,000 MNT)</h5>
                        <Checkbox label=" I agree to terms & conditions"   />
                   </div>
                   <div className="col text-start">
                        <h5>Christmas Costume(+ 14,000 MNT)</h5>
                        <Checkbox label=" I agree to terms & conditions"   />
                   </div>
                   <div className="col text-start">
                        <h5>Next Day Delivery(+ 36,000 MNT))</h5>
                        <Checkbox label=" I agree to terms & conditions"   />
                   </div>
                   <div className="col text-start">
                        <h5>Next Day Delivery(+ 36,000 MNT))</h5>
                        <Checkbox label=" I agree to terms & conditions"   />
                   </div>
                   
                    <div className="text-start mt-4">
                    <button onClick={()=>{
                    checkout(product.id)
                    handleChange()
                    }} className="btn btn-warning px-5 py-3">checkout</button>
                    </div>
                </div>



            </div>

            <Footer/>

            



    </div> );
}

export default Detail;