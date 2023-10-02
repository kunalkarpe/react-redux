import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./Section1.css";

const Section1 = () => {
  return (
    <>
      <Container className="mt-5 roboto">
        <Row>
          <Col sm={12} md={12} lg={8} xl={9}>
            <h2>Get Hot & Delecious Food At Your Doorstep</h2>
            <h4 className="mt-3">
              Baked with Love ,every bite will make your mouth filled with
              Happiness
            </h4>
            <h5>So What Are You Waiting For?</h5>

            <Button variant="warning text-white mt-2">Order Now</Button>
          </Col>

          <Col
            className=" d-flex justify-content-center   "
            sm={12}
            md={12}
            lg={4}
            xl={3}
          >
            <LazyLoadImage
              effect="blur"
              src=" https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80"
              className="shadow rounded-circle img-fluid"
            ></LazyLoadImage>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Section1;
