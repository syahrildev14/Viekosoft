import Layout from "../layouts/MainLayout";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { HelpCircle, ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Bagaimana cara mendaftar akun?",
    answer:
      "Anda bisa mendaftar dengan klik tombol 'Daftar' di kanan atas, lalu isi data diri Anda dengan benar.",
  },
  {
    question: "Apakah layanan ini gratis?",
    answer:
      "Sebagian fitur gratis, namun ada paket premium dengan fitur tambahan yang bisa Anda pilih.",
  },
  {
    question: "Bagaimana cara menghubungi support?",
    answer:
      "Anda dapat menghubungi tim support melalui email atau live chat yang tersedia di dashboard.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Layout>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary  to-secondary text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 800 800"
            >
              <circle cx="400" cy="400" r="400" fill="url(#grad)" />
              <defs>
                <radialGradient id="grad" r="100%" cx="50%" cy="50%">
                  <stop stopColor="#3b82f6" offset="0%" />
                  <stop stopColor="#1e3a8a" offset="100%" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-6"
            >
              <HelpCircle className="w-16 h-16 text-yellow-400" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold leading-tight"
            >
              Pertanyaan yang Sering Diajukan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 text-lg max-w-2xl mx-auto text-blue-100"
            >
              Temukan jawaban atas pertanyaan yang sering diajukan seputar
              layanan kami. Jika tidak menemukan jawaban, jangan ragu untuk
              menghubungi tim support.
            </motion.p>
          </div>
        </section>

        {/* Konten */}
        <section id="faq-list" className="py-16 px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-10">
              Pertanyaan Umum
            </h2>

            <div className="space-y-4">
              {faqData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-gray-200 bg-white rounded-2xl shadow-sm"
                >
                  <button
                    className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800 focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    {item.question}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-4 text-gray-600">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </Layout>
    </>
  );
};

export default Faq;
