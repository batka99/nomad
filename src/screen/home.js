import { Button, Carousel, Card, Navbar } from 'react-bootstrap';
import logo from '../images/logo/logo.png'
import user from '../images/logo/user.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Player, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css'; // import css
import { useState } from 'react';
import ExampleCarouselImage1 from '../images/carousels/aa.jpeg';
import ExampleCarouselImage2 from '../images/carousels/2.jpeg';
import ExampleCarouselImage3 from '../images/carousels/3.jpeg';
import productImage from "../images/product/1.jpeg"
import { Banner, PRODUCTS } from '../data/data';
import image1 from "../images/product/1.jpeg"
import image2 from "../images/product/2.jpeg"
import image3 from "../images/product/3.jpeg"
import image4 from "../images/product/4.jpeg"
import { useNavigate } from 'react-router-dom';
import MainNavbar from '../component/navbar';
import DemoCarousel from "../component/slider"
import Footer from '../component/footer';
import Question from '../component/question';














function Home() {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate()

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>

        <MainNavbar/>
            


            <Carousel>
                <Carousel.Item interval={1000}>
                    <Player
                        //   muted
                        //   autoPlay
                        poster={ExampleCarouselImage1}>

                        <BigPlayButton position="center" />
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                    </Player>
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img src={ExampleCarouselImage2} style={{ width: "100%", height: "50%" }} />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img src={ExampleCarouselImage1} style={{ width: "100%", height: "50%" }} />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <h1 className='text-center mt-4 mb-4'>BEST SELLER</h1>


            <div className='row mx-2'>
                {PRODUCTS.map((product) => (
                    <div className="col-6 col-xs-5 col-sm-6 col-lg-3 mt-2 px-0">
                        <Card className='mx-2'>
                            <Player
                                //   muted
                                //   autoPlay
                                poster={ExampleCarouselImage2} fluid className="px-0">

                                <BigPlayButton position="center" />
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                            </Player>
                            <Card.Body>
                                <div className='row'>
                                    <div className='col-7 px-2'>
                                        <h5 className='text-start lead' >{product.title}</h5>
                                    </div>
                                    <div className='col-5 pr-4'>
                                        <h5 className='text-end '>${product.price}</h5>
                                    </div>

                                </div>
                                {/* <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text> */}
                                <div className='text-center mt-4'>
                                    <Button onClick={()=> navigate(`/detail/${product.id}`)} variant="warning">Order now</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            <h1 className='text-center mt-4 mb-4'>OUR SPECIAL</h1>

            <DemoCarousel/>


            <h1 className='text-center mt-4 mb-4'>NEW PRODUCTS</h1>


            <div className='row mx-2'>
                {PRODUCTS.map((product) => (
                    <div className="col-6 col-xs-5 col-sm-6 col-lg-3 mt-2 px-0">
                        <Card className='mx-2'>
                            <Player
                                //   muted
                                //   autoPlay
                                poster={ExampleCarouselImage2} fluid className="px-0">

                                <BigPlayButton position="center" />
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                            </Player>
                            <Card.Body>
                                <div className='row'>
                                    <div className='col-8'>
                                        <h5>{product.title}</h5>
                                    </div>
                                    <div className='col-4'>
                                        <h5>${product.price}</h5>
                                    </div>

                                </div>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='text-center'>
                                    <Button onClick={()=> navigate(`/detail/${product.id}`)} variant="warning">Order now</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <div>
 
            </div>
            <h1 className='text-center mt-4 mb-4'>HOW TO ORDER</h1>

            <div className='row bg-warning mt-4 mx-4 p-4' style={{ borderRadius: "10px" }}>
                <div className='col-12 col-md-6'>
                    <h4>How to Order</h4>
                    <h1>{Banner.title}</h1>
                    <label>{Banner.desc}</label>
                </div>

                <div className='col-12 col-md-6'>
                    <div className='row'>
                        <div className='row'>
                            <div className='col-6 mt-4'>
                                <Card className='col'>
                                    <Card.Body>
                                        <div className='col-12 text-center'>
                                            <h1>STEP 1</h1>
                                        </div>
                                        <label className='text-center'>
                                            Choose the dance crew you like in our shop and enjoy
                                        </label>
                                    </Card.Body>
                                </Card>

                            </div>
                            <div className='col-6 mt-4'>
                                <Card className='col'>
                                    <Card.Body>
                                        <div className='col-12 text-center'>
                                            <h1>STEP 2</h1>
                                        </div>
                                        <label className='text-center'>
                                        The only required information is the 15 word message. 
                                        </label>
                                    </Card.Body>
                                </Card>

                            </div>
                            <div className='col-6 mt-4'>
                                <Card className='col'>
                                    <Card.Body>
                                        <div className='col-12 text-center'>
                                            <h1>STEP 3</h1>
                                        </div>
                                        <label className='text-center'>
                                        Wait 1 - 3 business days or you can purchase 1 day Super Fast delivery for an extra charge.
                                        </label>
                                    </Card.Body>
                                </Card>

                            </div>
                            <div className='col-6 mt-4'>
                                <Card className='col'>
                                    <Card.Body>
                                        <div className='col-12 text-center'>
                                            <h1>STEP 4</h1>
                                        </div>
                                        <label className='text-center'>
                                        You will receive an email with a custom-made E-Card link and your video file link.
                                        </label>
                                    </Card.Body>
                                </Card>

                            </div>
                        </div>

                    </div>
                </div>

            </div>



            <h1 className='text-center mt-4'>WHY YOU SHOULD CHOOSE US</h1>


            <div className='row p-4' style={{ borderRadius: "10px" }}>
                <div className='col-12 col-md-6 mt-4'>

                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <Player
                                //   muted
                                //   autoPlay
                                poster={ExampleCarouselImage1}>

                                <BigPlayButton position="center" />
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                            </Player>
                            <Carousel.Caption>
                                {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img src={ExampleCarouselImage2} style={{ width: "100%", height: "50%" }} />
                            <Carousel.Caption>
                                {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>


                    </Carousel>


                </div>
                <div className='col-12 col-md-6 mt-4'>
                    <h5>Thoughtful, Unique, & Hilarious</h5>
                    <h1>Why you should order from us</h1>
                    <label>Our prices are affordable compared to others. We believe that everyone should be able to send a unique wish without breaking the bank!
                        We use A.I text-to-speech software to generate the chant (Non-english messages only). Others use Google translate to generate the chant and it sounds horrible.
                        We will send you a Google Drive link for your video! We will store your video for 7 days to ensure you have enough time to download & share with your loved ones!
                        By ordering from us, you are also providing employment to the dance crews. We are also donating a portion of the proceeds to charities that support developing countries.
                        Quick customer service & support. We will also give you advice on how to make the perfect wishing video. You can reach out to us via E-Mail or WhatsApp</label>

                </div>



            </div>
            <Question/>

            <Footer/>




        </>
    );
}

export default Home;