import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import UserLayout from "../layouts/UserLayout";
import Register from "../pages/Register";
import {AuthProvider} from "../context/AuthContext";
import Dashboard from "../pages/Dashboard";
import LogOut from "../pages/LogOut";
import DrRegister from "../pages/DrRegister";
import DrLayout from "../layouts/DrLayout";
import DrDashboard from "../pages/DrDashboard";
import DrUsers from "../pages/DrUsers";
import Qr from "../components/Qr";

export default function UserStack() {
  return <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/logout' element={<LogOut/>}/>
          <Route path='/qr' element={<UserLayout><Qr /></UserLayout>}/>

          <Route
            path='/'
            element={
              <UserLayout>
                <Home/>
              </UserLayout>
            }
          />

          <Route
            path='/dr-register'
            element={
              <UserLayout>
                <DrRegister />
              </UserLayout>
            }
          />

          <Route
            path='/dr-dashboard'
            element={
              <DrLayout>
                <DrDashboard />
              </DrLayout>
            }
          />

          <Route
            path='/dr-users'
            element={
              <DrLayout>
                <DrUsers />
              </DrLayout>
            }
          />

          <Route
            path='/register'
            element={
              <UserLayout>
                <Register/>
              </UserLayout>
            }
          />

          <Route
            path='/dashboard'
            initial={true}
            element={
              <UserLayout>
                <Dashboard/>
              </UserLayout>
            }/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </>
}
