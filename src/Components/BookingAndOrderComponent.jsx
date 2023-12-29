import { useNavigate } from "react-router-dom";
import logo from "../../public/img/logo/logo2.png";

function BookingAndOrderComponent() {
  const navigate = useNavigate();
  const handleChangeOrder = () => {
    navigate("/comnieuVuongTron/order-online");
  };
  return (
    <section className="booking-container">
      <h1 className="booking-title text-center">ĐẶT BÀN NGAY HÔM NAY</h1>
      <div className="thumb">
        <img src={logo} alt="" />
      </div>
      <div className="btn-container d-flex justify-content-center mt-4">
        <button
          onClick={() => {
            navigate("/comnieuVuongTron/", {
              state: { targetId: "bookingTable" },
            });
          }}
        >
          Đặt Bàn
        </button>
        <button onClick={handleChangeOrder}>Đặt Món Online</button>
      </div>
    </section>
  );
}

export default BookingAndOrderComponent;