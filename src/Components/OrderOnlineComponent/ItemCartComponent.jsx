import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import { CiEdit } from "react-icons/ci";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  MdDownloadDone,
  MdOutlineRemoveCircleOutline,
  MdEditNote,
} from "react-icons/md";
import { Context } from "../../utils/AppContext";

ItemCartComponent.propTypes = {
  val: PropTypes.object,
};

function ItemCartComponent({ val }) {
  const { handleDel, handleQuality, setOrderList, orderList, onChangeQuality } =
    useContext(Context);
  const index = orderList.findIndex((item) => item.id === val.id);
  const tempList = [...orderList];
  const [count, setCount] = useState(val.quality);
  const [isEdit, setIsEdit] = useState(false);
  const [isAddReq, setIsAddReq] = useState(false);
  const [editedReq, setEditedReq] = useState(val.requirement);
  const hanldeChangeRequirement = (e) => {
    setEditedReq(e.target.value);
  };
  const handleSave = () => {
    if (document.querySelector(".itemRequire").value == "" || editedReq != "") {
      tempList[index].requirement = editedReq;
      setOrderList(tempList);
    }
    setIsAddReq(false);
    setIsEdit(!isEdit);
  };
  const handleAddRequirement = (e) => {
    setEditedReq(e.target.value);
  };
  const handleQualityChange = (type) => {
    if (type == "minus") {
      if (val.quality > 1) {
        handleQuality("minus", val.id, 1);
        setCount(count - 1);
      }
    } else {
      setCount(parseInt(count) + 1);
      handleQuality("plus", val.id, 1);
    }
  };
  const handleOnChangeQuality = (e) => {
    if (e.target.value > 0) {
      onChangeQuality(e.target.value, val.id);
      setCount(e.target.value);
    }
    if (e.target.value == "") {
      onChangeQuality(1, val.id);
      setCount(1);
    }
  };
  return (
    <Row className="text-center cart-product-item">
      <Col
        className="item-cart-col d-flex align-items-center justify-content-center"
        xs={4}
      >
        {val.name}
      </Col>
      <Col
        xs={2}
        className="item-cart-col d-flex align-items-center justify-content-center"
      >
        <button
          className="controlQuality"
          onClick={() => handleQualityChange("plus")}
          style={{
            border: "none",
            padding: "3px 10px",
            backgroundColor: "transparent",
            fontSize: "11px",
          }}
        >
          <FaPlus />
        </button>
        <input
          type="number"
          id="quality-input"
          onChange={handleOnChangeQuality}
          value={count}
        />
        <button
          className="controlQuality"
          onClick={() => handleQualityChange("minus")}
          style={{
            border: "none",
            padding: "3px 10px",
            backgroundColor: "transparent",
            fontSize: "11px",
          }}
        >
          <FaMinus />
        </button>
      </Col>
      <Col
        className="item-cart-col d-flex align-items-center justify-content-center"
        xs={2}
      >
        {val.price.toLocaleString("vi")}
      </Col>
      <Col
        className="item-cart-col d-flex align-items-center justify-content-center"
        xs={2}
      >
        {(val.price * count).toLocaleString("vi")}
      </Col>
      <Col className=" d-flex align-items-center justify-content-center" xs={2}>
        {(val.requirement == "" || isAddReq == true) && (
          <MdEditNote
            className="last-col-icon w-50"
            onClick={() => {
              setIsAddReq(true), setIsEdit(true);
            }}
            cursor={"pointer"}
            style={{ marginRight: "10px" }}
          />
        )}
        <MdOutlineRemoveCircleOutline
          className="last-col-icon w-50"
          cursor={"pointer"}
          onClick={() => handleDel(val.name)}
        />
      </Col>
      {val.requirement != "" && (
        <Col xs={12} className="text-start cart-product-requirement">
          {isEdit ? (
            <input
              className="itemRequire"
              style={{ border: "1px solid gray" }}
              type="text"
              onChange={hanldeChangeRequirement}
              defaultValue={val.requirement}
            />
          ) : (
            <input
              style={{ border: "none" }}
              type="text"
              defaultValue={val.requirement}
              readOnly
            />
          )}
          {isEdit ? (
            <MdDownloadDone
              onClick={handleSave}
              style={{
                fontSize: "20px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            />
          ) : (
            <CiEdit
              onClick={() => setIsEdit(!isEdit)}
              style={{
                fontSize: "20px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            />
          )}
        </Col>
      )}
      {isAddReq && (
        <Col xs={12} className="cart-product-requirement text-start">
          {isEdit ? (
            <input
              className="itemRequire"
              onChange={handleAddRequirement}
              style={{ border: "1px solid gray" }}
              type="text"
              defaultValue={val.requirement}
            />
          ) : (
            <input
              style={{ border: "none" }}
              type="text"
              defaultValue={val.requirement}
              readOnly
            />
          )}
          {isEdit ? (
            <MdDownloadDone
              onClick={handleSave}
              style={{
                fontSize: "20px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            />
          ) : (
            <CiEdit
              onClick={() => setIsEdit(!isEdit)}
              style={{
                fontSize: "20px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            />
          )}
        </Col>
      )}
    </Row>
  );
}

export default ItemCartComponent;
