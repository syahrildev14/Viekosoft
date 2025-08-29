import Layout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import testi1 from "../assets/images/testi1.jpeg";
import { useState } from "react";
import wavebg from "../assets/images/wave.svg";

const people = [
  {
    name: "Dewi",
    text: "Pelayanan sangat cepat! 🚀",
    tag: "#support",
    img: testi1,
  },
  {
    name: "Andi",
    text: "Aplikasi mudah digunakan 👍",
    tag: "#user-friendly",
    img: testi1,
  },
  {
    name: "Budi",
    text: "Fitur lengkap dan berguna 🎯",
    tag: "#features",
    img: testi1,
  },
  {
    name: "Sinta",
    text: "Timnya responsif sekali 💬",
    tag: "#team",
    img: testi1,
  },
  {
    name: "Dewi",
    text: "Pelayanan sangat cepat! 🚀",
    tag: "#support",
    img: testi1,
  },
  {
    name: "Andi",
    text: "Aplikasi mudah digunakan 👍",
    tag: "#user-friendly",
    img: testi1,
  },
  {
    name: "Budi",
    text: "Fitur lengkap dan berguna 🎯",
    tag: "#features",
    img: testi1,
  },
  {
    name: "Sinta",
    text: "Timnya responsif sekali 💬",
    tag: "#team",
    img: testi1,
  },
  {
    name: "Dewi",
    text: "Pelayanan sangat cepat! 🚀",
    tag: "#support",
    img: testi1,
  },
  {
    name: "Andi",
    text: "Aplikasi mudah digunakan 👍",
    tag: "#user-friendly",
    img: testi1,
  },
  {
    name: "Budi",
    text: "Fitur lengkap dan berguna 🎯",
    tag: "#features",
    img: testi1,
  },
  {
    name: "Sinta",
    text: "Timnya responsif sekali 💬",
    tag: "#team",
    img: testi1,
  },
];

const Testimoni = () => {
  const [showAll, setShowAll] = useState(false);

  const visiblePeople = showAll ? people : people.slice(0, 4);

  return (
    <>
      <Layout>
        <section className="bg-white text-center py-20 relative overflow-hidden">
          {/* Background */}
          <img
            className="absolute transform scale-x-[-1] inset-0 w-full h-full object-cover"
            src={wavebg}
            alt="Background"
          />
          {/* Headline */}
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-white">
            <h1 className="text-4xl sm:text-5xl font-bold ">
              Apa Kata Pengguna Kami
            </h1>
            <p className="mt-4 text-lg ">
              Lihat bagaimana layanan kami membantu banyak orang untuk lebih
              produktif dan efisien.
            </p>
          </div>

          {/* Floating Cards */}
          <div className="relative mt-16 max-w-5xl mx-auto px-6">
            <svg
              className="absolute inset-0 w-full h-full -z-10 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                d="M 0 150 Q 250 50, 500 150 T 1000 150"
                stroke="#d1d5db"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {visiblePeople.map((person, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-white shadow-md rounded-2xl p-4 border border-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-800">{person.name}</p>
                      <span className="text-sm text-purple-600">
                        {person.tag}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-600 text-sm">{person.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Button Toggle */}
            <div className="mt-10 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-purple-500 transition"
              >
                {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua Testimoni"}
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Testimoni;
