import { ChevronDown } from "lucide-react";
import Swal from "sweetalert2";

const Footer = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // submit manual ke action
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Pesan terkirim!",
          text: "Terima kasih, kami akan segera menghubungi Anda.",
          confirmButtonColor: "#3B82F6", // warna primary (sesuaikan tailwind)
        });
        form.reset();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Pesan gagal dikirim, silakan coba lagi.",
          confirmButtonColor: "#EF4444",
        });
      });
  };

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
            Menu
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
            onSubmit={handleSubmit}
          >
            {/* hidden authenticity token */}
            <input
              type="hidden"
              name="authenticity_token"
              value="ibTcFLe2Dffu90apdkpyG0KbJevPVaHlFlxeJd2gMKOfvXouE8VejQ1EoVE-xjuu6RRowns_lkGQKdjvYKFXkg"
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
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 
                     text-white placeholder-gray-400 focus:outline-none focus:border-primary"
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
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 
                     text-white placeholder-gray-400 focus:outline-none focus:border-primary"
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
              <div className="relative">
                <select
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 
                 text-white focus:outline-none focus:border-primary appearance-none pr-10"
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

                {/* Icon di kanan */}
                <ChevronDown
                  size={20}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
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
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 
                     text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                name="message"
                id="message"
              />
            </div>

            {/* Tombol Submit dengan Icon Arrow */}
            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-semibold 
                     hover:bg-primary/90 transition-colors"
              >
                Kirim Pesan
              </button>
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
