import { Link } from "react-router-dom";
import logo from "../assets/img/logo/vuongtronLogo.png";
import { useState } from "react";
function NavbarComponent() {
  const [isActive, setActive] = useState(false);

  const handleActive = () => {
    setActive(!isActive);
  };

  return (
    <>
      <header className="p-2 d-block fixed-top bg-light">
        <div className="w-90 d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link
              className="nav-link"
              to={"/"}
              onClick={() => setActive(false)}
            >
              <img src={logo} alt="" />
            </Link>
          </div>
          <nav className={`menu${isActive ? " active" : ""}`}>
            <ul>
              <li>
                <Link
                  className="nav-link menu-choice"
                  to={"/about-us"}
                  onClick={() => setActive(false)}
                >
                  GIỚI THIỆU
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link menu-choice"
                  to={"/menu"}
                  onClick={() => setActive(false)}
                >
                  THỰC ĐƠN
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link menu-choice"
                  to={"/gallery"}
                  onClick={() => setActive(false)}
                >
                  THƯ VIỆN ẢNH
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link menu-choice"
                  to={"/order-online"}
                  onClick={() => setActive(false)}
                >
                  ĐẶT MÓN ONLINE
                </Link>
              </li>
              <li>
                <Link
                  id="bookingBtn"
                  className="nav-link menu-choice text-light"
                  to={"/bookingTable"}
                  onClick={() => setActive(false)}
                >
                  ĐẶT BÀN
                </Link>
              </li>
            </ul>
          </nav>
          <div
            onClick={handleActive}
            className={`bar-icon${isActive ? " active" : ""}`}
          >
            <div style={{ marginBottom: "5px" }} className="bar-item"></div>
            <div style={{ marginTop: "5px" }} className="bar-item"></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavbarComponent;
