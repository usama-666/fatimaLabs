import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import authService from "../firebase/authService";
import { login, logout } from "../store/authSlice";
import { Header, Footer } from "./index";
import { Outlet } from "react-router-dom";
import AppLayout from "./AppLayout";
function Layout() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        console.log(userData);
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div>
      <Header />
      <main>
        todo :
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <AppLayout>
      <Header />
      <main>user not logined</main>
      <Footer />
    </AppLayout>
  );
}

export default Layout;
