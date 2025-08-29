import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Routing
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Pages
import HomePage from "./pages/Home";
import LayananPage from "./pages/Layanan";
import TentangPage from "./pages/Tentang";
import FaqPage from "./pages/Faq";
import TestimoniPage from "./pages/Testimoni";
import ScrollToTop from "./components/ScrollOnTop";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi (ms)
      once: true, // animasi jalan sekali saja
    });
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Pages Routing */}
          <Route path="/" element={<HomePage />} />
          <Route path="/layanan" element={<LayananPage />} />
          <Route path="/tentang" element={<TentangPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/testimoni" element={<TestimoniPage />} />
          {/* Pages Routing */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
