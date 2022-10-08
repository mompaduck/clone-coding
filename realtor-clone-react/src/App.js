import React, { useEffect, useState } from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Offers from "./pages/Offers"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import ForgotPassword from "./pages/ForgotPassword"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { getAuth } from "firebase/auth"

function App() {
  //로그인여부 확인하기
  const authService = getAuth()
  const [isLogginedIn, setIsLoggedIn] = useState(false)

  console.log(isLogginedIn)

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      user ? setIsLoggedIn(user) : setIsLoggedIn(false)
    })
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}
export default App
