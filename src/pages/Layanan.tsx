import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import { Pagination, Autoplay } from "swiper/modules";
import { Smartphone, Monitor, Globe } from "lucide-react";

import Layout from "../layouts/MainLayout";
import mobile1 from "../assets/images/iphone.png";
import wavebg from "../assets/images/wave.svg";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide1.png";
import slide3 from "../assets/images/slide1.png";
import bpjsImg from "../assets/images/bpjs.png";

const images = [slide1, slide2, slide3];

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

            <motion.p className="text-base md:text-lg opacity-90 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              voluptatum necessitatibus totam, dolorum cumque explicabo
              similique optio minima molestiae culpa hic possimus error
            </motion.p>

            <motion.button
              className="px-6 py-3 bg-white text-primary font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
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
            </motion.button>
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
              transition={{ staggerChildren: 0.3 }} // animasi muncul satu per satu
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
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Layanan Kami
          </h1>
          <p className="w-24 h-1 bg-primary mt-2 rounded"></p>
          <p className="max-w-3xl text-center mt-4 px-4 text-gray-600">
            Kami hadir untuk memberikan layanan yang bukan hanya sekadar
            memenuhi kebutuhan, tetapi juga menghadirkan pengalaman terbaik bagi
            Anda.
          </p>
        </div>

        {/* Content & Carousel */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          {/* Konten Box */}
          <div className="grid md:grid-cols-2 gap-4">
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

            {/* Web (Full Width) */}
            <div className="bg-primary text-white p-6 rounded-2xl shadow-md space-y-2 items-start gap-4 md:col-span-2">
              <Globe className="w-10 h-10 text-white" />
              <div>
                <h2 className="text-xl font-bold">Web View</h2>
                <p className="mt-2 text-sm opacity-90">
                  Konten tambahan untuk web, ditampilkan setelah desktop.
                </p>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div>
            <Swiper
              spaceBetween={20}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className=""
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
          </div>
        </div>
      </section>

      {/* BPJS Section */}
      <section className="mt-24 flex flex-col-reverse lg:flex-row items-center lg:justify-evenly gap-12 p-8 lg:p-20 bg-primary">
        {/* Text */}
        <div className="flex flex-col space-y-6 text-white max-w-3xl">
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
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            className="w-full max-w-sm sm:max-w-md lg:max-w-2xl"
            src={bpjsImg}
            alt="bpjs"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Layanan;
