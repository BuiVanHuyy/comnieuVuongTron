import { useContext, useEffect, useState } from "react";
import { Button, Form, FloatingLabel, Row, Col } from "react-bootstrap";
import { Context } from "../../utils/AppContext";
import ConfirmModalComponent from "./ConfirmModalComponent";
import { useNavigate } from "react-router-dom";

function FormUserInfo() {
  const { handleChangeForm, userInfo, setUserInfo, orderList } =
    useContext(Context);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState({ name: "", code: "" });
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState({
    name: "",
    code: "",
  });
  const [wards, setWards] = useState([]);
  const [selectedWard, setSelectedWard] = useState({ name: "", code: "" });
  const handleOnClick = () => {
    if (orderList.length != 0) {
      let isValidate = false;
      if (
        JSON.stringify(userInfo) ===
        JSON.stringify({
          fullName: "",
          phoneNumber: "",
          street: "",
          cityValue: {},
          districtValue: {},
          wardValue: {},
        })
      ) {
        document.querySelector(".userName").value = "Lỗi: Vui lòng nhập tên";
        document.querySelector(".userName").style.borderColor = "red";
        document.querySelector(".userPhoneNum").value =
          "Lỗi: Vui lòng nhập số điện thoại";
        document.querySelector(".userPhoneNum").style.borderColor = "red";
        document.querySelector(".userStreet").value =
          "Lỗi: Vui lòng nhập địa chỉ";
        document.querySelector(".userStreet").style.borderColor = "red";
        document.querySelector("#citySelect").style.borderColor = "red";
        document.querySelector("#districtSelect").style.borderColor = "red";
        document.querySelector("#wardSelect").style.borderColor = "red";
        isValidate = true;
      }
      if (
        !document.querySelector(".userName").value.match(/^[\p{L}\s]{2,20}$/u)
      ) {
        document.querySelector(".userName").value = "Lỗi: Tên không hợp lệ";
        document.querySelector(".userName").style.borderColor = "red";
        isValidate = true;
      } else {
        document.querySelector(".userName").style.borderColor = "black";
      }
      if (
        !document
          .querySelector(".userPhoneNum")
          .value.match(/^(0|\+84)[3|5|7}8|9][1-9]\d{7}$/)
      ) {
        document.querySelector(".userPhoneNum").value =
          "Lỗi: Số điện thoại không hợp lệ";
        document.querySelector(".userPhoneNum").style.borderColor = "red";
      } else {
        document.querySelector(".userPhoneNum").style.borderColor = "black";
      }
      if (
        document.querySelector(".userStreet").value == "" ||
        document.querySelector(".userStreet").value ==
          "Lỗi: Vui lòng nhập địa chỉ"
      ) {
        document.querySelector(".userStreet").style.borderColor = "red";
        document.querySelector(".userStreet").value =
          "Lỗi: Vui lòng nhập địa chỉ";
        isValidate = true;
      } else {
        document.querySelector(".userStreet").style.borderColor = "black";
      }
      if (document.querySelector("#citySelect").value == "") {
        document.querySelector("#citySelect").style.borderColor = "red";
        isValidate = true;
      } else {
        document.querySelector("#citySelect").style.borderColor = "black";
      }
      if (document.querySelector("#districtSelect").value == "") {
        document.querySelector("#districtSelect").style.borderColor = "red";
        isValidate = true;
      } else {
        document.querySelector("#districtSelect").style.borderColor = "black";
      }
      if (document.querySelector("#wardSelect").value == "") {
        document.querySelector("#wardSelect").style.borderColor = "red";
        isValidate = true;
      } else {
        document.querySelector("#wardSelect").style.borderColor = "black";
      }
      if (!isValidate) {
        setShow(true);
      }
    }
  };
  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/p/")
      .then((response) => response.json())
      .then((data) => setCities(data));
  }, []);

  const handleCityChange = (e) => {
    const cityCode = e.target.value;
    const cityName = e.target.options[e.target.selectedIndex].text;
    setSelectedCity({ name: cityName, code: cityCode });
    setUserInfo({
      ...userInfo,
      cityValue: cityName,
      districtValue: "",
      wardValue: "",
    });
    setSelectedDistrict({ name: "", code: "" });
    setSelectedWard({ name: "", code: "" });
    fetch(`https://provinces.open-api.vn/api/p/${cityCode}/?depth=3`)
      .then((response) => response.json())
      .then((data) => setDistricts(data.districts));
  };

  const handleDistrictChange = (e) => {
    const districtCode = e.target.value;
    const districtName = e.target.options[e.target.selectedIndex].text;
    setSelectedDistrict({ name: districtName, code: districtCode });
    setSelectedWard({ name: "", code: "" });
    setUserInfo({
      ...userInfo,
      districtValue: districtName,
      wardValue: "",
    });
    fetch(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
      .then((response) => response.json())
      .then((data) => setWards(data.wards));
  };

  const handleWardChange = (e) => {
    const wardCode = e.target.value;
    const wardName = e.target.options[e.target.selectedIndex].text;
    setSelectedWard({ name: wardName, code: wardCode });
    setUserInfo({
      ...userInfo,
      wardValue: wardName,
    });
  };
  return (
    <>
      <Form className="mb-3">
        <h5
          className="confirm-form-item text-center"
          style={{ fontWeight: "600" }}
        >
          Thông tin cá nhân
        </h5>
        <Form.Group className="mb-3">
          <FloatingLabel
            controlId="floatingName"
            label="Họ Tên"
            className="mb-3"
          >
            <Form.Control
              className="userName boxShadowNone"
              onChange={handleChangeForm}
              name="fullName"
              type="text"
              placeholder="name"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPhoneNum" label="Số điện thoại">
            <Form.Control
              className="userPhoneNum boxShadowNone"
              onChange={handleChangeForm}
              name="phoneNumber"
              type="text"
              placeholder="Phone number"
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          <h5
            style={{ fontWeight: "600" }}
            className="confirm-form-item text-center mt-2"
          >
            Địa chỉ giao hàng
          </h5>
          <Form.Select
            id="citySelect"
            className="address mb-3 boxShadowNone"
            value={selectedCity.code}
            onChange={handleCityChange}
          >
            <option value="">Chọn tỉnh, thành phố</option>
            {cities.map((city) => (
              <option key={city.code} value={city.code}>
                {city.name}
              </option>
            ))}
          </Form.Select>

          <Form.Select
            id="districtSelect"
            className="address mb-3 boxShadowNone"
            value={selectedDistrict.code}
            onChange={handleDistrictChange}
          >
            <option value="">Chọn quận, huyện</option>
            {districts.map((district) => (
              <option key={district.code} value={district.code}>
                {district.name}
              </option>
            ))}
          </Form.Select>

          <Form.Select
            id="wardSelect"
            className="address mb-3 boxShadowNone"
            value={selectedWard.code}
            onChange={handleWardChange}
          >
            <option value="">Chọn phường, xã</option>
            {wards.map((ward) => (
              <option key={ward.code} value={ward.code}>
                {ward.name}
              </option>
            ))}
          </Form.Select>
          <Form.Control
            name="street"
            onChange={handleChangeForm}
            type="text"
            className="userStreet boxShadowNone mb-3"
            placeholder="số nhà"
          />
          <Form.Control
            name="cartNote"
            onChange={handleChangeForm}
            type="text"
            className="cartNote boxShadowNone mb-3"
            placeholder="Ghi chú đơn hàng"
          />
        </Form.Group>
        <Row>
          <Col xs={6}>
            <Button
              className="confirm-button w-100"
              style={{
                cursor: orderList.length == 0 ? "not-allowed" : "auto",
              }}
              variant={orderList.length == 0 ? "secondary" : "primary"}
              onClick={handleOnClick}
            >
              Đặt hàng
            </Button>
          </Col>
          <Col xs={6}>
            <Button
              className="confirm-button w-100"
              onClick={() => navigate("/order-online")}
              variant="danger"
            >
              Đặt món thêm
            </Button>
          </Col>
        </Row>
      </Form>

      <ConfirmModalComponent show={show} setShow={setShow} />
    </>
  );
}

export default FormUserInfo;
