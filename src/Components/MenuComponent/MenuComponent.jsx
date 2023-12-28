import { useContext, useEffect, useState } from "react";
import "../../../public/css/menu.css";
import BookingAndOrderComponent from "../BookingAndOrderComponent";
import ItemComponent from "./ItemComponent";
import { Context } from "../../utils/AppContext";

function MenuComponent() {
  const { menuData, idMenu, setIdMenu } = useContext(Context);
  useEffect(() => {
    document.title = "Thực đơn nhà hàng";
    if (idMenu) {
      document.getElementById(idMenu).scrollIntoView();
      setIdMenu(undefined);
    }
  }, []);
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView();
  };
  return (
    <>
      <section className="w-90 main-content text-center">
        <h1 className="title-heading">THỰC ĐƠN NHÀ HÀNG</h1>
        <section className="choices_container">
          <div className="position-relative">
            <div className="choices d-flex justify-content-center flex-wrap">
              {menuData != [] &&
                menuData.map((val) =>
                  val.dishItemArr.map((item, j) => (
                    <a
                      onClick={() => handleScroll(item.id)}
                      key={j}
                      className="choice position-relative p-2"
                      style={{ cursor: "pointer" }}
                    >
                      {item.titleItem.toUpperCase()}
                    </a>
                  ))
                )}
            </div>
          </div>
        </section>

        <section className="menu-food-container">
          {menuData[0] != undefined &&
            menuData[0].dishItemArr.map((val, i) => (
              <div key={i} className="food_item">
                <h4
                  id={val.id}
                  className="dish-type mb-3"
                  style={{ paddingTop: "65px" }}
                >
                  {val.titleHeading}
                </h4>
                <div className="dish-list d-flex flex-wrap">
                  <div className="thumb col-md-6 px-3">
                    <img
                      className="rounded"
                      src={val.thumb_1}
                      alt={`Thumbnail 1 for ${val.titleHeading}`}
                    />
                  </div>
                  <div className="thumb col-md-6 px-3">
                    <img
                      className="rounded"
                      src={val.thumb_2}
                      alt={`Thumbnail 2 for ${val.titleHeading}`}
                    />
                  </div>

                  <ItemComponent val={val.dishArr} />
                </div>
              </div>
            ))}
        </section>

        <section className="menu-drink-container">
          {menuData[1] != undefined &&
            menuData[1].dishItemArr.map((val, i) => (
              <div key={i}>
                <h4
                  style={{ paddingTop: "65px" }}
                  id={val.id}
                  className="dish-type mb-3"
                >
                  {val.title}
                </h4>
                {val.drinkType.map((item, j) => (
                  <div
                    key={j}
                    className={`drink_item mb-4 d-flex ${
                      j % 2 == 0 && "flex-row-reverse"
                    } flex-wrap align-items-center`}
                  >
                    <div className="col-12 col-md-4">
                      <img
                        className="rounded"
                        src={item.thumb}
                      />
                    </div>
                    <div className="col-12 col-md-8 dish-list">
                      <h4 className="sub-dish-type mt-2 text-center">
                        {item.typeTitle}
                      </h4>
                      <ul className="p-0">
                        {item.drinkArr.map((value, k) => (
                          <li
                            key={k}
                            className="w-100 col-12 col-md-6 mt-2 px-4 list-unstyled text-start d-flex justify-content-between"
                          >
                            <span className="name">{value.name}</span>
                            <span className="price">
                              {value.price.toLocaleString("en")}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </section>

        <p className="vat text-end">
          Giá các món trong thực đơn nhà hàng được tính theo VND và chưa bao gồm
          10% VAT
        </p>
      </section>

      <BookingAndOrderComponent />
    </>
  );
}

export default MenuComponent;
