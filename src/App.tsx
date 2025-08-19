import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// pages
import HomePage from "./pages/Home";
import LayananPage from "./pages/Layanan";
import TentangPage from "./pages/Tentang";
import FaqPage from "./pages/Faq";
import TestimoniPage from "./pages/Testimoni";
import KontakPage from "./pages/Kontak";

// Komponen untuk auto-scroll ke atas saat berpindah halaman
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/layanan" element={<LayananPage />} />
          <Route path="/tentang" element={<TentangPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/testimoni" element={<TestimoniPage />} />
          <Route path="/kontak" element={<KontakPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
