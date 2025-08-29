// Footer.tsx
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Viekosoft</h2>
          <p className="text-sm leading-relaxed">
            Solusi digital modern untuk bisnis Anda. Kami hadir untuk membantu
            mengembangkan usaha dengan teknologi terbaik.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Tautan Cepat
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/layanan" className="hover:text-white">
                Layanan
              </a>
            </li>
            <li>
              <a href="/tentang" className="hover:text-white">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-white">
                Faq
              </a>
            </li>
            <li>
              <a href="/testimoni" className="hover:text-white">
                Testimoni
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Layanan</h3>
          <ul className="space-y-3">
            <li>Web Company</li>
            <li>Web Company</li>
            <li>Web Company</li>
            <li>Web Company</li>
            <li>Web Company</li>
            <li>Web Company</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Hubungi Kami
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nama"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows={3}
              placeholder="Pesan"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="flex items-center justify-center w-full bg-primary hover:bg-primary/80 text-white py-3 rounded-lg font-medium transition duration-300"
            >
              <Send size={18} className="mr-2" /> Kirim Pesan
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Viekosoft. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
