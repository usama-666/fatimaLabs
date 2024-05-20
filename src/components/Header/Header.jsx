import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "../index";
import { LogoutBtn } from "../../utils";

function Header() {
  const authStatus = useSelector((state) => state.status);

  const navigate = useNavigate();

  const navItems = [
    {
      path: "/",
      name: "Home",
      active: true,
    },
    {
      path: "/report",
      name: "Reports",
      active: authStatus,
    },
    {
      path: "/login",
      name: "Login Now",
      active: !authStatus,
    },
  ];
  return (
    <header>
      <Container>
        <nav>
          <div>logo</div>
          <ul className="flex space-x-3">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn>Logout</LogoutBtn>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
