import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "../index";
import { Button, LogoutBtn } from "../../utils";
import logo from "../../assets/images/logo.png";

function Header() {
  const authStatus = useSelector((state) => state.status);
  const navigate = useNavigate();

  const navItems = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/report",
      name: "Reports",
    },
    // {
    //   path: "/login",
    //   name: "Login Now",
    // },
  ];

  const userNavItems = [
    {
      path: "/user",
      name: "User Home",
      visible: authStatus,
    },
    {
      path: "/user/add-report",
      name: "Add Reports",
      visible: authStatus,
    },
    {
      path: "/user/download-report",
      name: "Download Reports",
      visible: authStatus,
    },
  ];
  return (
    <header>
      <Wrapper>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">
              <img src={logo} alt="Logo Image" />
              Fatima Labs
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <ul className="flex space-x-3">
              {authStatus === false &&
                navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      // onClick={() => navigate(item.path)}
                      className="mr-5 hover:text-gray-900 inline-block px-6 py-2 duration-200 hover:underline rounded-full">
                      {item.name}
                    </Link>
                  </li>
                ))}
              {authStatus === true &&
                userNavItems.map(
                  (item) =>
                    item.visible && (
                      <li key={item.name}>
                        <Link
                          to={item.path}
                          // onClick={() => navigate(item.path)}
                          className="inline-block px-6 py-2 duration-200 hover:underline rounded-full">
                          {item.name}
                        </Link>
                      </li>
                    )
                )}
            </ul>
          </nav>
          <div>
            {authStatus === true ? (
              <>
                <LogoutBtn>Logout</LogoutBtn>
              </>
            ) : (
              <Button onClick={() => navigate("/login")}>Login now</Button>
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
