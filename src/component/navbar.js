import { Nav, Navbar, Container} from 'react-bootstrap';
import logo from '../images/logo/logo.png'
import { useNavigate } from 'react-router-dom';




function MainNavbar() {
    const navigate = useNavigate();



    return ( 
        <Navbar bg='warning' expand="lg" data-bs-theme="dark" fixed='top' sticky='bottom' variant="dark" >
                <Container>
                    <Navbar.Brand onClick={()=> navigate('/')}>
                        <img
                            src={logo}
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand onClick={()=> navigate('/')} className='text-black'>Nomad Greetings</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={()=> navigate('/')} className='text-black'>Home</Nav.Link>
                            <Nav.Link href="#link" className='text-black'>Video Greetings</Nav.Link>
                            <Nav.Link href="#link1" className='text-black'>Our journey</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Nav className="me-auto ">
                                <Nav.Link onClick={()=> navigate('/login')} className='text-black'>Login</Nav.Link>
                                <Nav.Link href="#link" className='text-black'>Register</Nav.Link>
                                <Nav.Link onClick={()=> navigate('/checkout')}><i class="fa fa-cart-plus text-black" style={{ fontSize: "24px" }}></i></Nav.Link>

                            </Nav>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
     );
}

export default MainNavbar;