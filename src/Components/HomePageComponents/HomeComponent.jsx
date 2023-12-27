
import "../../../public/css/home.css";
import BannerComponent from "./BannerComponent";
import BookingTableComponent from "./BookingTableComponent";
import GalleryChoiceComponent from "./GalleryChoiceComponent";
import IntroComponent from "./IntroComponent";
import RestMenuHomeComponent from "./RestMenuHomeComponent";
import ReviewComponent from "./ReviewComponent";
import { useEffect } from "react";
function HomeComponent() {
    useEffect(() => {
        setTimeout(() => {}, 1000);
    }, []);
    return (
        <>
            <div className="main-content">
                <BannerComponent />
                <IntroComponent />
                <RestMenuHomeComponent />
                <ReviewComponent />
                <GalleryChoiceComponent />
                <BookingTableComponent />
            </div>
        </>
    );
}

export default HomeComponent;
