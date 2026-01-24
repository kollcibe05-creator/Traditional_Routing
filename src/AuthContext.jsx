import { createContext, useState } from "react";

export const AuthContext = createContext()

function AuthProvider({children}) {
    const usersLi = [
        {id: 1, name: "Collo", allowedRoles: "admin"},
        {id:2, name: "Lacto", allowedRoles: "user"}
    ]

    const [currentUser] = useState(usersLi[0])
    return (
        <AuthContext.Provider value={{currentUser, usersLi}}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;

