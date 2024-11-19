import { useState } from "react";
import Logo from "../../public/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-around items-center p-4 text-black">
      {/* Logo Section */}
      <div>
        <img src={Logo} alt="Logo" className="w-40 h-40" />
      </div>

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className="space-y-2 self-center">
          <span className="block w-8 h-1 bg-black"></span>
          <span className="block w-8 h-1 bg-black"></span>
          <span className="block w-8 h-1 bg-black"></span>
        </div>
      </button>

      {/* Menu Items */}
      <ul
        className={`fixed top-44 left-0 w-40 h-[50vh] text-black flex flex-col  justify-center items-center space-y-6 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <li className="text-xl">Services</li>
        <li className="text-xl">Contact</li>
        <li className="text-xl">
          <button
            onClick={toggleMenu}
            className="text-red-500"
            aria-label="Close menu"
          >
            Close
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
