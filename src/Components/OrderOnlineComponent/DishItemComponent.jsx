import { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { IoHeart } from "react-icons/io5";
import bestSellerIcon from "../../../public/img/logo/bestSeller.png";
import { Context } from "../../utils/AppContext";
import DishItemModal from "./DishItemModal";

DishItemComponent.propTypes = {
  item: PropTypes.object,
};
function DishItemComponent({ item }) {
  const { handleAddToCart, handleAddToLikeList, likeList } =
    useContext(Context);
  const [show, setShow] = useState(false);
  return (
    <>
      <Card
        onClick={(event) => {
          const isButtonClick = event.target.tagName.toLowerCase() === "button";
          if (!isButtonClick) {
            setShow(true);
          }
        }}
        className="dish-card-item"
        style={{ cursor: "pointer" }}
      >
        <div className="thumb position-relative">
          <Card.Img
            variant="top"
            src={
              item.dish_thumb
                ? item.dish_thumb
                : "https://lh3.google.com/u/0/d/1yzI3CV0iewtwkXrP_MysrPogwlnKP8FI=w1366-h315-iv1"
            }
          />
          <div
            onClick={(event) => event.stopPropagation()}
            className="position-absolute orderOnline-icon-love-container"
          >
            <span
              onClick={() => {
                handleAddToLikeList(item);
              }}
              className={
                likeList.some((val) => val.name == item.name)
                  ? "text-danger"
                  : ""
              }
            >
              <IoHeart />
            </span>
          </div>
          {item.isBestSeller && (
            <div className="position-absolute orderOnline-icon-bestseller-container">
              <img src={bestSellerIcon} alt="" />
            </div>
          )}
          {item.isSoldOut && (
            <div className="position-absolute soldOut-icon-container">
              Hết hàng
            </div>
          )}
        </div>
        <Card.Body>
          <Card.Title
            style={{
              width: "100%",
              whiteSpace: "nowrap",
              textOverflow: "clip",
              overflow: "hidden",
            }}
          >
            {item.name}
          </Card.Title>
          <Card.Text className="text-danger">
            {item.price && item.price.toLocaleString("vi")} ₫
          </Card.Text>
          <Button
            className="addToCart"
            onClick={
              !item.isSoldOut ? () => handleAddToCart(item, "") : undefined
            }
            style={item.isSoldOut ? { cursor: "not-allowed" } : {}}
            variant={item.isSoldOut ? "secondary" : "primary"}
          >
            {item.isSoldOut ? "Hết hàng" : "Thêm vào giỏ hàng"}
          </Button>
        </Card.Body>
      </Card>
      {item != {} && (
        <DishItemModal show={show} setShow={setShow} item={item} />
      )}
    </>
  );
}

export default DishItemComponent;
