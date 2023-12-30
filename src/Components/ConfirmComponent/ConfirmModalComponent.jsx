import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { ListGroup, Table } from "react-bootstrap";
import { useContext, useState } from "react";
import { Context } from "../../utils/AppContext";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/img/logo/logo2.png";
import axios from "axios";

ConfirmModalComponent.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
};

function ConfirmModalComponent({ show, setShow }) {
  const navigate = useNavigate();
  const [isConfirm, setIsConfirm] = useState(false);
  const { orderList, setOrderList, totalMoney, tax, userInfo } =
    useContext(Context);
  const createCart = async (userInfo) => {
    userInfo.productItems = orderList;
    userInfo.totalPrice = totalMoney + tax;
    const result = await axios.post(
      "https://65784f07f08799dc8044df82.mockapi.io/cartList",
      userInfo
    );
  };

  const handleConfirm = () => {
    createCart(userInfo);
    setTimeout(() => {
      document.querySelector(".confirm-container").style.display = "block";
      document.querySelector(".process-container").style.display = "none";
      document.querySelector("#backToHomeBtn").style.display = "block";
    }, 2000);
    setOrderList([]);
    setIsConfirm(true);
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal scrollable={true} show={show} backdrop="static" keyboard={false}>
        <Modal.Header style={{ borderBottom: "none", paddingBottom: "0px" }}>
          <Modal.Title>Xác nhận đơn hàng</Modal.Title>
        </Modal.Header>
        {isConfirm === false ? (
          <>
            <Modal.Body>
              <ListGroup>
                <ListGroup.Item className="modal-cofirm-items">
                  Tên: {userInfo.fullName}
                </ListGroup.Item>
                <ListGroup.Item className="modal-cofirm-items">
                  Số điện thoại: {userInfo.phoneNumber}
                </ListGroup.Item>
                <ListGroup.Item className="modal-cofirm-items">
                  Địa chỉ giao hàng:{" "}
                  {userInfo.street +
                    ", " +
                    userInfo.wardValue +
                    ", " +
                    userInfo.districtValue +
                    ", " +
                    userInfo.cityValue}
                </ListGroup.Item>
                <div
                  id="modalTableReciept"
                  className="w-75"
                  style={{ margin: "0px auto" }}
                >
                  <Table borderless className="text-center">
                    <thead style={{ borderBottom: "1px dashed black" }}>
                      <tr>
                        <th>Tên món</th>
                        <th>Số lượng</th>
                        <th>Giá tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderList.map((val, i) => (
                        <tr key={i}>
                          <td>{val.name}</td>
                          <td>{val.quality}</td>
                          <td>{val.price.toLocaleString("vi") + " ₫"}</td>
                        </tr>
                      ))}
                      <tr style={{ borderTop: "1px dashed black" }}>
                        <td colSpan={2} className="text-end">
                          Tổng tiền:
                        </td>
                        <td>{totalMoney.toLocaleString("vi") + " ₫"}</td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="text-end">
                          VAT:
                        </td>
                        <td>{tax.toLocaleString("vi") + " ₫"}</td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="text-end">
                          Thành tiền:
                        </td>
                        <td>
                          {(totalMoney + tax).toLocaleString("vi") + " ₫"}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </ListGroup>
            </Modal.Body>
          </>
        ) : (
          <>
            <Modal.Body>
              <div className="process-container">
                <div className="loadingThumb">
                  <img
                    style={{
                      width: "200px",
                      height: "200px",
                      margin: "0px auto",
                    }}
                    src={logo}
                    alt=""
                  />
                </div>
                <p className="text-center">Đang xữ lý...</p>{" "}
              </div>
              <div className="confirm-container text-center py-5">
                <h4 className="confirm-title">
                  Vuông tròn đã ghi nhận thông tin của quý khách.
                </h4>
                <p className="confirm-thank">
                  Cảm ơn quý khách hàng đã lựa chọn Cơm niêu Vuông tròn.
                </p>
              </div>
            </Modal.Body>
          </>
        )}
        <Modal.Footer style={{ borderTop: "none", paddingTop: "0px" }}>
          {isConfirm === false ? (
            <>
              <Button
                variant="secondary"
                onClick={() => {
                  setShow(false);
                }}
              >
                Hủy
              </Button>
              <Button onClick={handleConfirm} variant="primary">
                Xác nhận
              </Button>
            </>
          ) : (
            <Button
              id="backToHomeBtn"
              variant="primary"
              onClick={() => {
                navigate("/comnieuVuongTron/");
              }}
            >
              Quay về trang chủ
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ConfirmModalComponent;
