import { useDispatch } from "react-redux";
import authService from "../firebase/authService";
import { logout as authLogout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const logoutHandler = async () => {
    try {
      await authService
        .logout()
        .then(() => {
          dispatch(authLogout());
          navigate("/login");
        })
        .catch((error) => {
          console.log("error :: LogoutBtn ::", error);
        });
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}>
      Logout
    </button>
  );
}

export default LogoutBtn;
