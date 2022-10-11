import React, { useState,} from 'react';
import 'react-phone-number-input/style.css'
import "./SignUp.css";
import { Form,
Container,
Button,} from 'react-bootstrap';
const SignUp = () => {
        const [email, setEmail] = useState("");
        const [name, setName] = useState("");
        const [pic, setPic] = useState(
          "blank-prblank-profile-picture-973460__340.jpg"
        );
        const [password, setPassword] = useState("");
        const [confirmpassword, setConfirmPassword] = useState("");
        const [message, setMessage] = useState(null);
  return (
    <Container>
        <h1 class="title">
            SignUp and Join Us!
        </h1>
        <hr></hr>

    <Form>
        <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>

      {/* <Form.Group controlId="pic">
        <Form.Lable>Profile Picture</Form.Lable>
        <Form.File 
          //onChange={(e)=>postDetails(e.target.files[0])}
          id="custom-file"
          type="image/png"
          lable="Upload Profile Picture"
          custom
        />
      </Form.Group> */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default SignUp;