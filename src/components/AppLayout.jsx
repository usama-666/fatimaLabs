import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AppLayout({ children, authentication = true }) {
  const authStatus = useSelector((state) => state.status);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    // if (authentication && !authStatus !== authentication) {
    //   navigate("/login");
    // } else if (!authentication && !authStatus === authentication) {
    //   navigate("/");
    // }

    if (authentication && authStatus === false) {
      navigate("/login");
    } else if (authentication && authStatus === true) {
      navigate("/");
    }
    setLoading(false);
  }, [authStatus, authentication, navigate]);

  return loading ? <h1>loading</h1> : <div>{children}</div>;
}

export default AppLayout;
