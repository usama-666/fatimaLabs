import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./components";
import Layout from "./components/Layout";
import Report from "./pages/Report";
import Login from "./pages/Login";
import AddReport from "./pages/user/AddReport";
import DownloadReport from "./pages/user/DownloadReport";
import Reports from "./pages/user/Reports";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
          index: true,
        },
        {
          path: "/add-report",
          element: (
            <AppLayout authentication={true}>
              <AddReport />
            </AppLayout>
          ),
        },
        {
          path: "download-report",
          element: (
            <AppLayout authentication={true}>
              <DownloadReport />,
            </AppLayout>
          ),
        },
        {
          path: "reports",
          element: (
            <AppLayout authentication={true}>
              <Reports />,
            </AppLayout>
          ),
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
