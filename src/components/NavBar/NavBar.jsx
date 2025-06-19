import { NavLink } from "react-router-dom";

function Navbar({ navLinks }) {
  const navLinkBase = 'w-full h-full py-2 px-4 border-2 font-medium rounded-md border-indigo-700 transition duration-100';
  const getNavClass = (isActive) => isActive ? `${navLinkBase} bg-indigo-700 text-white hover:bg-indigo-800` : `${navLinkBase} bg-white text-black hover:bg-indigo-700 hover:text-white `;

  return (
    <nav className="p-4 border-b-2 bg-white w-full fixed top-0 shadow z-50">
      <ul className="flex flex-row gap-3 items-center justify-center">
        {navLinks.map((link) => (
          <li key={link.path} className="first:mr-auto">
              <NavLink className={({ isActive }) => getNavClass(isActive)} to={link.path}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
