import { ChevronDown } from "lucide-react";

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
              <a href="/" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/layanan" className="hover:text-white transition-colors">
                Layanan
              </a>
            </li>
            <li>
              <a href="/tentang" className="hover:text-white transition-colors">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-white transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/testimoni"
                className="hover:text-white transition-colors"
              >
                Testimoni
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Layanan</h3>
          <ul className="space-y-2">
            <li>Web Company</li>
            <li>Mobile Apps</li>
            <li>UI/UX Design</li>
            <li>Full Stack Development</li>
            <li>Konsultasi Teknis</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Hubungi Kami
          </h3>
          <form
            id="contact-form"
            className="space-y-4"
            action="https://pesan.heruoktafian.com"
            acceptCharset="UTF-8"
            method="post"
          >
            {/* hidden authenticity token */}
            <input
              type="hidden"
              name="authenticity_token"
              value="Fz6qCQklz3Fj6b2ot8QJcHzDQ8O5fZr3S1k6DIVIUSqJQGd_vciq0Wm2JiA_f9KLOjiq1-zOQnLYJmNLGWeB5Q"
              autoComplete="off"
            />

            {/* Nama */}
            <div>
              <label
                className="block text-white font-medium mb-2"
                htmlFor="name"
              >
                Nama
              </label>
              <input
                placeholder="Nama Anda"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 
                     text-white placeholder-white/70 focus:outline-none focus:border-white"
                type="text"
                name="name"
                id="name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-white font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                placeholder="email@anda.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 
                     text-white placeholder-white/70 focus:outline-none focus:border-white"
                type="email"
                name="email"
                id="email"
              />
            </div>

            {/* Pilih Jenis Project */}
            <div>
              <label className="block text-white mb-1" htmlFor="project_type">
                Pilih jenis project
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 
                     text-white placeholder-white/70 focus:outline-none focus:border-white"
                name="project_type"
                id="project_type"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Pilih jenis project
                </option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile App</option>
                <option value="fullstack">Full Stack Development</option>
                <option value="uiux">UI/UX Design</option>
                <option value="consultation">Konsultasi Teknis</option>
              </select>
            </div>

            {/* Pesan */}
            <div>
              <label
                className="block text-white font-medium mb-2"
                htmlFor="message"
              >
                Pesan
              </label>
              <textarea
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 
                     text-white placeholder-white/70 focus:outline-none focus:border-white"
                name="message"
                id="message"
              />
            </div>

            {/* Tombol Submit */}
            <div>
              <input
                type="submit"
                name="commit"
                value="Kirim Pesan"
                className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold 
                     hover:bg-gray-100 transition-colors cursor-pointer"
                data-disable-with="Kirim Pesan"
              />
            </div>
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
