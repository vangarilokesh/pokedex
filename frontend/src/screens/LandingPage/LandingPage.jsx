import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Row,
    Button,
} from "react-bootstrap";

import "./LandingPage.css";

import imagePoke from "./imagePoke.jpeg";

export const landingPage = () => {
  // useEffect(() => { 
  //   const userInfo = localStorage.getItem("userInfo");
  //   if(userInfo){
  //       history.push("/");
  //   }
  // }, [history]);
  return (
    <div className="main">
        <Container>
            <Row>
                <div className="intro-text">
                  <div>
                    <h1 className="title">PokeDex is running!!!</h1>
                    <p className="into-text">A guied to find Pokemon....</p>
                    <img 
                      alt="Pokedex!" 
                      src={imagePoke}
                      style={{ height: "350px"}} 
                      />
                    <div className="buttonContainer">
                      <Link to = "/login">
                        <Button size="lg" className="landingbutton"
                        variant="outline-primary">Login</Button>
                      </Link>
                      <Link to ="/signup">
                        <Button size="lg" className="landingbutton">Signup</Button>
                      </Link>
                    </div>
                  </div>
                </div>
            </Row> 
        </Container>
    </div>
  );
};

export default landingPage;