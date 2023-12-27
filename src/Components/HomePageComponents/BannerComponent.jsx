import banner1 from "../../assets/img/banner/banner1.png";
import banner2 from "../../assets/img/banner/banner2.png";
import banner3 from "../../assets/img/banner/banner3.png";
import { Carousel } from "react-bootstrap";
function BannerComponent() {
    return (
        <Carousel className="w-90 banner-corousel" data-bs-theme="light" autoPlay={true} interval={3000} indicators={false}>
            <Carousel.Item>
                <img src={banner1} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={banner2} />
            </Carousel.Item>
            <Carousel.Item>
                <img src={banner3} />
            </Carousel.Item>
        </Carousel>
    );
}

export default BannerComponent;
