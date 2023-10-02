import React, { useState } from "react";
import "./login.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import { BiLock } from "react-icons/bi";
import { BiSolidEnvelope } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const log = () => {
    if (email.length && password.length !== 0) {
      toast.success("Login Succesfully");
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
            <h3>Login</h3>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col lg={6} className="d-flex justify-content-center height mt-5">
              <label htmlFor="email ">
                <BiSolidEnvelope />
                :
                <input
                  type={email}
                  name="email"
                  placeholder="name@gmail.com"
                  className=" border border-0 border-bottom ms-2"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </Col>
          </Row>
          <Row>
            <Col
              lg={6}
              className="d-flex justify-content-center height mt-3 mb-2"
            >
              <label htmlFor="password">
                <BiLock />
                :
                <input
                  type={password}
                  name="password"
                  className="ms-2 border border-0 border-bottom "
                  placeholder="Your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="d-flex justify-content-center ms-3">
              <Button variant="outline-warning btn-sm roboto" onClick={log}>
                {" "}
                Login
              </Button>
            </Col>
          </Row>
          <Row>
            <Col
              lg={6}
              className="d-flex justify-content-center mt-3 mb-5 franklin"
            >
              <span className="fs-7">
                Not Register yet?{" "}
                <Link
                  to="/signup"
                  className="link-underline-warning text-warning"
                >
                  Signup Now!
                </Link>
              </span>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Login;
