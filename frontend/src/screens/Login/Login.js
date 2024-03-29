import React, { useState,connect} from 'react';
//import 'react-phone-number-input/style.css'
import "./Login.css";
import Loading from "../../components/Loading";
import { Form,
Button,
Row,Col} from 'react-bootstrap';
import {Link,  useNavigate} from 'react-router-dom';
import axios from "axios";
import ErrorMessage from '../../components/ErrorMessage';
import fs from "../FirstScreen/FirstScreen";

const Login = ({history}) => {
    const navigate =useNavigate();
    const [email,setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [error, setError]=useState(false)
    const [loading, setLoading]=useState(false)

    const submitHandler=async(e)=>{
        e.preventDefault();
        try{
            const config={
                headers:{
                    "Content-type":"application/json"
                }
            }
            setLoading(true)
            const { data } = await axios.post(
                "/api/users/login",
                {
                    email,
                    password,
                },
                config,
            );
            setLoading(false);
            localStorage.setItem('UserInfo',JSON.stringify(data));
            navigate("/fs")
        }catch(error){
            setError(error.response.data.message);
            setLoading(false);
        }
    }
  return (
    <div className='loginContainer'>
        <h1 class="title">
            LOGIN
        </h1>
        <hr></hr>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading/>}
    <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
                type="email" 
                value={email}
                placeholder="Enter email" 
                onChange={(e)=>setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
            type="password" 
            value={password}
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Row className="py-3">
        <Col>
        New User? <Link to="/SignUp" className='link'>SignUp here</Link> </Col>
    </Row>
    </div>
  );
};

export default Login;
