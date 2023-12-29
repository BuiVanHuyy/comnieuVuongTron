import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../utils/AppContext";
function GalleryChoiceComponent() {
  const { galleryData, setIdMenu } = useContext(Context);
  return (
    <section className="home-gallery mb-5">
      <h1 className="title-heading pb-3 text-center">THƯ VIỆN ẢNH</h1>
      <div className="row w-90">
        {galleryData.map((val, i) => (
          <div key={i} className="home-gallery-item col-sm-4 px-3">
            <Link
              to={"/comnieuVuongTron/gallery"}
              onClick={() => setIdMenu(val.id)}
            >
              <img
                src={val.thumbnail}
                alt={val.title + " photo"}
              />
              <h3 className="text-center mt-1">{val.title}</h3>
              <p>{val.desc}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GalleryChoiceComponent;
