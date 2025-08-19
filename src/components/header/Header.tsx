import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/Logo.png";
import MyButton from "../button/Mybutton";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const { pathname } = useLocation();
  const [btnText] = useState("Konsultasi");

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/layanan", label: "Layanan" },
    { to: "/tentang", label: "Tentang Kami" },
    { to: "/faq", label: "FaQ" },
    { to: "/testimoni", label: "Testimoni" },
    { to: "/kontak", label: "Kontak" },
  ];

  const linkClass = (path: string) =>
    `relative transition duration-200 font-medium p-2 rounded-lg ${
      pathname === path
        ? "text-primary bg-slate-100 font-semibold"
        : "text-black hover:text-primary"
    }`;

  return (
    <header className="w-full sticky top-3 left-0 z-50 bg-white/10 backdrop-blur-md shadow-md mt-3 rounded-3xl px-4">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary">
          <img src={Logo} alt="Logo" className="w-36" />
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((item) => (
            <Link key={item.to} to={item.to} className={linkClass(item.to)}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Konsultasi Button */}
        <div className="hidden md:block">
          <MyButton text={btnText} />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            <div className="relative w-6 h-6">
              <FaBars
                size={24}
                className={`absolute transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-75" : "opacity-100 scale-100"
                }`}
              />
              <FaTimes
                size={24}
                className={`absolute transition-all duration-300 ${
                  menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Navigation - Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white rounded-2xl px-4 pb-4">
          <nav className="flex flex-col space-y-3 pt-4">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={`font-medium text-md px-2 py-1 rounded-lg ${
                  pathname === item.to
                    ? "text-primary bg-slate-100"
                    : "text-black hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-primary hover:bg-hoverBtn text-white font-semibold rounded-xl py-2"
            >
              Konsultasi
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
