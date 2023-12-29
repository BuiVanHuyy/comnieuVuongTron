import PropTypes from "prop-types";
import { useContext, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { Context } from "../../utils/AppContext";
import { FaClipboardList, FaHeart } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { MdEditNote } from "react-icons/md";

DishItemModal.propTypes = {
  item: PropTypes.object,
  show: PropTypes.bool,
  setShow: PropTypes.func,
};

function DishItemModal({ item, show, setShow }) {
  const { handleAddToLikeList, handleAddToCart, likeList } =
    useContext(Context);
  const [require, setRequire] = useState("");
  const handleRequirement = (e) => {
    setRequire(e.target.value);
  };
  return (
    <Modal
      scrollable={true}
      size="lg"
      show={show}
      onHide={() => {
        setShow(false);
      }}
    >
      <Modal.Header
        style={{ borderBottom: "none", paddingBottom: "0px" }}
        closeButton
      >
        <Modal.Title>Chi tiết món ăn</Modal.Title>
      </Modal.Header>
      <Modal.Body className="mb-4">
        <Container>
          <Row>
            <Col className="detail-modals-thumb" lg={4} md={5} sm={6}>
              <img
                src={
                  item.dish_thumb
                    ? item.dish_thumb
                    : "https://drive.google.com/uc?export=view&id=1yzI3CV0iewtwkXrP_MysrPogwlnKP8FI"
                }
              />
            </Col>
            <Col lg={8} md={7} sm={6}>
              <h4 className="detail-modals-title">
                {item.name} {item.isBestSeller && "(Bán chạy)"}
              </h4>
              <p className="m-0 detail-modals-desc">
                Đã bán:{" "}
                <span style={{ fontWeight: "500" }}>
                  {item.SoldQuantity && item.SoldQuantity.toLocaleString("vi")}{" "}
                  phần
                </span>
              </p>
              <p
                className="detail-modals-price"
                style={{
                  color: "rgb(255, 68, 60)",
                  fontWeight: "600",
                  fontSize: "30px",
                }}
              >
                <span>{item.price && item.price.toLocaleString("vi")}</span>
              </p>
              <ButtonGroup aria-label="Basic example">
                <Button
                  className="detail-modals-add"
                  onClick={
                    !item.isSoldOut
                      ? () => {
                          handleAddToCart(item, require), setRequire("");
                        }
                      : undefined
                  }
                  style={item.isSoldOut ? { cursor: "not-allowed" } : {}}
                  variant={item.isSoldOut ? "secondary" : "primary"}
                >
                  {item.isSoldOut ? "Hết hàng" : "Đặt món ngay"}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    handleAddToLikeList(item);
                  }}
                  className={
                    likeList.some((val) => val.name == item.name)
                      ? "text-danger"
                      : ""
                  }
                >
                  <FaHeart />
                </Button>
              </ButtonGroup>
              <div className="w-75" style={{ marginTop: "16px" }}>
                <Form.Label className="h6" htmlFor="requirement">
                  <MdEditNote /> Yêu cầu thêm
                </Form.Label>
                <Form.Control
                  onChange={handleRequirement}
                  type="text"
                  value={require}
                  id="requirement"
                  placeholder="Ít ngọt, không cay,..."
                />
              </div>
              <div
                style={{ borderBottom: "1px dotted gray", marginTop: "16px" }}
              >
                <h6 className="mt-2">
                  <FaClipboardList /> Thành phần:
                </h6>
                <p className="detail-modals-desc">{item.intro}</p>
              </div>
              <div>
                <h6 className="mt-2">
                  <ImSpoonKnife /> Khẩu phần:
                </h6>
                <p className="m-0 detail-modals-desc">
                  {item.servingPortion} người
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default DishItemModal;
