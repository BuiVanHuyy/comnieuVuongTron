import { Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import DishItemComponent from "./DishItemComponent";
import "../../../public/css/orderOnline.css";
import { ToastContainer } from "react-toastify";
import { useContext, useState } from "react";
import { Context } from "../../utils/AppContext";
function MenuOrderOnlineComponent() {
  const { menuData } = useContext(Context);
  const [sortedArray, setSortedArray] = useState([]);
  const handleSort = (array, e) => {
    let val = e.target.value;
    if (val == 3) {
      setSortedArray(
        array.slice().sort((a, b) => b.SoldQuantity - a.SoldQuantity)
      );
    } else if (val == 2) {
      setSortedArray(array.slice().sort((a, b) => b.price - a.price));
    } else if (val == 1) {
      setSortedArray(array.slice().sort((a, b) => a.price - b.price));
    } else {
      setSortedArray([]);
    }
  };
  return (
    <div id="MenuOrderOnline" className="my-5">
      <Tabs
        onSelect={() => setSortedArray([])}
        defaultActiveKey="heoToc"
        id="justify-tab"
      >
        {menuData[0] != undefined &&
          menuData[0].dishItemArr.map((val, i) => (
            <Tab key={i} eventKey={val.id} title={val.titleItem}>
              <div className="w-90">
                <Form.Select
                  className="boxShadowNone filter"
                  onChange={(e) => {
                    handleSort(val.dishArr, e);
                  }}
                >
                  <option value="-1">Xắp sếp theo</option>
                  <option value="1">Giá từ thấp đến cao</option>
                  <option value="2">Giá từ cao đến thấp</option>
                  <option value="3">Bán chạy nhất</option>
                </Form.Select>
                <Row>
                  <h1 className="order-online-titleItem text-center mt-3">
                    <span className="line"></span>
                    <span className="px-2">{val.titleHeading}</span>
                    <span className="line"></span>
                  </h1>
                  {sortedArray.length == 0
                    ? val.dishArr.map((value, k) => (
                        <Col key={k} xs={6} sm={4} md={3} className="p-2">
                          <DishItemComponent item={value} />
                        </Col>
                      ))
                    : sortedArray.map((value, k) => (
                        <Col key={k} xs={6} sm={4} md={3} className="p-2">
                          <DishItemComponent item={value} />
                        </Col>
                      ))}
                </Row>
              </div>
            </Tab>
          ))}
        <Tab
          eventKey={menuData[1] != undefined && menuData[1].dishItemArr[0].id}
          title={
            menuData[1] != undefined && menuData[1].dishItemArr[0].titleItem
          }
        >
          <div className="w-90">
            {menuData[1] != undefined &&
              menuData[1].dishItemArr[0].drinkType.map((item, i) => (
                <Row key={i}>
                  <h1 className="order-online-titleItem text-center mt-5">
                    <span className="line"></span>
                    <span className="px-2">{item.typeTitle}</span>
                    <span className="line"></span>
                  </h1>
                  {item.drinkArr.map((value, j) => (
                    <Col key={j} xs={6} sm={4} md={3} className="p-2">
                      <DishItemComponent item={value} />
                    </Col>
                  ))}
                </Row>
              ))}
          </div>
        </Tab>
      </Tabs>
      <ToastContainer />
    </div>
  );
}

export default MenuOrderOnlineComponent;
