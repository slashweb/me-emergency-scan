import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import UserLayout from "../layouts/UserLayout";
import Register from "../pages/Register";
import {AuthProvider} from "../context/AuthContext";


export default function UserStack() {
  return <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
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
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </>
}
