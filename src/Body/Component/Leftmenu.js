import { Link } from "react-router-dom"

export function MenuLeft() {
    return (
        <div className="sidenav">
            <Link to="#">List</Link>
            <Link to="/User">User</Link>
            <Link to="/burger">Burger</Link>
            <Link to="/supermath">supermath</Link>
        </div>
    );
}