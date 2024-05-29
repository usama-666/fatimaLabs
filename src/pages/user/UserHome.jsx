import { Outlet } from "react-router-dom";
import Reports from "./Reports";

function UserHome() {
  return (
    <div>
      <Outlet />
      <Reports />
    </div>
  );
}

export default UserHome;
