import { useState } from "react";
import { motion } from "framer-motion";

// Layout
import Layout from "../layouts/MainLayout";

// data
import { Layanan } from "../assets/Data";

// components
import Particles from "../assets/animation/Particles";
import Button from "../components/Button";
import Carousel from "../components/Carousel";

// icons
import { Star, Rocket, Shield, ChevronDown, ChevronUp } from "lucide-react";

// images
import imgHero from "../assets/images/heroImg.png";
import iconHero from "../assets/images/iconHero.png";
import img1 from "../assets/images/img1.png";
import imgMobile from "../assets/images/iphone.png";
import bgFaq from "../assets/images/bgFaq.jpg";
import testi1 from "../assets/images/ft-1.jpeg";

const data = [
  {
    id: 1,
    icon: <Star className="w-8 h-8" />,
    title: "Inovatif",
    desc: "Kami menghadirkan solusi kreatif untuk kebutuhan digital Anda.",
  },
  {
    id: 2,
    icon: <Rocket className="w-8 h-8" />,
    title: "Cepat",
    desc: "Layanan yang responsif dan efisien untuk mendukung bisnis Anda.",
  },
  {
    id: 3,
    icon: <Shield className="w-8 h-8" />,
    title: "Aman",
    desc: "Keamanan data dan privasi Anda adalah prioritas utama.",
  },
];

const faqData = [
  {
    id: 1,
    question: "Apa layanan utama yang kami tawarkan?",
    answer:
      "Kami menyediakan solusi digital mulai dari pengembangan website, aplikasi mobile, hingga desain UI/UX.",
  },
  {
    id: 2,
    question: "Apakah saya bisa melakukan custom sesuai kebutuhan?",
    answer:
      "Tentu, setiap project bisa disesuaikan dengan kebutuhan spesifik Anda agar hasilnya maksimal.",
  },
  {
    id: 3,
    question: "Bagaimana cara melakukan konsultasi?",
    answer:
      "Anda bisa menghubungi kami melalui form kontak atau langsung via WhatsApp/Email yang tersedia.",
  },
  {
    id: 4,
    question: "Apakah tersedia layanan support setelah project selesai?",
    answer:
      "Ya, kami memberikan support & maintenance sesuai kesepakatan agar project Anda tetap berjalan lancar.",
  },
];

const testimonials = [
  {
    id: 1,
    image: testi1,
    text: "Pelayanan cepat dan ramah!",
    title: "Sarah Viloid",
  },
  {
    id: 2,
    image: testi1,
    text: "Sangat puas dengan hasilnya.",
    title: "Sarah Viloid",
  },
  {
    id: 3,
    image: testi1,
    text: "Rekomendasi banget untuk semua orang!",
    title: "Sarah Viloid",
  },
];

const Home = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <Layout>
        <div className="relative text-center space-y-8 bg-gradient-to-b from-white via-secondary/20 to-primary p-6 md:p-8 lg:p-10 overflow-hidden">
          {/* Particles Background */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <Particles
              particleColors={["#0065F8", "#fffff"]}
              particleCount={300}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={500}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

          {/* Hero Section */}
          <section className="relative px-4 sm:px-6 md:px-12 py-20 text-center -translate-y-24 h-[36rem] md:h-full">
            {/* Badge */}
            <div
              className="flex items-center justify-center gap-3 rounded-full py-2 px-6 sm:px-10 border border-secondary max-w-fit mx-auto backdrop-blur-sm bg-white/10"
              data-aos="fade-down"
            >
              <img src={iconHero} alt="icon" className="w-4 sm:w-5" />
              <p className="text-gray-800 text-sm sm:text-md md:text-lg">
                Solusi Digital Cerdas untuk Era Modern
              </p>
            </div>

            {/* Title */}
            <h1
              data-aos="fade-down"
              className="max-w-5xl mx-auto mt-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Viekosoft — Partner Terpercaya Transformasi Digital Anda
            </h1>

            {/* Description */}
            <p
              data-aos="fade-down"
              className="mt-4 text-xs sm:text-sm md:text-lg max-w-md sm:max-w-xl md:max-w-2xl mx-auto text-gray-700"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              pariatur voluptatem nemo ipsum sed quam adipisci magnam quibusdam
              voluptatibus accusamus doloremque laudantium commodi
            </p>

            {/* Button */}
            <div data-aos="zoom-in-down" className="mt-6">
              <Button
                onClick={() => {
                  document
                    .getElementById("layanan")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 text-sm sm:text-base relative z-[50] hover:scale-105 transition-transform"
              >
                Learn More
              </Button>
            </div>

            {/* Hero Image */}
            <div
              data-aos="fade-up"
              className="flex items-center justify-center mt-10 md:mt-16"
            >
              <div className="relative rounded-2xl border border-white backdrop-blur-sm bg-white/10 p-2 sm:p-4 shadow-lg max-w-[95%] sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
                <img className="w-full rounded-2xl" src={imgHero} alt="Hero" />
              </div>
            </div>
          </section>
        </div>

        {/* Layanan Section */}
        <section
          id="layanan"
          className="bg-blue-50 px-4 py-12 sm:py-16 lg:py-20"
        >
          {/* title */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="text-center space-y-6 text-gray-800 max-w-4xl mx-auto px-4"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Layanan
            </h1>
            <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              voluptas minus, enim quisquam molestiae vel assumenda culpa.
              Molestiae temporibus, sed sunt officia reiciendis ipsa nemo id
              culpa fugit dolor obcaecati?
            </p>
          </motion.div>

          {/* cards */}
          <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-2 sm:px-6 lg:px-16">
            {Layanan.map((item) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: false }}
                key={item.id}
                className="rounded-2xl border border-gray-200 p-6 sm:p-8 bg-white flex flex-col items-start"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-gradient-to-b from-primary to-secondary text-white mb-4">
                  <span className="text-2xl sm:text-3xl lg:text-4xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {item.keterangan}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tentang Kami */}
        <section>
          <div className="relative text-center overflow-hidden">
            {/* Particles Background */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
              <Particles
                particleColors={["#0065F8", "#fffff"]}
                particleCount={100}
                particleSpread={15}
                speed={0.3}
                particleBaseSize={7000}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              />
            </div>
            <div className="bg-white/40 backdrop-blur-2xl py-20 lg:px-16 px-6">
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="text-center space-y-6 text-gray-800 max-w-4xl mx-auto"
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  Tentang Kami
                </h1>
                <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  voluptas minus, enim quisquam molestiae vel assumenda culpa.
                  Molestiae temporibus, sed sunt officia reiciendis ipsa nemo id
                  culpa fugit dolor obcaecati?
                </p>
              </motion.div>
              {/* Content */}
              <div className="mt-12 flex flex-col lg:flex-row items-center gap-10">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: false }}
                  className="flex-1 flex justify-center"
                >
                  <img
                    className="w-full max-w-4xl"
                    src={img1}
                    alt="Tentang Kami"
                  />
                </motion.div>
                {/* Devices / Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: false }}
                  className="flex-1"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:px-6">
                    {data.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
                      >
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-b from-primary to-secondary text-white mb-4">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                    <div className="bg-primary rounded-2xl p-8 shadow-md hover:shadow-lg transition text-white">
                      <h1 className="text-xl font-semibold mb-2">
                        Responsive Design
                      </h1>
                      <p className="text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis, a possimus. Similique, officiis iure sint
                        distinctio eum impedit, dolor atque expedita possimus
                        cupiditate corrupti ipsam aperiam laborum tempore
                        asperiores debitis.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-36 px-6 py-12 min-h-screen">
          {/* Text Box */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="bg-blue-50 rounded-3xl w-full max-w-2xl p-6 sm:p-8 text-gray-800 space-y-6"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Platform Kami Selalu Memperbarui Secara Berkala
            </h1>
            <p className="text-sm sm:text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              nostrum quidem eligendi error velit ducimus eaque maiores possimus
              ratione magnam enim voluptatem? Ex, odio illum.
            </p>
            <Button
              className="px-6 py-3 text-sm sm:text-base relative z-[50] hover:scale-105 transition-transform flex items-center gap-2"
              asChild
            >
              <a
                href="https://wa.me/6285182267460?text=Halo%20saya%20ingin%20bergabung"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mulai Bergabung
              </a>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }} // mulai kecil
            whileInView={{ opacity: 1, scale: 1 }} // normal
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex justify-center items-center w-full max-w-lg lg:max-w-xl"
          >
            <img
              className="w-full h-auto rounded-3xl"
              src={imgMobile}
              alt="Platform preview"
            />
          </motion.div>
        </section>

        {/* FaQ Section */}
        <section
          id="faq"
          className="faq-section relative bg-cover bg-center bg-no-repeat py-16 px-6"
          style={{ backgroundImage: `url(${bgFaq})` }}
        >
          {/* Overlay Warna */}
          <div className="absolute inset-0 bg-primary/90 -z-30"></div>
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Pertanyaan yang sering diajukan seputar layanan kami</p>
          </div>

          <div className="faq-list">
            {faqData.map((faq) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                key={faq.id}
                className={`faq-item text-gray-800 ${
                  openId === faq.id ? "open" : ""
                }`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <span>{faq.question}</span>
                  {openId === faq.id ? (
                    <ChevronUp className="icon" />
                  ) : (
                    <ChevronDown className="icon" />
                  )}
                </button>
                <div
                  className="faq-answer"
                  style={{ maxHeight: openId === faq.id ? "200px" : "0" }}
                >
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimoni Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto flex flex-col gap-16 lg:gap-24">
            {/* Text */}
            <div className="text-center space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
                Apa Kata Mereka?
              </h1>
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Kami selalu berusaha memberikan pelayanan terbaik. Berikut
                pengalaman nyata dari pelanggan kami yang telah menggunakan
                layanan ini.
              </p>
            </div>

            {/* Carousel */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg sm:max-w-xl lg:max-w-3xl">
                <Carousel items={testimonials} />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
