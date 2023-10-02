import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Figure from "react-bootstrap/Figure";
import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60",
    alt: "Image 1",
    title: "Noodles",
  },

  {
    id: 2,
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60",
    alt: "Image 3",
    title: "Sizzlers",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60",
    alt: "Image 2 ",
    title: "Egg Cury",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60",
    alt: "Image 4",
    title: "Manchurian",
  },
];

const ImageSlider = () => {
  const navigate = useNavigate();
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: false,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };
  return (
    <>
      <div className="imgslider  bg-dark  mt-5 rounded-2 justify-content-center">
        <h2 className=" mt-5 mb-3 justify-content-center text-warning align-items-center d-flex lora">
          Try Our Best Dishes !
        </h2>
        <Container className="justify-content-center poppins">
          <Row>
            <Col
              sm={12}
              md={5}
              lg={4}
              xl={3}
              className="justify-content-center"
            >
              <Slider {...settings}>
                {images.map((item) => (
                  <div key={item.id}>
                    <div className="  mt-2 d-flex  ms-1 justify-content-center align-items-center">
                      {/* <Image src={item.src} alt={item.alt} fluid rounded /> */}
                      <LazyLoadImage
                        effect="blur"
                        src={item.src}
                        alt={item.alt}
                        className="  rounded img-fluid"
                        onClick={() => navigate("/menu")}
                      ></LazyLoadImage>
                    </div>
                    <Figure.Caption
                      className=" fs-5 d-flex mt-3 mb-3  text-white  justify-content-center text-center"
                      onClick={() => navigate("/menu")}
                    >
                      {item.title}
                    </Figure.Caption>
                  </div>
                ))}
              </Slider>
            </Col>
            <Col sm={12} md={7} lg={8} xl={9}>
              <p className="text-white fs-5 ms-4 mt-2 lh-base">
                This dishes was filled with species and ingredients which
                <br />
                makes the differnt from other.
                <br />
                We hire different chief for this special dishes.
              </p>
              <p className="text-white fs-5 mt-2 ms-4 lh-base">
                Spices we used in this dishes where created at our places.
                <br />
                This handmade spices add a little differnt flavour compare to
                others dishes.
                <br />
              </p>
              <p className="text-white fs-5 mt-2 ms-4 lh-base">
                We also deliver food to your home and offices,we know that you
                were busy in your work
                <br /> So we take care of your lunch and dinner.
                <br />
                As well we take order for Office Parties and other special
                Occasion
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default ImageSlider;
