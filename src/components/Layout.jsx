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
    <AppLayout>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </AppLayout>
  ) : null;
  // return !loading ? (
  //   <div>
  //     <Header />
  //     <main>
  //       {/* // Alll no authenticatied pages appears here */}
  //       <Outlet />
  //     </main>
  //     <Footer />
  //   </div>
  // ) : (
  //   <AppLayout>
  //     <Header />
  //     <main>
  //       {/* all logned user will be in the directotry*/}
  //       <Outlet />
  //     </main>
  //     <Footer />
  //   </AppLayout>
  // );
}

export default Layout;
