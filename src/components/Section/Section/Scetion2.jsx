import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import delivery from "./Section-image/delivery.png";
import payment from "./Section-image/secure-payment.png";
import badge from "./Section-image/badge.png";
import "./Section2.css";

const Scetion2 = () => {
  return (
    <>
      <div className="mt-5 mb-5 ">
        <Container className="mt-5 mb-5">
          <h3 className="d-flex text-dark  justify-content-center mb-5 mt-3 roboto">
            <u>Benefits</u>
          </h3>
          <Row className="justify-content-around mt-5 mb-5 pt-3 pb-5">
            <Col
              sm={8}
              md={8}
              lg={3}
              className="  border border-dark rounded-4 d-flex justify-content-center ms-1 me-1 mt-2 mb-2 "
            >
              <Figure>
                <Figure.Image
                  width={80}
                  height={100}
                  alt="171x180"
                  src={delivery}
                  fluid
                />
                <Figure.Caption className="lato">
                  Free Home Delivery
                </Figure.Caption>
              </Figure>
            </Col>
            <Col
              sm={8}
              md={8}
              lg={3}
              className="border border-dark rounded-4 ms-1 me-1 d-flex justify-content-center mt-2 mb-2"
            >
              <Figure>
                <Figure.Image
                  width={80}
                  height={100}
                  alt="171x180"
                  src={payment}
                  fluid
                />
                <Figure.Caption className="lato">
                  Payment Protection
                </Figure.Caption>
              </Figure>
            </Col>
            <Col
              sm={8}
              md={8}
              lg={3}
              className="border border-dark rounded-4 ms-1 me-1 d-flex justify-content-center mt-2 mb-2"
            >
              <Figure>
                <Figure.Image
                  width={80}
                  height={100}
                  alt="171x180"
                  src={badge}
                  fluid
                />
                <Figure.Caption className="lato">Quality Food</Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Scetion2;
