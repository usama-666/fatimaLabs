import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children, authentication = false }) {
  const authStatus = useSelector((state) => state.status);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    // if (authentication && !authStatus !== authentication) {
    //   navigate("/login");
    // } else if (!authentication && !authStatus === authentication) {
    //   navigate("/user");
    // }

    if (authentication && authStatus === false) {
      navigate("/login");
    }
    //
    setLoading(false);
  }, [authStatus, authentication, navigate]);

  return loading ? <h1>loading...</h1> : <div>{children}</div>;
}

export default AuthLayout;
