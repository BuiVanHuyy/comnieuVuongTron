import { useContext } from "react";
import { Context } from "../../utils/AppContext";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import FormUserInfo from "./FormUserInfo";
import "../../../public/css/confirm.css";
function ConfirmComponent() {
  const { orderList, handleDel, totalMoney, tax } = useContext(Context);
  return (
    <div className="main-content">
      <h1 className="title-heading text-center">Xác nhận đơn hàng</h1>
      <Container fluid className="mt-3">
        <Row id="confirm-container">
          <Col id="confirm-left" md={8}>
            <div className="reciept">
              <div className="confirm-table-heading text-center">
                <Container fluid className="table-content px-1">
                  <Row className="w-100 text-center">
                    <Col xs={4}>Tên món</Col>
                    <Col xs={2}>Số lượng</Col>
                    <Col xs={2}>Đơn giá</Col>
                    <Col xs={4}>Thành tiền</Col>
                  </Row>
                </Container>
              </div>
              <Container fluid className="table-content px-1  ">
                {orderList.map((val, i) => (
                  <Row key={i} className="text-center comfirm-product-item">
                    <Col className="confirm-item-col" xs={4}>
                      {val.name}
                    </Col>
                    <Col className="confirm-item-col" xs={2}>
                      {val.quality}
                    </Col>
                    <Col className="confirm-item-col" xs={2}>
                      {val.price.toLocaleString("vi")}
                    </Col>
                    <Col className="confirm-item-col" xs={3}>
                      {(val.price * val.quality).toLocaleString("vi")}
                    </Col>
                    <Col
                      className="confirm-item-col"
                      xs={1}
                      style={{ fontSize: "20px" }}
                    >
                      <MdOutlineRemoveCircleOutline
                        onClick={() => handleDel(val.name)}
                      />
                    </Col>
                    {val.requirement != "" && (
                      <Col
                        xs={12}
                        className="text-start cart-product-requirement"
                      >
                        ({val.requirement})
                      </Col>
                    )}
                  </Row>
                ))}
              </Container>
            </div>
            <ListGroup>
              <ListGroup.Item className="confirm-form-item d-flex justify-content-between">
                <span>Thành tiền:</span>
                <span style={{ fontWeight: "600" }}>
                  {totalMoney.toLocaleString("vi")}₫
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="confirm-form-item d-flex justify-content-between">
                <span>Thuế: </span>{" "}
                <span style={{ fontWeight: "600" }}>
                  {tax.toLocaleString("vi")}₫
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="confirm-form-item d-flex justify-content-between">
                <span>Tổng tiền:</span>
                <span style={{ fontWeight: "600" }}>
                  {(totalMoney + tax).toLocaleString("vi")}₫
                </span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col id="confirm-right" md={4}>
            <FormUserInfo />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ConfirmComponent;
