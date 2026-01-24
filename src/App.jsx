import { Route, Routes } from "react-router-dom"

import AuthProvider from "./AuthContext"
import Navbar from "./Navbar"

import './App.css'
import ProtectedRoute from "./ProtectedRoute"
import AdminDashboard from "./AdminDashboard"
import Profile from "./Profile"
import ErrorPage from "./ErrorPage"
import Home from "./Home"
import Article from "./Article"

function App() {

  return (
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={< Home/>}/>
        <Route path="/admin" element={<ProtectedRoute requiredRole={"admin"}>
        <AdminDashboard/>
        <Article/>
        </ProtectedRoute>
        }
        />
        <Route path="/article" element={<ProtectedRoute requiredRole={"admin"}>
        <Article/>
        </ProtectedRoute>
        }
        />
        <Route path="/profile/:id" element={
          <ProtectedRoute requiredRole={["user", "admin"]}>
            <Profile/>
          </ProtectedRoute>
        }/> 
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>

    </AuthProvider>  
  )

}

export default App
