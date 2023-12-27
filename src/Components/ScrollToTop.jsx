import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../utils/AppContext";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { idMenu } = useContext(Context);
  useEffect(() => {
    if (idMenu && pathname == "/comnieuVuongTron/menu") {
      document.getElementById(idMenu).scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}
