import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MenuData from "../../data/Data";
import Card from "./Card";
import { addToCart } from "../../Redux/Slices/Slice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Menu = () => {
  const [data, setData] = useState(MenuData);
  const [item, setItem] = useState(data);

  const dispatch = useDispatch();

  const sendData = (e) => {
    toast.success("Item added succesfully");
    dispatch(addToCart(e));
  };
  const breakFast = () => {
    const newData = data.filter((food) => {
      return food.type === "Breakfast";
    });
    setItem(newData);
  };
  const lunch = () => {
    const lunchData = data.filter((food) => {
      return food.type === "Lunch";
    });
    setItem(lunchData);
  };
  const dinner = () => {
    const dinnerData = data.filter((food) => {
      return food.type === "Dinner";
    });
    setItem(dinnerData);
  };

  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col lg={4} className="d-flex justify-content-evenly lora">
            <span className="fs-5"> Filter : </span>{" "}
            <span>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={breakFast}
              >
                Breakfast
              </button>
            </span>
            <span>
              <button
                className="btn btn-sm  btn-outline-danger"
                onClick={lunch}
              >
                Lunch
              </button>
            </span>
            <span>
              <button
                className="btn btn-sm  btn-outline-danger"
                onClick={dinner}
              >
                Dinner
              </button>
            </span>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="d-flex flex-wrap justify-content-evenly  mt-3 ">
          {item.map((food) => {
            return (
              <>
                <Card
                  key={food.id}
                  data={food}
                  addToCart={() => sendData(food)}
                />
              </>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Menu;
