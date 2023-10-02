import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Contact.css";

const ContactUs = () => {
  return (
    <>
      <Container>
        <Row>
          <span className="fs-2 lora"> Check our Restaurant near you.</span>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1834169165827!2d72.91405497474855!3d19.09960785123186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7cb91a08e4b%3A0x10408c61181384c3!2sR%20City%20Mall!5e0!3m2!1sen!2sin!4v1695816621305!5m2!1sen!2sin"
            className="contact "
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            id="1frame"
            title="myFrame"
          ></iframe>
        </Row>
      </Container>
      <Container className="mt-3 mb-3 ">
        <Row>
          <Col lg={12} className="d-flex justify-content-center">
            <span className="fs-3 text-bold roboto">Send FeedBack </span>
          </Col>
        </Row>
      </Container>
      <Container className="w-50 border border-dark-subtle rounded-3  mb-5 height-contact">
        <Row>
          <Col lg={8} className="d-flex justify-content-start mt-5 mb-2 ">
            <span className="ms-4">Username:</span>
            <input type="text" className="border rounded ms-2" />
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="d-flex justify-content-start  mt-5 mb-2  ">
            <span className="ms-4">Email:</span>
            <input
              type="email"
              placeholder="name@gmail.com"
              className="border rounded ms-2"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="d-flex justify-content-start  mt-5 mb-4  ">
            <span className="ms-4">FeedBack:</span>

            <div className="form-floating ms-2">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
