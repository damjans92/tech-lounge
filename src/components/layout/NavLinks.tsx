import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const navLinks = [
    { title: "Home", url: "/" },
    { title: "Shop", url: "/shop" },
    { title: "About", url: "/about" },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <li>
          <NavLink
            to={link.url}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "text-black hover:text-blue-500 transition-all"
            }
          >
            {link.title}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
