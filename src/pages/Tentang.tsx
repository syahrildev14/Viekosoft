import Layout from "../layouts/MainLayout";
import Button from "../components/Button";
import { motion } from "framer-motion";

import heroImg from "../assets/images/heroTentang.svg";
import img1 from "../assets/images/img1.png";
import {
  Star,
  Rocket,
  Shield,
  Lightbulb,
  Target,
  Code,
  Database,
  Cloud,
  Lock,
  Cpu,
  Globe,
} from "lucide-react";
import foto1 from "../assets/images/foto-tim/foto1.png";

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

const team = [
  {
    id: 1,
    name: "Syahril Caesa Mahira",
    role: "Frontend Developer",
    school: "Universitas Teknologi",
    image: foto1,
    details: [
      "Expert React & Next.js",
      "UI/UX Enthusiast",
      "Contributor Open Source",
    ],
  },
  {
    id: 2,
    name: "Heru Oktafian",
    role: "Backend Developer",
    school: "Institut Informatika",
    image: foto1,
    details: [
      "Node.js & Express.js",
      "Database Optimization",
      "Cloud Deployment",
    ],
  },
  {
    id: 3,
    name: "Syahril Caesa Mahira",
    role: "UI/UX Designer",
    school: "Politeknik Kreatif",
    image: foto1,
    details: [
      "Figma & Design System",
      "Modern & Minimalist Design",
      "Branding Specialist",
    ],
  },
  {
    id: 4,
    name: "Syahril Caesa Mahira",
    role: "Project Manager",
    school: "Universitas Bisnis",
    image: foto1,
    details: ["Agile & Scrum", "Team Coordination", "Client Communication"],
  },
  {
    id: 5,
    name: "Heru Oktafian",
    role: "UI/UX Designer",
    school: "Politeknik Kreatif",
    image: foto1,
    details: [
      "Figma & Design System",
      "Modern & Minimalist Design",
      "Branding Specialist",
    ],
  },
  {
    id: 6,
    name: "Syahril Caesa Mahira",
    role: "Project Manager",
    school: "Universitas Bisnis",
    image: foto1,
    details: ["Agile & Scrum", "Team Coordination", "Client Communication"],
  },
];

const technologies = [
  { icon: <Code className="w-10 h-10 text-primary" />, title: "React.js" },
  { icon: <Database className="w-10 h-10 text-green-600" />, title: "MySQL" },
  {
    icon: <Cloud className="w-10 h-10 text-blue-500" />,
    title: "Cloud Hosting",
  },
  { icon: <Lock className="w-10 h-10 text-red-500" />, title: "Keamanan" },
  { icon: <Cpu className="w-10 h-10 text-yellow-500" />, title: "Node.js" },
  {
    icon: <Globe className="w-10 h-10 text-purple-600" />,
    title: "Tailwind CSS",
  },
  { icon: <Code className="w-10 h-10 text-primary" />, title: "React.js" },
  { icon: <Database className="w-10 h-10 text-green-600" />, title: "MySQL" },
  {
    icon: <Cloud className="w-10 h-10 text-blue-500" />,
    title: "Cloud Hosting",
  },
  { icon: <Lock className="w-10 h-10 text-red-500" />, title: "Keamanan" },
  { icon: <Cpu className="w-10 h-10 text-yellow-500" />, title: "Node.js" },
  {
    icon: <Globe className="w-10 h-10 text-purple-600" />,
    title: "Tailwind CSS",
  },
];

const Tentang = () => {
  return (
    <>
      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary leading-tight">
                Viekosoft
              </h1>
              <p className="text-lg text-gray-800 max-w-xl">
                Kami adalah tim profesional yang berfokus pada pengembangan
                aplikasi web dan mobile, dengan misi membantu bisnis Anda tumbuh
                melalui solusi digital inovatif dan terpercaya.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button
                  className="px-6 py-3 text-sm sm:text-base relative z-[50] hover:scale-105 transition-transform flex items-center gap-2"
                  asChild
                >
                  <a
                    href="https://wa.me/6285182267460?"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hubungi Kami
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center md:justify-end"
            >
              <img
                src={heroImg} // ganti dengan ilustrasi/asset kamu
                alt="Tentang Kami"
                className="w-full max-w-md"
              />
            </motion.div>
          </div>

          {/* Decorative Wave Bottom */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg
              className="w-full h-24 text-blue-600"
              style={{ height: "200px" }}
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0,192L48,202.7C96,213,192,235,288,240C384,245,480,235,576,208C672,181,768,139,864,138.7C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L0,320Z" />
            </svg>
          </div>
        </section>

        {/* Keunggulan */}
        <section>
          <div className="relative text-center overflow-hidden">
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
                  Keunggulan Kami
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

        {/* Visi Misi */}
        <section className="relative py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Visi & Misi Kami
              </span>
            </h2>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
              Komitmen kami dalam memberikan layanan pembuatan website dan
              aplikasi sistem yang inovatif, fungsional, dan bernilai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Visi */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 2, type: "spring" }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl"
            >
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-6">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Visi
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi mitra digital terpercaya yang membantu bisnis berkembang
                melalui solusi teknologi modern, inovatif, dan berkelanjutan.
              </p>
            </motion.div>

            {/* Misi */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 2, delay: 0.2, type: "spring" }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl"
            >
              <div className="bg-green-100 text-green-600 p-4 rounded-full mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Misi
              </h3>
              <ul className="text-gray-600 space-y-3 text-left w-full">
                {[
                  "Memberikan layanan berkualitas dengan harga kompetitif",
                  "Menghadirkan desain modern & user-friendly",
                  "Mengutamakan keamanan dan performa sistem",
                  "Mendukung transformasi digital jangka panjang",
                ].map((misi, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✔</span>
                    <span>{misi}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Meet Our Project Team
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Tim profesional yang berdedikasi dalam membangun solusi digital
              modern, inovatif, dan berkualitas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {team.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, type: "spring" }}
                className="flex bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition"
              >
                {/* Foto */}
                <div className="w-1/3 bg-gradient-to-b from-primary to-secondary flex items-center justify-center">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-md transition"
                  />
                </div>

                {/* Konten */}
                <div className="w-2/3 p-6 text-left">
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium">
                    {member.role}
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    {member.school}
                  </p>

                  <ul className="mt-4 text-sm text-gray-600 space-y-2">
                    {member.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✔</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Teknologi */}
        <section className="py-20 bg-gray-50" id="teknologi">
          <div className="max-w-6xl mx-auto px-6 space-y-10 text-center">
            {/* Judul */}
            <div className="flex flex-col items-center">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Teknologi Kami
                </span>
              </h1>
              <p className="w-24 h-1 bg-primary mt-2 rounded"></p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition"
                >
                  <div className="text-3xl">{tech.icon}</div>
                  <h3 className="mt-3 text-sm md:text-base font-semibold text-gray-700">
                    {tech.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Tentang;
