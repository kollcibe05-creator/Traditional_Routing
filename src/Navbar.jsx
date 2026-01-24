import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { NavLink } from "react-router-dom";

function Navbar () {
    const {currentUser} = useContext(AuthContext)
    
    const NAV_ITEMS = [ 
                // {path: "/", label:"App", roles: ["user", "admin", "guest"]},
                {path: "/", label:"Home", roles: ["user", "admin"]},
                {path: `/profile/${currentUser.id || 1}`, label:"Profile", roles: ["user", "admin"]},
                {path: "/article", label:"Article", roles: ["admin"]},
                {path: "/admin", label:"AdminDashboard", roles: ["admin"]},
            ]
    const visibleNavItems = NAV_ITEMS.filter(item => currentUser && item.roles.includes(currentUser.allowedRoles))        
    return (
        <nav>
            {visibleNavItems.map(item => (
                <NavLink
                 key={item.path}
                 to={item.path}
                 className="nav-link"
                >
                    {item.label}
                </NavLink>
            ))}
            {/* <NavLink className="nav-link" to="/">App</NavLink>
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
            <NavLink className="nav-link" to="/article">Article</NavLink> 
            <Navlink className="nav-link" to="/admin">AdminDashboard</NavLink>*/}
        </nav>
    )
}
export default Navbar;