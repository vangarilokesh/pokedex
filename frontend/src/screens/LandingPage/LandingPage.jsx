import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Button } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import "./LandingPage.css";

export const landingPage = () => {
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   if(userInfo){
  //       history.push("/");
  //   }
  // }, [history]);
  return (
    <div
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/564455.jpg")`,
      }}
      className="main"
    >
      <Container>
        <Row>
          <div>
            <div>
              <h1 className="titlelp">PokeDex is running!!!</h1>
              <p className="into-textlp">A guide to find Pokemon....</p>
              {/* <img
                      alt="Pokedex!"
                      src={imagePoke}
                      style={{ height: "100vh"}}
                      /> */}
              <div className="buttonContainer">
                <Link to="/login">
                  <Button
                    size="lg"
                    className="landingbutton"
                    variant="outline-primary"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    size="lg"
                    className="landingbutton"
                    variant="outline-primary"
                  >
                    Signup
                  </Button>
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
