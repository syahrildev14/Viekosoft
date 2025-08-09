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
    <header className="bg-gradient-to-tl from-primary to-secondary text-white sticky top-0 z-50">
      <div className="mx-auto w-full flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <span className="logo text-lg md:text-xl lg:text-2xl font-bold">
          Viekosoft
        </span>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative group transition-colors duration-300 ${
                location.pathname === item.path ? "text-violet-300" : ""
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-violet-300 rounded-full transition-all duration-300 ${
                  location.pathname === item.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop Sosmed + Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-gray-700 hover:text-white p-2 rounded-full bg-white hover:bg-secondary shadow-xl duration-300"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-white p-2 rounded-full bg-white hover:bg-secondary shadow-xl duration-300"
          >
            <Facebook size={18} />
          </a>
          <Button className="bg-white hover:bg-secondary hover:text-white duration-300 text-gray-700">
            Kontak
          </Button>
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
        className={`md:hidden bg-primary transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 px-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-white font-medium ${
                location.pathname === item.path ? "text-violet-300" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex gap-3 mt-4">
            <a
              href="#"
              className="text-gray-700 hover:text-white p-2 rounded-full bg-white hover:bg-secondary shadow-xl duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-white p-2 rounded-full bg-white hover:bg-secondary shadow-xl duration-300"
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
