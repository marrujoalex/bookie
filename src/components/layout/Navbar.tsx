import { NavLink } from "react-router-dom";

export function Navbar() {
    const routes = [
        "Home",
        // "Authors",
        "About",
    ];

    return (
        <nav className="max-w-screen-xl py-4 px-4">
            <div className="flex px-2 text-2xl sm:text-center lg:justify-end">Bookie</div>
            <ul className="flex flex-col sm:flex-row lg:flex-row mb-2 mt-2 px-2 mx-auto gap-3 justify-end">
                {routes.map(route =>
                    <li className="hover:text-red-800">
                        <NavLink to={`/${route === "Home" ? "" : route.toLowerCase()}`}>{route}</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    )
}