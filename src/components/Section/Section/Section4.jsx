import React from "react";
import { Col, Container, Row, Figure } from "react-bootstrap";

const Section4 = () => {
  return (
    <>
      <div className=" bg-dark">
        <Container>
          <h4 className=" p-3 text-warning text-center mt-5 open-sans">
            Our Talented Chief
          </h4>

          <Row className="text-white ">
            <Col
              sm={6}
              lg={3}
              md={6}
              className="d-flex justify-content-center align-items-center "
            >
              <Figure>
                <Figure.Image
                  roundedCircle
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                />
                <Figure.Caption className="text-white text-center lora">
                  Alice Moss
                </Figure.Caption>
              </Figure>
            </Col>

            <Col
              sm={6}
              lg={3}
              md={6}
              className="d-flex justify-content-center align-items-center lora"
            >
              <Figure>
                <Figure.Image
                  roundedCircle
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
                <Figure.Caption className="text-white text-center lora">
                  Chris Hollen
                </Figure.Caption>
              </Figure>
            </Col>

            <Col
              lg={3}
              sm={6}
              md={6}
              className="d-flex justify-content-center align-items-center  "
            >
              <Figure>
                <Figure.Image
                  roundedCircle
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=328&height=500&q=60"
                />
                <Figure.Caption className="text-white text-center lora">
                  Spohie Ecellstrow
                </Figure.Caption>
              </Figure>
            </Col>

            <Col
              lg={3}
              sm={6}
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <Figure>
                <Figure.Image
                  roundedCircle
                  width={171}
                  height={180}
                  alt="171x180"
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                />
                <Figure.Caption className="text-white text-center">
                  Jason Roy
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Section4;
