import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return(
        <div className="container">
            <NavLink to = "User">User</NavLink>
            <NavLink to = "Form">Form</NavLink>
            <NavLink to = "Admin">Admin</NavLink>
        </div>
    )
}
export default Navbar