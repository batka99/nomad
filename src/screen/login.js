import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import MainNavbar from "../component/navbar";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function Login() {



    return ( 
        <>
        <MainNavbar/>
        <Container >
        
    
   

        <div className="card bg-warning"  style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}>

      
        <div className="card-body p-5">
            <form>
                <h3>Sign In</h3>

                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-2">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="mb-3 text-center">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-light">Submit</button>
                </div>
                <div className="text-end">
                    <small className="forgot-password ">
                        Forgot <a href="#" style={{textDecoration:"none", color:"blue"}}>password?</a>
                    </small>
                </div>
            </form>
        </div>
        </div>


    </Container>     </> );
    
}






export default Login;