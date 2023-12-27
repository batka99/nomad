import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ExampleCarouselImage1 from '../images/carousels/aa.jpeg';
import ExampleCarouselImage2 from '../images/carousels/2.jpeg';
import ExampleCarouselImage3 from '../images/carousels/3.jpeg';

function DemoCarousel() {
    return ( 
        <Carousel autoPlay>
                <div>
                    <img src={ExampleCarouselImage1} />
                    
                </div>
                <div>
                    <img src={ExampleCarouselImage2} />
                </div>
                <div>
                    <img src={ExampleCarouselImage3} />
                </div>
            </Carousel>
     );
}

export default DemoCarousel;



