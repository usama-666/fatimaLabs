import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "../firebase/firebase";
import { login, logout } from "../store/authSlice";
import { Header, Footer } from "./index";
import { Outlet } from "react-router-dom";
// import AuthLayout from "./AuthLayout";

function Layout() {
  // const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const userData = authService.getCurrentUser().then((data) => {
  //     console.log(data);
  //   });

  //   if (userData) {
  //     setLoading(false);
  //     console.log(userData);
  //   }

  //   // .then((userData) => {
  //   //   // if (userData) {
  //   //   //   dispatch(login(userData));
  //   //   // } else {
  //   //   //   dispatch(logout());
  //   //   // }
  //   //   console.log(userData);
  //   // })
  //   // .finally(() => setLoading(false));
  // }, [dispatch]);

  // return !loading ? (
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
