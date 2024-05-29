import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import AuthLayout from "./components/AuthLayout"; // Ensure correct import
import Report from "./pages/Report";
import Login from "./pages/Login";
import AddReport from "./pages/user/AddReport";
import DownloadReport from "./pages/user/DownloadReport";
import Reports from "./pages/user/Reports";
import Home from "./pages/Home";
import UserHome from "./pages/user/UserHome";
import { useSelector } from "react-redux";

function App() {
  const authStatus = useSelector((state) => state.status);
  const userData = useSelector((state) => state.userData);
  console.log(authStatus);
  console.log(userData);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: authStatus ? <Navigate to={"/user"} /> : <Home />,
          index: true,
        },
        {
          path: "/report",
          element: <Report />,
        },
        {
          path: "/login",
          element: authStatus === true ? <Navigate to={"/user"} /> : <Login />,
        },
        {
          path: "/user",
          element: (
            <AuthLayout authentication={true}>
              <UserHome />
            </AuthLayout>
          ),
          children: [
            {
              path: "add-report",
              element: (
                <AuthLayout authentication={true}>
                  <AddReport />
                </AuthLayout>
              ),
            },
            {
              path: "download-report",
              element: (
                <AuthLayout authentication={true}>
                  <DownloadReport />
                </AuthLayout>
              ),
            },
            {
              path: "reports",
              element: (
                <AuthLayout authentication={true}>
                  <Reports />
                </AuthLayout>
              ),
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
