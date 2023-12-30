import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../utils/AppContext";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { idMenu } = useContext(Context);
  const { loading, setLoading } = useState(false);
  useEffect(() => {
    if (idMenu && pathname == "/comnieuVuongTron/menu") {
      document.getElementById(idMenu).scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [pathname]);

   return loading ? <LoadingComponent /> : null;
}
