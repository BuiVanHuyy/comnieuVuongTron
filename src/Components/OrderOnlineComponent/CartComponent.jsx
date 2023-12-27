import { Modal, Button, Container, Row, Col, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../../utils/AppContext";
import { Link } from "react-router-dom";
import ItemCartComponent from "./ItemCartComponent";
CartComponent.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
};

function CartComponent({ setShow, show }) {
  const { orderList, totalMoney } = useContext(Context);
  return (
    <Modal
      id="card-container"
      scrollable={true}
      show={show}
      onHide={() => {
        setShow(false);
      }}
    >
      <Modal.Header
        id="cart-title-modal"
        className="pb-0"
        style={{ borderBottom: "none" }}
        closeButton
      >
        <Modal.Title>Đơn hàng của bạn</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {orderList.length > 0 ? (
          <div className="reciept">
            <div className="table-heading text-center">
              <Container fluid className="table-content px-2">
                <Row className="w-100 text-center">
                  <Col className="cart-item-heading" xs={4}>
                    Tên món
                  </Col>
                  <Col className="cart-item-heading" xs={2}>
                    Số lượng
                  </Col>
                  <Col className="cart-item-heading" xs={2}>
                    Đơn giá
                  </Col>
                  <Col className="cart-item-heading" xs={4}>
                    Thành tiền
                  </Col>
                </Row>
              </Container>
            </div>
            <Container fluid className="table-content px-2">
              {orderList &&
                orderList.map((item, i) => (
                  <ItemCartComponent val={item} key={i} />
                ))}
            </Container>
          </div>
        ) : (
          <h4 className="text-center py-5">Giỏ hàng của bạn đang trống.</h4>
        )}
      </Modal.Body>
      {orderList.length > 0 && (
        <Modal.Footer style={{ borderTop: "none" }} className="pt-0">
          <p className="cartFooterContent">
            <strong>Tổng cộng: </strong>
            {totalMoney.toLocaleString("vi")} ₫
          </p>
          <Link to={"/confirmOrder"} className="text-light">
            <Button className="cartBtn" variant="primary">
              Thanh toán
            </Button>
          </Link>
        </Modal.Footer>
      )}
    </Modal>
  );
}

export default CartComponent;
