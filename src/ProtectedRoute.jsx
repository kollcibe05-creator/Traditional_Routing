import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function ProtectedRoute({children, requiredRole}){
    const {currentUser} =  useContext(AuthContext);

    if (!currentUser) return <Navigate to="/" replace/>

    const hasPermission = (Array.isArray(requiredRole) ? requiredRole.includes(currentUser.allowedRoles) : currentUser.allowedRoles === requiredRole)
       
    
    return hasPermission? children: <Navigate to="/" replace/>
}

export default ProtectedRoute