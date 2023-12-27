import "../../../public/css/bookingTable.css";
import BookingTableComponent from "../HomePageComponents/BookingTableComponent";
function BookingTablePageComponent() {
  return (
    <div id="bookingTableContainer" className="main-content">
      <h1 className="title-heading text-center">Đặt bàn</h1>
      <BookingTableComponent />
    </div>
  );
}

export default BookingTablePageComponent;
