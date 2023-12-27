import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Context = createContext();

AppContext.propTypes = {
  children: PropTypes.node,
};

function AppContext({ children }) {
  let initOrder = JSON.parse(localStorage.getItem("ORDER_LIST")) || [];
  let initLike = JSON.parse(localStorage.getItem("LIKE_LIST")) || [];
  const [orderList, setOrderList] = useState(initOrder);
  const [likeList, setLikeList] = useState(initLike);
  const [menuData, setMenuData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [galleryData, setGalleryData] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);
  const [tax, setTax] = useState(0);
  const [idMenu, setIdMenu] = useState(undefined);
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    phoneNumber: "",
    street: "",
    cartNote: "",
    cityValue: "",
    districtValue: "",
    wardValue: "",
    cartNote: "",
    productItems: [],
  });
  useEffect(() => {
    fetch("https://65784f07f08799dc8044df82.mockapi.io/data")
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setMenuData(result[0].productArray);
        setReviewData(result[2].reviewData);
        setGalleryData(result[1].galleryData);
      });
  }, []);
  const handleAddToCart = (order, requirement) => {
    if (!orderList.some((value) => value.id == order.id)) {
      const orderItem = {
        name: order.name,
        id: order.id,
        quality: 1,
        price: order.price,
        requirement: requirement,
      };
      setOrderList((current) => [...current, orderItem]);
    } else {
      const index = orderList.findIndex((item) => item.name == order.name);
      orderList[index].quality++;
      orderList[index].requirement =
        orderList[index].requirement != ""
          ? orderList[index].requirement + ", " + requirement
          : requirement;
    }

    toast.success(
      <span>
        <strong>{order.name}</strong> đã được thêm vào giỏ hàng thành công
      </span>,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        autoClose: 500,
        hideProgressBar: true,
        position: "top-center",
      }
    );
  };
  const handleAddToLikeList = (item) => {
    if (likeList.some((val) => val.name == item.name)) {
      setLikeList(likeList.filter((element) => element.name !== item.name));
    } else {
      setLikeList((current) => [...current, item]);
      toast(
        <span>
          <strong>{item.name}</strong> đã được thêm vào danh sách yêu thích
        </span>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          autoClose: 500,
          hideProgressBar: true,
          position: "top-center",
        }
      );
    }
  };
  const handleDel = (name) => {
    setOrderList(orderList.filter((element) => element.name !== name));
  };
  const handleQuality = (type, id, quality) => {
    const indexValue = orderList.findIndex((element) => element.id == id);
    const tempList = [...orderList];
    if (type == "plus") {
      tempList[indexValue].quality += parseInt(quality);
    } else {
      if (orderList[indexValue].quality > 1) {
        tempList[indexValue].quality -= quality;
      }
    }
    setOrderList(tempList);
  };
  const onChangeQuality = (quality, id) => {
    const indexValue = orderList.findIndex((element) => element.id == id);
    const tempList = [...orderList];
    tempList[indexValue].quality = parseInt(quality);
    setOrderList(tempList);
  };
  const handleChangeForm = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    localStorage.setItem("ORDER_LIST", JSON.stringify(orderList));
    localStorage.setItem("LIKE_LIST", JSON.stringify(likeList));
    let tempMoney = 0;
    orderList.map((val) => {
      tempMoney += val.price * val.quality;
    });
    setTotalMoney(tempMoney);
    setTax(tempMoney * 0.08);
  }, [orderList, likeList]);
  return (
    <Context.Provider
      value={{
        likeList,
        setLikeList,
        orderList,
        setOrderList,
        handleAddToCart,
        handleAddToLikeList,
        handleDel,
        handleQuality,
        totalMoney,
        tax,
        userInfo,
        setUserInfo,
        handleChangeForm,
        onChangeQuality,
        menuData,
        reviewData,
        galleryData,
        setIdMenu,
        idMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default AppContext;
