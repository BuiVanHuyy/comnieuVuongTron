
import "../../../public/css/home.css";
import BannerComponent from "./BannerComponent";
import BookingTableComponent from "./BookingTableComponent";
import GalleryChoiceComponent from "./GalleryChoiceComponent";
import IntroComponent from "./IntroComponent";
import RestMenuHomeComponent from "./RestMenuHomeComponent";
import ReviewComponent from "./ReviewComponent";
function HomeComponent() {
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
