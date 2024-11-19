import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import Logo from "../assets/Images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Hook to navigate programmatically

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const goToContact = () => {
    navigate("/contact"); // Navigate to the /contact page
    setMenuOpen(false); // Close the menu after navigating
  };

  const goToHome = () => {
    navigate("/"); // Navigate to the homepage
    setMenuOpen(false); // Close the menu after navigating
  };

  return (
    <div className="flex justify-around items-center p-4 text-black">
      {/* Logo Section */}
      <div>
        <img src={Logo} alt="Logo" className="w-24 h-24 " onClick={goToHome} />
      </div>

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className="space-y-1 self-center">
          <span className="block w-8 h-1 bg-black"></span>
          <span className="block w-8 h-1 bg-black"></span>
          <span className="block w-8 h-1 bg-black"></span>
        </div>
      </button>

      {/* Menu Items */}
      <ul
        className={`fixed z-50 top-44 left-0 w-full h-[80vh] bg-white text-black flex flex-col justify-center items-center space-y-6 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <li className="text-xl font-Dancing">
          <button onClick={goToHome}>Home</button>
        </li>
        <li className="text-xl font-Dancing">Services</li>

        <li className="text-xl font-Dancing">
          <button onClick={goToContact}>Contact</button>{" "}
          {/* Navigate to contact */}
        </li>
        <li className="text-xl font-Dancing">
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
