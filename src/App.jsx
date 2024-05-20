import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./components";
import Layout from "./components/Layout";
import Report from "./pages/Report";
import Login from "./pages/Login";
import AddReport from "./pages/user/AddReport";
import DownloadReport from "./pages/user/DownloadReport";
import Reports from "./pages/user/Reports";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <AppLayout />,
          index: true,
        },
        {
          path: "/add-report",
          element: <AddReport />,
        },
        {
          path: "download-report",
          element: <DownloadReport />,
        },
        {
          path: "reports",
          element: <Reports />,
        },
      ],
    },
    {
      path: "/report",
      element: <Report />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
