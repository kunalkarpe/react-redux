import React, { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { BiLock } from "react-icons/bi";
import { BiSolidLockAlt } from "react-icons/bi";
import { BiSolidEnvelope } from "react-icons/bi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "../Login/login.css";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const log = () => {
    if (
      email.length &&
      password.length &&
      cpassword.length &&
      name.length &&
      number.length !== 0
    ) {
      toast.success("Signup Succesfully");
      navigate("/");
    } else {
      toast.error("Please fill the value");
    }
  };
  return (
    <>
      <Container className="shadow  mt-2 mb-4">
        <Row>
          <Col className="d-flex justify-content-center mt-3 lora">
            <h3>Signup</h3>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col lg={6} className="d-flex justify-content-center height mt-5">
              <label htmlFor="email ">
                <CgProfile />
                :
                <input
                  type={name}
                  name="email"
                  placeholder="Your name"
                  className=" border border-0 border-bottom ms-2"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="d-flex justify-content-center height mt-3">
              <label htmlFor="email ">
                <BiSolidEnvelope />
                :
                <input
                  type={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  placeholder="name@gmail.com"
                  className=" border border-0 border-bottom ms-2"
                />
              </label>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="d-flex justify-content-center height mt-3  ">
              <label htmlFor="password">
                <BiLock />
                :
                <input
                  type={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  className="ms-2 border border-0 border-bottom "
                  placeholder="Your password"
                />
              </label>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="d-flex justify-content-center height mt-3 ">
              <label htmlFor="password">
                <BiSolidLockAlt />
                :
                <input
                  type={cpassword}
                  onChange={(e) => setCpassword(e.target.value)}
                  name="password"
                  className="ms-2 border border-0 border-bottom "
                  placeholder="Confirm password"
                />
              </label>
            </Col>
          </Row>
          <Row>
            <Col
              lg={6}
              className="d-flex justify-content-center height mt-3 mb-3"
            >
              <label htmlFor="password">
                <BiSolidPhoneCall />
                :
                <input
                  type={number}
                  onChange={(e) => setNumber(e.target.value)}
                  name="number"
                  className="ms-2 border border-0 border-bottom "
                  placeholder="Enter your 10 digit number"
                />
              </label>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="d-flex justify-content-center ms-3">
              <Button variant="outline-warning btn-sm roboto" onClick={log}>
                {" "}
                SignUp
              </Button>
            </Col>
          </Row>
          <Row>
            <Col
              lg={6}
              className="d-flex justify-content-center mt-2 mb-5 franklin"
            >
              <span className="fs-7">
                Already a Member?{" "}
                <Link
                  to="/login"
                  className="link-underline-warning text-warning"
                >
                  Login Now!
                </Link>
              </span>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Signup;
