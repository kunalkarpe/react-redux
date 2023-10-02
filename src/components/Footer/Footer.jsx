import React from "react";
import { PiPhoneCall } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { SiZomato } from "react-icons/si";
import { SiSwiggy } from "react-icons/si";
import { PiBehanceLogoBold } from "react-icons/pi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { LiaFacebook } from "react-icons/lia";

import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className=" bg-dark text-white position-relative fixed-bottom  ">
        <div className="bg-dark-subtle p-1"></div>
        <Container>
          <h4 className="mt-4 fs-2 ms-1 roboto">Hungry Spot</h4>
          <Row>
            <Col xl={4} lg={4} sm={6} md={4}>
              <Container>
                <Row>
                  <Col className="container">
                    <h3 className="fs-4 text-white-50 text-start poppins">
                      Registered Address
                    </h3>
                    <p className="text-start text-white-50  mukta">
                      Amrut Nagar ,Golibar Road,
                      <br />
                      L.B.S Marg, Ghatkopar (W),
                      <br />
                      Mumbai - 400 086
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h3 className="fs-4 text-white-50 text-start poppins">
                      Branch Address
                    </h3>
                    <p className="text-start text-white-50 mukta">
                      Ram Nagar ,Central Road,
                      <br />
                      G.S.L Marg, Dadar (E),
                      <br />
                      Mumbai - 400 099
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Container className=" text-white-50 text-start poppins">
                    <h3 className="fs-4 text-white-50 text-start poppins">
                      Contact Us
                    </h3>
                    <Row className="text-start text-white-50 mukta">
                      <span>
                        <PiPhoneCall /> +91 9287910542
                      </span>
                    </Row>
                    <Row className="text-start text-white-50 mukta">
                      <span>
                        <BiLogoWhatsapp /> +91 7731821012
                      </span>
                    </Row>
                    <Row className="text-start text-white-50 mukta">
                      <span>
                        <AiOutlineMail /> hungerspot21@gmail.com
                      </span>
                    </Row>
                  </Container>
                </Row>
              </Container>
            </Col>
            <Col xl={4} lg={4} sm={6} md={4} className="mt-2">
              <Container>
                <Row>
                  <Col className="p-3 ">
                    <p className="  fs-5 border-bottom border-info-subtle pb-2">
                      <a
                        href="/"
                        className="text-decoration-none text-info lora"
                      >
                        Carrers
                      </a>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="p-3">
                    <p className="text-info fs-5  border-bottom border-info-subtle pb-2">
                      <a
                        href="/"
                        className="text-decoration-none text-info lora"
                      >
                        Contact Us
                      </a>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <span className="fs-5 text-white  pt-2">
                    <p className="  border-bottom border-white pb-1 lora">
                      Our Partners
                    </p>{" "}
                  </span>
                  <Col lg={4} xs={4} sm={3} className="fs-1  ps-2 ">
                    <SiSwiggy className="text-warning  " />
                  </Col>
                  <Col
                    lg={4}
                    xs={4}
                    sm={3}
                    className="fs-1 justify-content-center p-2"
                  >
                    <SiZomato className="text-danger " />
                  </Col>
                  <Col
                    lg={4}
                    xs={4}
                    sm={3}
                    className="fs-1 justify-content-center p-2"
                  >
                    <PiBehanceLogoBold className="text-success " />
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col xl={4} lg={4} sm={6} md={4} className="   text-start">
              <span className="fs-5 text-white mt-2 text-white ms-2 roboto">
                Follow Us On :
              </span>
              <Row className="ms-2">
                <Col lg={1} sm={1} xs={1}>
                  <LiaFacebook className="fs-4 text-primary" />
                </Col>
                <Col lg={1} sm={1} xs={1}>
                  <AiOutlineInstagram className="fs-4 " />
                </Col>
                <Col lg={1} sm={1} xs={1}>
                  <BiLogoTwitter className="fs-4 text-info" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-2 text-white-50">
              Copyright@HungerSpot.All Rights Reserved
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
