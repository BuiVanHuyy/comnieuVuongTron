import BookingAndOrderComponent from "../BookingAndOrderComponent";
import { Col, Image, Row, Tab, Tabs } from "react-bootstrap";
import "../../../public/css/gallery.css";
import { useContext, useEffect } from "react";
import { Context } from "../../utils/AppContext";
function GalleryComponent() {
  const { galleryData, idMenu } = useContext(Context);
  useEffect(() => {
    document.title = "Thư viên ảnh";
  }, []);
  return (
    <div className="main-content">
      <h1 className="text-center title-heading">THƯ VIỆN ẢNH</h1>
      <p
        style={{ width: "85%", margin: "0px auto 10px", color: "#222222" }}
        className="gallery-desc text-center"
      >
        Khám phá sự kết hợp tinh tế giữa phong cách cổ điển và hiện đại tại{" "}
        <span className="highlight">Vuông Tròn</span>
      </p>
      <Tabs
        defaultActiveKey={idMenu ? idMenu : "atmosphere"}
        id="justify-tab-example"
        className="mb-3"
      >
        {galleryData.map((val, i) => (
          <Tab key={i} eventKey={val.id} title={val.title}>
            <div className="w-90">
              <Row>
                {val.imgSrcs.map((item, j) => (
                  <Col key={j} xs={6} sm={4} md={3} className="p-1">
                    <Image src={item} rounded />
                  </Col>
                ))}
              </Row>
            </div>
          </Tab>
        ))}
      </Tabs>
      <BookingAndOrderComponent />
    </div>
  );
}

export default GalleryComponent;
