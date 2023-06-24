import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import UserLayout from "../layouts/UserLayout";
import Register from "../pages/Register";
import {AuthProvider} from "../context/AuthContext";
import Dashboard from "../pages/Dashboard";
import LogOut from "../pages/LogOut";

export default function UserStack() {
  return <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/logout' element={<LogOut />} />
          <Route
            path='/'
            element={
              <UserLayout>
                <Home/>
              </UserLayout>
            }
          />

          <Route
            path='/register'
            initial={true}
            element={
              <UserLayout>
                <Register/>
              </UserLayout>
            }/>

          <Route
            path='/dashboard'
            initial={true}
            element={
              <UserLayout>
                <Dashboard />
              </UserLayout>
            }/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </>
}
