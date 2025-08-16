import { useState } from "react";
import Button from "../Button";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Facebook, AlignCenter, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Layanan", path: "/layanan" },
  { name: "Tentang Kami", path: "/tentang" },
  { name: "FaQ", path: "/faq" },
  { name: "Testimoni", path: "/testimoni" },
];

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-gray-500 sticky top-0 z-[99] shadow-sm">
      <div className="mx-auto w-full flex items-center justify-between px-12 py-4">
        {/* Logo */}
        <span className="logo text-primary text-lg md:text-xl lg:text-2xl font-bold">
          Viekosoft
        </span>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative group transition-colors duration-300 ${
                location.pathname === item.path ? "text-gray-800" : ""
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${
                  location.pathname === item.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Sosmed + Button */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#"
            className="text-gray-500 p-3 rounded-full border hover:bg-gray-100 duration-200"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#"
            className="text-gray-500 p-3 rounded-full border  hover:bg-gray-100 duration-200"
          >
            <Facebook size={18} />
          </a>
          <Button>Kontak</Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg bg-white text-gray-700 hover:bg-secondary hover:text-white transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <AlignCenter size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 px-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-gray-500 font-medium ${
                location.pathname === item.path ? "text-gray-800" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex gap-3 mt-4">
            <a
              href="#"
              className="text-gray-500 p-3 rounded-full border hover:bg-gray-100"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 p-3 rounded-full border hover:bg-gray-100 duration-200"
            >
              <Facebook size={18} />
            </a>
          </div>
          <Button className="w-full  mt-4 bg-white hover:bg-secondary hover:text-white duration-300 text-gray-700">
            Kontak
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
