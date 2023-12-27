import { useEffect } from "react";
import "../../../public/css/AboutUs.css";
import BookingAndOrderComponent from "../BookingAndOrderComponent";

import IntroAboutUsComponent from "./IntroAboutUsComponent";
import OverViewComponent from "./OverViewComponent";
function AboutUsComponent() {
    useEffect(() => {
        document.title = "Giới thiệu về nhà hàng";
    }, []);
    return (
        <>
            <div className="main-content">
                <h1 className="text-center title-heading">GIỚI THIỆU VỀ NHÀ HÀNG VUÔNG TRÒN</h1>
                <IntroAboutUsComponent />
                <OverViewComponent />
                <BookingAndOrderComponent />
            </div>
        </>
    );
}

export default AboutUsComponent;
