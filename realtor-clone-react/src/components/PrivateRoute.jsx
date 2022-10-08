import { Outlet, Navigate } from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus.jsx"
//import Spinner from "./Spinner"

export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus()
  if (checkingStatus) {
    // return <Spinner />
    return <h1>loading </h1>
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />
}
