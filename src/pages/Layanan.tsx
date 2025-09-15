import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import { Pagination, Autoplay } from "swiper/modules";
import {
  Smartphone,
  Monitor,
  Globe,
  CheckCircle,
  ShieldCheck,
  Zap,
  Users,
  Layers,
} from "lucide-react";

import Layout from "../layouts/MainLayout";
import mobile1 from "../assets/images/iphone.png";
import wavebg from "../assets/images/wave.svg";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide1.png";
import slide3 from "../assets/images/slide1.png";
import bpjsImg from "../assets/images/bpjs.png";
import Button from "../components/Button";

const images = [slide1, slide2, slide3];
const services = [
  "MOBILE APP DEVELOPMENT (ANDROID & IOS)",
  "WEB APPLICATION DEVELOPMENT",
  "E-COMMERCE SOLUTIONS",
  "CUSTOM SOFTWARE DEVELOPMENT",
  "API INTEGRATION SERVICES",
  "UI/UX DESIGN",
  "SIMRS",
];

const advantages = [
  {
    icon: ShieldCheck,
    title: "Keamanan Terjamin",
    desc: "Sistem dibangun dengan standar keamanan tinggi untuk melindungi data dan transaksi Anda.",
  },
  {
    icon: Zap,
    title: "Performa Cepat",
    desc: "Aplikasi dan website berjalan dengan performa optimal sehingga pengguna lebih nyaman.",
  },
  {
    icon: Users,
    title: "User Friendly",
    desc: "Tampilan modern dengan desain UI/UX yang mudah dipahami oleh semua kalangan.",
  },
  {
    icon: Layers,
    title: "Custom & Skalabel",
    desc: "Solusi disesuaikan dengan kebutuhan bisnis Anda dan dapat berkembang seiring waktu.",
  },
];

const Layanan = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        {/* Background */}
        <img
          className="absolute transform scale-x-[-1] inset-0 w-full h-full object-cover"
          src={wavebg}
          alt="Background"
        />

        {/* Overlay konten */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start px-8 py-20">
          {/* Text */}
          <motion.div
            className="space-y-6 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ staggerChildren: 0.3 }} // animasi muncul satu per satu
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 2, ease: "easeOut" },
              },
            }}
          >
            <motion.h1 className="text-3xl md:text-7xl font-bold leading-tight">
              Friendly & Human Touch
            </motion.h1>

            <motion.p className="text-base md:text-lg opacity-90 leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              voluptatum necessitatibus totam, dolorum cumque explicabo
              similique optio minima molestiae culpa hic possimus error
            </motion.p>

            <motion.a
              href="https://wa.me/6285182267460"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-full shadow-lg hover:bg-gray-100 hover:shadow-md transition duration-300"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
            >
              Mulai Sekarang
            </motion.a>
          </motion.div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <motion.img
              src={mobile1}
              alt="Ilustrasi Layanan"
              className="w-[22rem] md:w-[28rem] lg:w-[38rem]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 2, ease: "easeOut" },
                },
              }}
              animate={{ y: [0, -20, 0] }} // naik turun halus
              transition={{
                duration: 4, // semakin besar semakin lambat
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </section>

      {/* Layanan Section */}
      <section className="mt-16 max-w-7xl mx-auto px-6">
        {/* Judul */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }} // animasi keluar
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Layanan Kami
          </h1>
          <p className="w-24 h-1 bg-primary mt-2 rounded"></p>
          <p className="max-w-3xl text-center mt-4 px-4 text-gray-600">
            Kami hadir untuk memberikan layanan yang bukan hanya sekadar
            memenuhi kebutuhan, tetapi juga menghadirkan pengalaman terbaik bagi
            Anda.
          </p>
        </motion.div>

        {/* Content & Carousel */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          {/* Konten Box */}
          <motion.div
            className="grid md:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Mobile */}
            <div className="bg-primary text-white p-6 rounded-2xl shadow-md space-y-2 items-start gap-4">
              <Smartphone className="w-10 h-10 text-white" />
              <div>
                <h2 className="text-xl font-bold">Mobile View</h2>
                <p className="mt-2 text-sm opacity-90">
                  Konten ini muncul khusus di layar mobile.
                </p>
              </div>
            </div>

            {/* Desktop */}
            <div className="bg-primary text-white p-6 rounded-2xl shadow-md space-y-2 items-start gap-4">
              <Monitor className="w-10 h-10 text-white" />
              <div>
                <h2 className="text-xl font-bold">Desktop View</h2>
                <p className="mt-2 text-sm opacity-90">
                  Konten ini hanya muncul di layar desktop.
                </p>
              </div>
            </div>

            {/* Web */}
            <div className="bg-primary text-white p-6 rounded-2xl shadow-md space-y-2 items-start gap-4 md:col-span-2">
              <Globe className="w-10 h-10 text-white" />
              <div>
                <h2 className="text-xl font-bold">Web View</h2>
                <p className="mt-2 text-sm opacity-90">
                  Konten tambahan untuk web, ditampilkan setelah desktop.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Swiper
              spaceBetween={20}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    className="max-w-full max-h-[500px] object-contain rounded-2xl mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* BPJS Section */}
      <section className="mt-32 flex flex-col-reverse lg:flex-row items-center lg:justify-evenly gap-12 p-8 lg:p-20 bg-primary">
        {/* Text */}
        <motion.div
          className="flex flex-col space-y-6 text-white max-w-3xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold leading-snug">
            Solusi Digital Rumah Sakit, Terhubung dengan BPJS Kesehatan
          </h1>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base lg:text-lg">
            <li>
              Pendaftaran lebih cepat & mudah dengan integrasi V-Claim/PCare
              BPJS.
            </li>
            <li>
              Klaim BPJS lebih cepat & akurat, meminimalisir penolakan klaim.
            </li>
            <li>
              Efisiensi operasional rumah sakit dengan data terintegrasi
              otomatis.
            </li>
            <li>
              Transparansi & akuntabilitas melalui laporan klaim real-time.
            </li>
            <li>
              Peningkatan kualitas layanan pasien dengan proses administrasi
              singkat.
            </li>
            <li>Integrasi data rekam medis, obat, tindakan, dan keuangan.</li>
            <li>
              Mendukung digitalisasi rumah sakit sesuai program pemerintah.
            </li>
          </ul>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.img
            className="w-full max-w-sm sm:max-w-md lg:max-w-2xl"
            src={bpjsImg}
            alt="bpjs"
            animate={{ y: [0, -15, 0] }} // animasi floating
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </section>

      {/*Daftar Layanan */}
      <section className="py-16 px-6 lg:mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: List layanan */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }, // efek muncul satu per satu
              },
            }}
          >
            <h2 className="text-xl text-primary font-semibold mb-6">
              Layanan yang Kami Tawarkan:
            </h2>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3 border-b border-gray-200 pb-2"
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <CheckCircle className="text-primary w-5 h-5" />
                  <span className="text-gray-800">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: CTA */}
          <motion.div
            className="text-center md:text-left space-y-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-primary font-semibold">
              From Concept to Code – We Deliver Excellence.
            </p>
            <h3 className="text-3xl md:text-4xl font-bold leading-snug">
              Let’s Build Your <span className="text-primary">Application</span>{" "}
              Today!
            </h3>
            <p className="text-gray-600">
              Hubungi kami sekarang untuk konsultasi GRATIS dan mulai perjalanan
              Anda menuju solusi digital yang luar biasa.
            </p>
            <Button
              asChild
              className="px-8 py-3 font-semibold text-lg bg-white text-primary rounded-full shadow-lg hover:bg-gray-100 hover:shadow-md transition duration-300"
            >
              <a
                href="https://wa.me/6285182267460"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Now!
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Keunggulan Layanan */}
      <section className="bg-white py-16 px-6 lg:mt-12">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Keunggulan Layanan <span className="text-primary">Kami</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Kami memberikan solusi digital terbaik dengan teknologi terkini
            untuk mendukung pertumbuhan bisnis Anda.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }, // card muncul satu-satu
            },
          }}
        >
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-2xl shadow-lg bg-gray-50"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 50 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex justify-center items-center w-14 h-14 rounded-full bg-primary text-white mx-auto mb-4">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-800 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section></section>
    </Layout>
  );
};

export default Layanan;
