import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BaseComponent from "./Components/BaseComponent";
import HomeComponent from "./Components/HomePageComponents/HomeComponent";
import AboutUsComponent from "./Components/AboutUSComponent/AboutUsComponent";
import MenuComponent from "./Components/MenuComponent/MenuComponent";
import GalleryComponent from "./Components/GalleryComponent/GalleryComponent";
import OrderOnlineComponent from "./Components/OrderOnlineComponent/OrderOnlineComponent";
import ScrollToTop from "./Components/ScrollToTop";
import AppContext from "./utils/AppContext";
import ConfirmComponent from "./Components/ConfirmComponent/ConfirmComponent";
import BookingTablePageComponent from "./Components/BookingTableComponent/BookingTablePageComponent";
import LoadingComponent from "./Components/LoadingComponent";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <AppContext>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div id="content">
          <ScrollToTop />
          <Routes>
            <Route path="/comnieuVuongTron/">
              <Route index element={<HomeComponent />} />
              <Route
                path="/comnieuVuongTron/about-us"
                element={<AboutUsComponent />}
              />
              <Route
                path="/comnieuVuongTron/menu"
                element={<MenuComponent />}
              />
              <Route
                path="/comnieuVuongTron/gallery"
                element={<GalleryComponent />}
              />
              <Route
                path="/comnieuVuongTron/order-online"
                element={<OrderOnlineComponent />}
              />
              <Route
                path="/comnieuVuongTron/confirmOrder"
                element={<ConfirmComponent />}
              />
              <Route
                path="/comnieuVuongTron/bookingTable"
                element={<BookingTablePageComponent />}
              />
              <Route path="*" element={<HomeComponent />} />
            </Route>
          </Routes>
          <BaseComponent />
        </div>
      )}
    </AppContext>
  );
}

export default App;
