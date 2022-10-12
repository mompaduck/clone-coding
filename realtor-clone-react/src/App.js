import React, { useEffect, useState } from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Offers from "./pages/Offers"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./pages/ForgotPassword"
import CreateListing from "./pages/CreateListing"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { getAuth } from "firebase/auth"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* <Route path="/category/:categoryName/:listingId" element={<Listing />} /> */}
          <Route path="/offers" element={<Offers />} />
          {/* <Route path="/category/:categoryName" element={<Category />} /> */}
          <Route path="create-listing" element={<PrivateRoute />}>
            <Route path="/create-listing" element={<CreateListing />} />
          </Route>
          {/* <Route path="edit-listing" element={<PrivateRoute />}>
            <Route path="/edit-listing/:listingId" element={<EditListing />} />
          </Route> */}
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
