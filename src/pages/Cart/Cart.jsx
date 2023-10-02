import React, { useEffect, useState } from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import { useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  removeAll,
} from "../../Redux/Slices/Slice";
import GooglePayButton from "@google-pay/button-react";

const Cart = () => {
  const { carts } = useSelector((state) => state.allCart);
  console.log(carts);

  const [amount, setAmount] = useState(0);

  const totalPrice = () => {
    let total = 0;
    carts.map((item, index) => {
      return (total = item.price * item.qnty + total);
    });
    setAmount(total);
  };

  const dispatch = useDispatch();

  const handleIncrement = (e) => {
    dispatch(addToCart(e));
  };

  const removeItem = (e) => {
    dispatch(removeFromCart(e));
  };

  const decreaseItem = (e) => {
    dispatch(decreaseQuantity(e));
  };
  const deleteAll = () => {
    dispatch(removeAll());
  };

  useEffect(() => {
    totalPrice();
  }, [totalPrice]);
  return (
    <>
      <Container>
        {carts.length > 0 ? (
          <>
            <Container className="border border-dark-subtle rounded mb-5 mt-3 shadow   mb-5 bg-body-tertiary rounded">
              <Row>
                <Col className=" bg-dark   justify-content-between d-flex border-top rounded text-white pt-2 pb-2 ">
                  <span className="fs-4 b">Cart</span>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteAll()}
                  >
                    Remove all
                  </button>
                </Col>
              </Row>
              <Row className=" pb-4 pt-2 ">
                <Col className="pt-4 ">
                  {carts.map((item) => {
                    return (
                      <>
                        <Container>
                          <Row
                            className="align-align-items-center justify-content-center"
                            key={item.id}
                          >
                            <Col
                              xs={12}
                              sm={12}
                              md={3}
                              lg={2}
                              className="justify-content-center d-flex mt-3"
                            >
                              {" "}
                              <Figure>
                                <Figure.Image
                                  width={70}
                                  height={80}
                                  alt="171x180"
                                  src={item.url}
                                  rounded
                                />
                              </Figure>
                            </Col>
                            <Col
                              // xs={{ span: 12, offset: 0 }}
                              // sm={{ span: 12, offset: 0 }}
                              xs={12}
                              sm={12}
                              md={2}
                              lg={3}
                              className="align-items-center justify-content-center d-flex mb-2"
                            >
                              {item.name}
                            </Col>
                            <Col
                              xs={4}
                              sm={3}
                              md={2}
                              lg={3}
                              className="justify-content-center d-flex align-items-center mb-2"
                            >
                              <button
                                className="btn btn-outline-warning"
                                onClick={() => removeItem(item)}
                              >
                                <MdDeleteForever />
                              </button>
                            </Col>
                            <Col
                              xs={4}
                              sm={3}
                              md={3}
                              lg={2}
                              className="justify-content-around align-items-center d-flex"
                            >
                              <button
                                className="btn btn-sm btn-outline-warning"
                                onClick={
                                  item.qnty > 1
                                    ? () => decreaseItem(item)
                                    : () => removeItem(item)
                                }
                              >
                                -
                              </button>{" "}
                              {item.qnty}{" "}
                              <button
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => handleIncrement(item)}
                              >
                                +
                              </button>
                            </Col>
                            <Col
                              xs={4}
                              sm={4}
                              md={2}
                              lg={2}
                              className="justify-content-center  align-items-center d-flex"
                            >
                              <span className="ms-4">
                                {item.qnty * item.price} Rs
                              </span>
                            </Col>
                          </Row>
                        </Container>
                      </>
                    );
                  })}
                </Col>
              </Row>
            </Container>
            <Container className="  d-flex justify-content-center mb-4">
              <Row className=" pb-2 border border-dark-subtle w-75 rounded ">
                <h5 className="mt-2">Order Details</h5>
                <Col xs={6} lg={10} className="mt-2">
                  <span className="justify-content-start  d-flex align-items-center">
                    Sub Total:
                  </span>
                </Col>
                <Col
                  xs={6}
                  lg={2}
                  className="justify-content-center ps-4 d-flex align-items-center"
                >
                  {amount} Rs
                </Col>
                <Col xs={6} lg={10} className="mt-2">
                  <span className="justify-content-start  d-flex align-items-center">
                    Shipping Charges:
                  </span>
                </Col>
                <Col
                  xs={6}
                  lg={2}
                  className="justify-content-center ps-4 d-flex align-items-center"
                >
                  100 Rs
                </Col>
                <Col xs={6} lg={10} className="mt-2">
                  <span className="justify-content-start  d-flex align-items-center">
                    Order Total
                  </span>
                </Col>
                <Col
                  xs={6}
                  lg={2}
                  className="justify-content-center ps-4 d-flex align-items-center"
                >
                  {amount + 100} Rs
                </Col>
                <Col className="border-top mt-2 border-dark-subtle d-flex justify-content-center pt-2">
                  {/* <button
                    className="btn btn-outline-warning"
                    onClick={() => makePayment(Payable)}
                  >
                    Make Payment
                  </button> */}
                  <button
                    type="button"
                    className="btn btn-outline-warning fluid btn-sm"
                  >
                    <GooglePayButton
                      environment="TEST"
                      paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                          {
                            type: "CARD",
                            parameters: {
                              allowedAuthMethods: [
                                "PAN_ONLY",
                                "CRYPTOGRAM_3DS",
                              ],
                              allowedCardNetworks: ["MASTERCARD", "VISA"],
                            },
                            tokenizationSpecification: {
                              type: "PAYMENT_GATEWAY",
                              parameters: {
                                gateway: "example",
                                gatewayMerchantId: "exampleGatewayMerchantId",
                              },
                            },
                          },
                        ],
                        merchantInfo: {
                          merchantId: "12345678901234567890",
                          merchantName: "Demo Merchant",
                        },
                        transactionInfo: {
                          totalPriceStatus: "FINAL",
                          totalPriceLabel: "Total",
                          totalPrice: "100.00",
                          currencyCode: "USD",
                          countryCode: "US",
                        },
                      }}
                      onLoadPaymentData={(paymentRequest) => {
                        console.log("load payment data", paymentRequest);
                      }}
                      buttonColor="default"
                      buttonType="pay"
                    />
                  </button>
                </Col>
              </Row>
            </Container>
          </>
        ) : (
          <>
            {/* For empty Cart */}
            <Container className=" border  shadow p-3 mb-5 bg-body-tertiary rounded rounded mb-5 mt-3">
              <Row>
                <Col className=" bg-dark   border border-top rounded text-white pt-2 pb-2 ">
                  <h5>Cart</h5>
                </Col>
              </Row>
              <Row>
                <Col className="pt-5 pb-5  text-center  border-top-0">
                  Your Cart is Empty!
                </Col>
              </Row>
            </Container>
          </>
        )}
      </Container>
    </>
  );
};

export default Cart;
