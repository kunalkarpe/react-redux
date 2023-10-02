import React from "react";
import "./Card.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({ data, addToCart }) => {
  const { name, description, price, type, url } = data;

  return (
    <>
      <div className="card mt-3 mb-3 card-w shadow">
        {/* <img src={url} className="card-img-top  img-h rounded" alt="..." /> */}
        <LazyLoadImage
          effect="blur"
          src={url}
          alt="..."
          className="card-img-top  img-h rounded"
        ></LazyLoadImage>
        <div className="card-body">
          <h5 className="card-title lora fw-semibold">{name}</h5>
          <p className="card-text fw-semibold roboto">For {type}</p>
          <p className="card-text franklin">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p className="card-text lora">
              Price : <span className="fw-medium">{price} Rs</span>{" "}
            </p>
            <button
              className="btn  btn-outline-warning btn-sm"
              onClick={addToCart}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
