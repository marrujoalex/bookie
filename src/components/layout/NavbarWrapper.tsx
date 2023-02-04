import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

function NavbarWrapper() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default NavbarWrapper;