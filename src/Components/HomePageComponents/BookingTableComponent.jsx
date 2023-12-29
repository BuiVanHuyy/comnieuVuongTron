import axios from "axios";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import thumbnail from "../../../public/img/gallery/overView3.jpg";
import { MdDownloadDone } from "react-icons/md";
function BookingTableComponent() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
  const [confirmText, setConfirmText] = useState("Xác nhận");
  const [bookingUser, setBookingUser] = useState({
    bookingName: "",
    bookingPhone: "",
    bookingDateTime: "",
    bookingGender: "Nam",
    bookingQuality: "",
    bookingRequirement: "",
  });
  const handleBookingTable = () => {
    console.log(formattedDateTime < document.querySelector("#dateTime").value);
    let isError = false;
    if (
      !document.querySelector("#bookingName").value.match(/^[\p{L}\s]{2,20}$/u)
    ) {
      document.querySelector("#bookingName").value = "Lỗi: Tên không hợp lệ";
      isError = true;
    }
    if (
      !document
        .querySelector("#bookingPhone")
        .value.match(/^(0|\+84)[3|5|7}8|9][1-9]\d{7}$/)
    ) {
      document.querySelector("#bookingPhone").value =
        "Lỗi: Số điện thoại không hợp lệ";
      isError = true;
    }
    if (
      parseInt(document.querySelector("#cusQuality").value) < 1 ||
      document.querySelector("#cusQuality").value ==
        "Lỗi: Số lượng khách không hợp lệ"
    ) {
      document.querySelector("#cusQuality").value =
        "Lỗi: Số lượng khách không hợp lệ";
      isError = true;
    }
    if (isError === false) {
      createBooking(bookingUser);
      setTimeout(() => {
        setConfirmText("Xác nhận");
        document.querySelector("#bookingName").value = "";
        document.querySelector("#bookingPhone").value = "";
        document.querySelector("#cusQuality").value = "2";
        document.querySelector("#requirements").value = "";
        document.querySelector("#male").checked = true;
        document.querySelector("#bookingTableBtn").style.pointerEvents =
          "visible";
      }, 4000);
      setTimeout(() => {
        setConfirmText(
          <>
            <MdDownloadDone /> Đã đặt bàn thành công
          </>
        );
        document.querySelector("#bookingTableBtn").style.pointerEvents = "none";
      }, 2000);
      setConfirmText(
        <>
          <span className="spinner-border spinner-border-sm"></span>{" "}
          <span>Đang xử lý</span>
        </>
      );
      document.querySelector("#bookingTableBtn").style.pointerEvents = "none";
    }
  };
  const createBooking = async (bookingUser) => {
    bookingUser.name = document.querySelector("#bookingName").value;
    bookingUser.bookingPhone = document.querySelector("#bookingPhone").value;
    bookingUser.bookingDateTime = document.querySelector("#dateTime").value;
    const result = await axios.post(
      "https://65784f07f08799dc8044df82.mockapi.io/cartList",
      bookingUser
    );
  };
  return (
    <section id="bookingTable" className="from-booking mt-5">
      <Row>
        <Col sm={4} className="p-0">
          <div className="thumbnail position-relative">
            <img src={thumbnail} alt="" />
            <div className="float-content01 text-center position-absolute">
              <h1>ĐẶT BÀN</h1>
              <p>THỜI GIAN PHỤC VỤ</p>
              <p>9:00 - 22:00</p>
            </div>
            <div className="float-content02 text-center position-absolute">
              <p>Booking: 0912312312</p>
            </div>
          </div>
        </Col>
        <Col sm={8} className="px-5" style={{ margin: "auto 0px" }}>
          <Form action="" className="form_container">
            <Row>
              <Col sm={6}>
                <Form.Label>Họ Tên</Form.Label>
                <Form.Control type="text" id="bookingName" />
              </Col>
              <Col sm={6}>
                <Form.Label>Số Điện Thoại</Form.Label>
                <Form.Control
                  styles={{ boxShadow: "none" }}
                  type="text"
                  id="bookingPhone"
                />
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Label>Thời gian</Form.Label>
                <input
                  id="dateTime"
                  type="datetime-local"
                  name="partydate"
                  min={new Date().toLocaleString()}
                  defaultValue={new Date().toLocaleString()}
                />
              </Col>
              <Col sm={6}>
                <Form.Label>Số Khách</Form.Label>
                <Form.Control type="text" defaultValue={2} id="cusQuality" />
              </Col>
            </Row>
            <Row>
              <Col>
                <label>Yêu Cầu Thêm</label>
                <textarea
                  id="requirements"
                  rows="1"
                  name="text"
                  className="w-100 p-2 booking_input"
                  placeholder="Gợi ý: Tiệc sinh nhật, hẹn hò, họp cơ quan"
                ></textarea>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  style={{ color: "#4A4737", fontWeight: "600" }}
                  onClick={handleBookingTable}
                  className="w-100"
                  id="bookingTableBtn"
                >
                  <span className="confirm">{confirmText}</span>
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </section>
  );
}

export default BookingTableComponent;
