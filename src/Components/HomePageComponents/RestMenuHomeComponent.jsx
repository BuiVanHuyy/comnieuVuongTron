import { useContext } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../../utils/AppContext";
function RestMenuHomeComponent() {
  const { menuData, setIdMenu } = useContext(Context);
  return (
    <section className="home-menu py-5">
      <h1 className="title-heading pb-3 text-center">THỰC ĐƠN</h1>
      <div className="home-menu-cate w-95 d-flex flex-wrap">
        {menuData.map((val) =>
          val.dishItemArr.map((item, j) => (
            <Col
              xs={6}
              sm={item.colNum ? "" : 3}
              key={j}
              className="home-dish-item mb-4 px-3 text-center"
            >
              <Link to={`/menu`} onClick={() => setIdMenu(item.id)}>
                <div className="thumb">
                  <img
                    src={`src/assets/img${item.thumbnail}`}
                    alt={item.titleItem}
                  />
                </div>
                <h3 className="dish-title">{item.titleItem}</h3>
              </Link>
            </Col>
          ))
        )}
      </div>
    </section>
  );
}

export default RestMenuHomeComponent;
