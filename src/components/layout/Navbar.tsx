import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="flex flew-row">
            <div className="px-4">Bookie</div>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
            </ul>
        </nav>
    )
}