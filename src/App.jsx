import "bootstrap/dist/css/bootstrap.min.css";
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
import { useEffect, useState } from "react";
import LoadingComponent from "./Components/loadingComponent";
import BookingTablePageComponent from "./Components/BookingTableComponent/BookingTablePageComponent";

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
            <Route path="/">
              <Route index element={<HomeComponent />} />
              <Route path="/about-us" element={<AboutUsComponent />} />
              <Route path="/menu" element={<MenuComponent />} />
              <Route path="/gallery" element={<GalleryComponent />} />
              <Route path="/order-online" element={<OrderOnlineComponent />} />
              <Route path="/confirmOrder" element={<ConfirmComponent />} />
              <Route path="/bookingTable" element={<BookingTablePageComponent />} />
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
