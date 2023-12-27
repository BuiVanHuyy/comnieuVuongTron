import { Button, Col, Row } from "react-bootstrap";
import bct from "../../public/img/backGround/dathongbaobct.png"
import {
  FaArrowRight,
  FaGoogle,
  FaInstagram,
  FaLocationDot,
} from "react-icons/fa6";
import {
  MdAvTimer,
  MdKeyboardDoubleArrowUp,
  MdOutlineEmail,
} from "react-icons/md";
import { FaPhone, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

function FooterComponet() {
  return (
    <footer>
      <Row className="footer-top">
        <Col md={4} className="first-col">
          <h3 className="name-brand">CƠM NIÊU VUÔNG TRÒN</h3>
          <p className="footer-slogan">
            Nơi trải nghiệm sự thăng hoa của ẩm thực, mang hương vị nhà hàng đến
            với gia đình bạn.
          </p>
          <img className="footerImg" src={bct} alt="" />
        </Col>
        <Col md={4} className="middle-col">
          <h4 className="title-footer">Liên Hệ</h4>
          <p>
            <a
              href="https://www.google.com/maps/place/Nh%C3%A0+H%C3%A0ng+Vu%C3%B4ng+Tr%C3%B2n/@10.8480668,106.7722252,17z/data=!4m14!1m7!3m6!1s0x3175270b0dbf96ef:0x4a6fb089cee0e22c!2zTmjDoCBIw6BuZyBWdcO0bmcgVHLDsm4!8m2!3d10.8480615!4d106.7748001!16s%2Fg%2F1tj93xx8!3m5!1s0x3175270b0dbf96ef:0x4a6fb089cee0e22c!8m2!3d10.8480615!4d106.7748001!16s%2Fg%2F1tj93xx8?entry=ttu"
              target="_blank"
            >
              <FaLocationDot /> 4 Lê Văn Việt, phường Hiệp Phú, thành phố Thủ
              Đức
            </a>
          </p>
          <p>
            <MdAvTimer /> Thời gian phục vụ từ 10:00 đến 22:00
          </p>
          <p>
            <a href="tel:0909090909">
              <FaPhone /> 0909090909
            </a>
          </p>
          <p>
            <a href="mailto:comnieuvuongtron@gmail.com">
              <MdOutlineEmail /> comnieuvuontron@gmail.com
            </a>
          </p>
        </Col>
        <Col md={4} className="text-center">
          <div className="social-network">
            <ul className="social-ul list-unstyled mb-3">
              <li className="socail-icon d-inline-block me-4">
                <a
                  href="https://web.facebook.com/comnieuvuongtron"
                  target="blank"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="socail-icon d-inline-block me-4 ">
                <a href="">
                  <FaGoogle />
                </a>
              </li>
              <li className="socail-icon d-inline-block">
                <a href="">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <ul className="footer-menu-ul list-unstyled">
            <li className="footer-menu">
              <Link to={"/about-us"}>
                <FaArrowRight className="arrow-footer" />
                GIỚI THIỆU
              </Link>
            </li>
            <li className="footer-menu">
              <Link to={"/comnieuVuongTron/menu"}>
                <FaArrowRight className="arrow-footer" />
                THỰC ĐƠN
              </Link>
            </li>
            <li className="footer-menu">
              <Link to={"/comnieuVuongTron/gallery"}>
                <FaArrowRight className="arrow-footer" />
                THƯ VIỆN ẢNH
              </Link>
            </li>
            <li className="footer-menu">
              <Link to={"/comnieuVuongTron/order-online"}>
                <FaArrowRight className="arrow-footer" />
                ĐẶT MÓN ONLINE
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
      <Row
        className="pt-1 position-relative p-2"
        style={{ backgroundColor: "black" }}
      >
        <p className="footer-bot">@ COPYRIGHT 2020 VUONG TRON RESTAURANT</p>
        <Button
          onClick={() => window.scrollTo(0, 0)}
          className="footer-button d-flex justify-center align-items-center"
          style={{ borderRadius: "50%", height: "40px", width: "40px" }}
        >
          <MdKeyboardDoubleArrowUp
            className="scroll-top"
            style={{ color: "#fff", fontSize: "20px" }}
          />
        </Button>
      </Row>
    </footer>
  );
}

export default FooterComponet;
