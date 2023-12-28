import { Context } from "../../utils/AppContext";
import { useContext, useEffect, useState } from "react";
import { Image, Col, Row, ListGroup } from "react-bootstrap";
import banner from "../../../public/img/banner/orderOnline.png";
import { IoCartOutline, IoHeart, IoSearch } from "react-icons/io5";
import "../../../public/css/orderOnline.css";
import MenuOrderOnlineComponent from "./MenuOrderOnlineComponent";
import { MdSupportAgent, MdOutlineDeliveryDining } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import CartComponent from "./CartComponent";
import LikeListComponent from "./LikeListComponent";
import DishItemModal from "./DishItemModal";

function OrderOnlineComponent() {
  useEffect(() => {
    document.title = "Gọi món online";
  }, []);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);
  const [resultShow, setResultShow] = useState(false);
  const [searchDetailShow, setSearchDetailShow] = useState(false);
  const [LikeListShow, setLikeListShow] = useState(false);
  const { orderList, menuData } = useContext(Context);
  const [keyWord, setKeyWord] = useState("");
  const [selectedValue, setSelectedValue] = useState({});
  const [searchResult, setSearchResult] = useState([]);
  const dishArr = menuData[0].dishItemArr.flatMap(
    (menuItem) => menuItem.dishArr
  );
  const handleSearch = (e) => {
    setKeyWord(e.target.value);
    if (e.target.value != "") {
      setSearchResult(
        dishArr.filter((val) =>
          val.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              e.target.value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            )
        )
      );
    }
  };
  const handleViewDetail = (val) => {
    setSelectedValue(val), setSearchDetailShow(true);
  };

  return (
    <>
      <div className="orderThumb main-content position-relative">
        <Image style={{ zIndex: "-1", pointerEvents: "none" }} src={banner} />
        <h1 className="noselect text-center orderTitle position-absolute">
          ĐẶT MÓN ONLINE
        </h1>
      </div>
      <div className="box-icon position-fixed">
        <div className="position-relative">
          <div cursor={"pointer"} className="icon-container search-box">
            <button className="btn-icon btn-search position-absolute">
              <IoSearch
                onClick={() => {
                  setResultShow(!resultShow), setActive(!active);
                }}
              />
            </button>
            <input
              onChange={handleSearch}
              type="text"
              className={`input-search ${active && "active"}`}
              placeholder="Bạn cần tìm gì?"
            />
          </div>
          <div cursor={"pointer"} className="icon-container">
            <button className="btn-icon">
              <span
                onClick={() => {
                  setLikeListShow(true),
                    resultShow && setResultShow(false),
                    active && setActive(false);
                }}
                className="ms-1"
              >
                <IoHeart />
              </span>
            </button>
          </div>
          <div className="icon-container" id="cart-icon-container">
            <button className="btn-icon">
              <span
                cursor={"pointer"}
                id="cart-icon"
                onClick={() => {
                  setShow(true),
                    resultShow && setResultShow(false),
                    active && setActive(false);
                }}
                className="ms-1 position-relative"
              >
                <IoCartOutline />
                {!orderList.length < 1 && (
                  <span
                    id="quality-dish-list"
                    className="position-absolute text-center"
                  >
                    {orderList.length}
                  </span>
                )}
              </span>
            </button>
          </div>
          {resultShow && keyWord !== "" && (
            <div id="result-search" className="position-absolute w-100">
              <div
                className="position-fixed"
                style={{ overflowY: "auto", maxHeight: "460px" }}
              >
                <ListGroup>
                  {searchResult.length > 0 ? (
                    searchResult.map((val, i) => (
                      <ListGroup.Item
                        key={i}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleViewDetail(val)}
                      >
                        <Row>
                          <Col xs={3}>
                            <Image
                              rounded
                              src={
                                val.dish_thumb
                                  ? val.dish_thumb
                                  : "https://lh3.google.com/u/0/d/1yzI3CV0iewtwkXrP_MysrPogwlnKP8FI=w200-h190-p-k-rw-v1-nu-iv1"
                              }
                            />
                          </Col>
                          <Col xs={9}>
                            <div
                              style={{ fontSize: "20px", fontWeight: "600" }}
                            >
                              {val.name}
                            </div>
                            <div
                              style={{
                                fontSize: "15px",
                                fontWeight: "600",
                                color: "#952e0b",
                              }}
                            >
                              {val.price.toLocaleString("vi")}
                            </div>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))
                  ) : (
                    <ListGroup.Item>Không tìm thấy sản phẩm</ListGroup.Item>
                  )}
                </ListGroup>
              </div>
            </div>
          )}
        </div>
      </div>
      <MenuOrderOnlineComponent />
      <div id="UtilitiesContainer" className="my-5 w-90">
        <Row>
          <Col md={4} className="text-center px-4 orderOnlineUtilitiesItem">
            <MdSupportAgent className="orderOnlineUtilities" />
            <h4 className="orderOnlineUtilitiesName">HỖ TRỢ 12/7</h4>
            <p className="orderOnlineUtilitiesDesc">
              Đội ngũ Vuông Tròn luôn có mặt để hỗ trợ bất cứ khi nào bạn cần.
            </p>
          </Col>
          <Col md={4} className="text-center px-4 orderOnlineUtilitiesItem">
            <GiWallet className="orderOnlineUtilities" />
            <h4 className="orderOnlineUtilitiesName">THANH TOÁN TIỆN DỤNG</h4>
            <p className="orderOnlineUtilitiesDesc">
              Chúng tôi hỗ trợ thanh toán online qua Ví điện tử tiện dụng.
            </p>
          </Col>
          <Col md={4} className="text-center px-4 orderOnlineUtilitiesItem">
            <MdOutlineDeliveryDining className="orderOnlineUtilities" />
            <h4 className="orderOnlineUtilitiesName">GIAO HÀNG NHANH CHÓNG</h4>
            <p className="orderOnlineUtilitiesDesc">
              Bạn sẽ vẫn cảm nhận được sự nóng hổi của món ăn khi nhận hàng.
            </p>
          </Col>
        </Row>
      </div>

      <LikeListComponent
        LikeListShow={LikeListShow}
        setLikeListShow={setLikeListShow}
      />
      <CartComponent show={show} setShow={setShow} />

      {selectedValue != {} && (
        <DishItemModal
          item={selectedValue}
          show={searchDetailShow}
          setShow={setSearchDetailShow}
        />
      )}
    </>
  );
}

export default OrderOnlineComponent;
