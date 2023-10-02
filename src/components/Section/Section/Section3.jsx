import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Section3 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container className="text-center mt-5 pb-5 pt-5  ">
        <h5 className=" mb-5 lora fs-3">
          <u>Foods We Offer</u>
        </h5>
        <Row>
          <Col md={6} lg={4} className="d-flex justify-content-center">
            <Figure onClick={() => navigate("/menu")}>
              <Figure.Image
                width={210}
                height={180}
                alt="171x180"
                src="https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                fluid
                rounded
              />
              <Figure.Caption className="franklin fs-5">
                BreakFast
              </Figure.Caption>
            </Figure>
          </Col>
          <Col md={6} lg={4} className="d-flex justify-content-center">
            <Figure onClick={() => navigate("/menu")}>
              <Figure.Image
                width={210}
                height={180}
                alt="171x180"
                src="https://plus.unsplash.com/premium_photo-1672363353887-d5a9d1a3c8c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                fluid
                rounded
              />
              <Figure.Caption className="franklin fs-5">Lunch</Figure.Caption>
            </Figure>
          </Col>
          <Col md={6} lg={4} className="d-flex justify-content-center">
            <Figure onClick={() => navigate("/menu")}>
              <Figure.Image
                width={210}
                height={180}
                alt="171x180"
                src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                fluid
                rounded
              />
              <Figure.Caption className="franklin fs-5">Dinner</Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Section3;
