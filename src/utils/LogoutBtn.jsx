import { useDispatch, useSelector } from "react-redux";
import authService from "../firebase/firebase.js";
import { logout as authLogout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function LogoutBtn({ className = "" }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const logoutHandler = async () => {
    // const authStatus = useSelector((state) => state.status);

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
      className={`bg-teal-400 px-4 py-2 rounded-md text-white hover:bg-teal-500 ${className}`}
      onClick={logoutHandler}>
      Logout
    </button>
  );
}

export default LogoutBtn;
