import { useState } from "react";

// Layout
import Layout from "../layouts/MainLayout";

// data
import { Layanan } from "../assets/Data";

// components
import Particles from "../assets/animation/Particles";
import Button from "../components/Button";

// icons
import { Star, Rocket, Shield, ChevronDown, ChevronUp } from "lucide-react";

// images
import imgHero from "../assets/images/heroImg.png";
import iconHero from "../assets/images/iconHero.png";
import img1 from "../assets/images/img1.png";

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

const Home = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <Layout>
        <div className="relative text-center space-y-8 bg-gradient-to-b from-white via-secondary/20 to-primary p-6 md:p-8 lg:p-10 overflow-hidden max-h-[78rem]">
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
          <div className="flex items-center justify-center gap-3 rounded-full py-2 px-10 border border-secondary w-1/4 mx-auto backdrop-blur-sm bg-white/10">
            <img src={iconHero} alt="icon" className="w-5" />
            <p className="text-gray-800 text-md">
              Solusi Digital Cerdas untuk Era Modern
            </p>
          </div>

          <h1 className="max-w-6xl mx-auto text-center text-3xl sm:text-4xl md:text-6xl font-bold">
            Viekosoft — Partner Terpercaya Transformasi Digital Anda
          </h1>

          <p className="text-sm sm:text-base md:text-lg max-w-lg md:max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            pariatur voluptatem nemo ipsum sed quam adipisci magnam quibusdam
            voluptatibus accusamus doloremque laudantium commodi
          </p>

          <Button className="relative z-[50] hover:scale-105 ">
            Learn More
          </Button>

          {/* Gambar */}
          <div className="flex items-center justify-center min-h-screen -translate-y-32">
            <div className="relative rounded-3xl border border-white backdrop-blur-sm bg-white/10 p-4 shadow-sm">
              <img
                className="w-9 sm:w-[28rem] md:w-[48rem] lg:w-[60rem] rounded-3xl"
                src={imgHero}
                alt="Hero"
              />
            </div>
          </div>
        </div>

        {/* Layanan Section */}
        <section className="bg-gray-100 px-4 py-12 sm:py-16 lg:py-20">
          {/* title */}
          <div className="text-center space-y-6 text-gray-800 max-w-4xl mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Layanan
            </h1>
            <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              voluptas minus, enim quisquam molestiae vel assumenda culpa.
              Molestiae temporibus, sed sunt officia reiciendis ipsa nemo id
              culpa fugit dolor obcaecati?
            </p>
          </div>

          {/* cards */}
          <div className="relative max-w-7xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-2 sm:px-6 lg:px-16">
            {Layanan.map((item) => (
              <div
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
              </div>
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
                particleCount={20}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={7000}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              />
            </div>
            <div className="bg-white/40 backdrop-blur-2xl py-20 lg:px-16 px-6">
              {/* Title */}
              <div className="text-center space-y-6 text-gray-800 max-w-4xl mx-auto">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  Tentang Kami
                </h1>
                <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  voluptas minus, enim quisquam molestiae vel assumenda culpa.
                  Molestiae temporibus, sed sunt officia reiciendis ipsa nemo id
                  culpa fugit dolor obcaecati?
                </p>
              </div>
              {/* Content */}
              <div className="mt-12 flex flex-col lg:flex-row items-center gap-10">
                {/* Image */}
                <div className="flex-1 flex justify-center">
                  <img
                    className="w-full max-w-4xl"
                    src={img1}
                    alt="Tentang Kami"
                  />
                </div>
                {/* Devices / Cards */}
                <div className="flex-1">
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FaQ Section */}
        <section className="faq-section bg-blue-950" id="faq">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Pertanyaan yang sering diajukan seputar layanan kami</p>
          </div>

          <div className="faq-list">
            {faqData.map((faq) => (
              <div
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
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
