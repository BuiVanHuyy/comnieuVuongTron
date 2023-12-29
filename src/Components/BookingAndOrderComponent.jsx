import { useNavigate } from "react-router-dom";
import logo from "../../public/img/logo/logo2.png";

function BookingAndOrderComponent() {
  const navigate = useNavigate();
  return (
    <section className="booking-container">
      <h1 className="booking-title text-center">ĐẶT BÀN NGAY HÔM NAY</h1>
      <div className="thumb">
        <img src={logo} alt="" />
      </div>
      <div className="btn-container d-flex justify-content-center mt-4">
        <button
          onClick={() => {
            navigate("/comnieuVuongTron/bookingTable");
          }}
        >
          Đặt Bàn
        </button>
        <button onClick={navigate("/comnieuVuongTron/order-online")}>
          Đặt Món Online
        </button>
      </div>
    </section>
  );
}

export default BookingAndOrderComponent;
