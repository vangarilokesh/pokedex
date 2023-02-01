import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Button } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./";

export const FirstScreen = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400/83fcef17483631.562ba88677085.jpg")`,
      }}
      className="main"
    >
      <Container>
        <Row>
          <div>
            <div>
              <h1 className="title">Welcome to PokeDex!!!</h1>
              <p className="into-text">A guide to find Pokemon....</p>
              {/* <img
                      alt="Pokedex!"
                      src={imagePoke}
                      style={{ height: "100vh"}}
                      /> */}
              <div className="buttonContainer">
                <Link to="/Home">
                  <Button
                    size="lg"
                  >
                    Pokemon List
                  </Button>
                </Link>
                <Link to="/predict">
                  <Button
                    size="lg"
                  >
                    Predict Pokemon Name
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

export default FirstScreen;
