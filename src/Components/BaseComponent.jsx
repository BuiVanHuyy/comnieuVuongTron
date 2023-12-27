import "../../public/css/base.css";
import { Outlet } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import FooterComponent from "./FooterComponent";
function BaseComponent() {
    return (
        <>
            <NavbarComponent />
            <Outlet />
            <FooterComponent />
        </>
    );
}

export default BaseComponent;
