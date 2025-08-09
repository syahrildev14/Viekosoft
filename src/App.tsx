import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Routing

// Pages
import HomePage from "./pages/Home";
import LayananPage from "./pages/Layanan";
import TentangPage from "./pages/Tentang";
import FaqPage from "./pages/Faq";
import TestimoniPage from "./pages/Testimoni";

const App = () => {
  return (
    <>
      <Router>
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
