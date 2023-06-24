import {useAuth} from "../context/AuthContext";
import {Navigate} from "react-router-dom";

export default function LogOut() {
  const {signOut} = useAuth()
  signOut()
  return <Navigate to={'/register'}/>
}
