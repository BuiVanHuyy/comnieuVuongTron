import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Context } from "../../utils/AppContext";
function ReviewComponent() {
    const { reviewData } = useContext(Context);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };
    return (
        <>
            <div className="Carousel-vegetarian p-5">
                <h1 className="title-heading text-center pb-3">TRẢI NGHIỆM KHÁCH HÀNG</h1>

                <Carousel
                    responsive={responsive}
                    draggable={true}
                    swipeable={true}
                    showDots={true}
                    infinite={true}
                    autoPlaySpeed={3000}
                    autoPlay={true}
                    arrows={false}
                >
                    {reviewData.map((val, i) => (
                        <div key={i} style={{ userSelect: "none", cursor: "pointer" }} className="review-item text-center px-5">
                            <div className="thumb" style={{ width: "100px", margin: "0px auto" }}>
                                <Image src={`src/assets/${val.thumb}`} style={{ pointerEvents: "none" }} roundedCircle />
                            </div>
                            <div className="info-reviewer">
                                <h5 style={{ fontWeight: "700", fontSize: "20px" }} className="reviewer-name mt-3">
                                    {val.name}
                                </h5>
                                <p className="review-source" style={{ color: "#9c9b9b", fontWeight: "500", margin: "10px 0px 15px" }}>
                                    Facebok Reviews
                                </p>
                                <div className="stars mb-2">
                                    {[...Array(val.stars)].map((item, i) => (
                                        <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#fae815" }} />
                                    ))}
                                    {[...Array(5 - val.stars)].map((item, i) => (
                                        <FontAwesomeIcon key={i + val.stars} icon={faStar} style={{ color: "gray" }} />
                                    ))}
                                </div>
                                <p className="reviewer-content" style={{ fontSize: "15px" }}>
                                    {val.reviews}
                                </p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
}

export default ReviewComponent;
