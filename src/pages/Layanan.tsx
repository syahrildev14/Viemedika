import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SatuSehat } from "../assets/dummy.js";
import { FaCheckCircle } from "react-icons/fa"; //icons

// images
import heroImg from "../assets/images/imgHeroLayanan.png";
import satuSehatImage from "../assets/images/imgHero2.png";
import img1 from "../assets/images/ipad.png";
import img2 from "../assets/images/macbook.png";
import img3 from "../assets/images/mobile.png";

const Layanan: React.FC = () => {
  const [mainImage, setMainImage] = useState(img1);

  const thumbnails = [img1, img2, img3];

  return (
    <>
      {/* Layanan Kami Section */}
      <section className="text-center py-16 px-4 rounded-3xl bg-gradient-to-b from-teal-100 to-white">
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
          className="font-bold text-3xl md:text-4xl text-black"
        >
          Layanan Kami
        </h1>
        <p
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
          className="mt-4 mb-10 text-black max-w-2xl mx-auto"
        >
          Kami memberikan layanan pembuatan sistem digital yang modern,
          inovatif, dan mudah digunakan sesuai dengan kebutuhan anda
        </p>
        <div className="flex justify-center">
          <img
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            src={heroImg}
            alt="Layanan Vimedika"
            className="w-full max-w-4xl h-auto rounded-xl"
          />
        </div>
      </section>

      {/* Marque berjalan */}
      <section data-aos="fade-left" className="mt-">
        <div className="relative overflow-hidden bg-primary/20 py-4">
          <div className="marquee-track flex whitespace-nowrap text-5xl font-bold text-black/20 gap-8">
            <div className="flex shrink-0 animate-marquee gap-8">
              {Array(10)
                .fill("Vimedika •")
                .map((item, idx) => (
                  <span key={`first-${idx}`}>{item}</span>
                ))}
            </div>
            <div className="flex shrink-0 animate-marquee gap-8">
              {Array(10)
                .fill("Vimedika •")
                .map((item, idx) => (
                  <span key={`second-${idx}`}>{item}</span>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aplikasi Section */}
      <section className="py-20 px-4 bg-white lg:mt-32">
        {/* Judul */}
        <h2
          data-aos="fade-up"
          className="text-md md:text-xl font-semibold text-center mb-12 border-b-2 w-fit mx-auto border-primary px-4 pb-2"
        >
          Aplikasi
        </h2>
        <div data-aos="fade-up" className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-2">
            <span className="mr-4">Web</span> |{" "}
            <span className="mx-4">Mobile</span> |{" "}
            <span className="ml-4">Desktop</span>
          </h2>
        </div>
        <div
          data-aos="fade-right"
          className="flex mt-24 flex-col lg:flex-row gap-12 max-w-6xl mx-auto"
        >
          {/* Left Image Section */}
          <div className="flex-1">
            <div className="relative w-full h-auto">
              <AnimatePresence mode="wait">
                <motion.img
                  key={mainImage}
                  src={mainImage}
                  alt="Mockup Aplikasi"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl shadow-xl w-full"
                />
              </AnimatePresence>
            </div>

            <div className="flex gap-4 justify-center mt-6">
              {thumbnails.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  onClick={() => setMainImage(thumb)}
                  alt={`thumb-${index}`}
                  className={`w-16 h-16 rounded-lg shadow-md object-cover cursor-pointer transition-transform duration-200 hover:scale-105 ${
                    mainImage === thumb ? "ring-2 ring-primary" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Feature List */}
          <div data-aos="fade-left" className="flex-1">
            <h3
              data-aos="fade-left"
              className="text-xl font-semibold mb-4 -ml-5"
            >
              Fitur Umum
            </h3>
            <ul
              data-aos="fade-left"
              className="space-y-2 text-sm md:text-base text-black"
            >
              <li className="list-disc">
                <p>
                  Login pengguna berdasarkan peran (pasien, dokter, apotek,
                  admin)
                </p>
              </li>
              <li className="list-disc">
                <p>Akses data RME & histori medis</p>
              </li>
              <li className="list-disc">
                <p>Jadwal praktik dokter & booking online</p>
              </li>
              <li className="list-disc">
                <p>Antrean digital & notifikasi antrian</p>
              </li>
              <li className="list-disc">
                <p>Pengingat minum obat</p>
              </li>
              <li className="list-disc">
                <p>
                  Tracking pengiriman obat (untuk apotek dengan layanan antar)
                </p>
              </li>
              <li className="list-disc">
                <p>Integrasi notifikasi push</p>
              </li>
              <li className="list-disc">
                <p>Role-based access control (multi-level user)</p>
              </li>
              <li className="list-disc">
                <p>Manajemen apotek: stok, resep, pengadaan</p>
              </li>
              <li className="list-disc">
                <p>Bisa dikustom untuk multi-terminal POS apotek</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Satu Sehat Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 md:px-16 bg-white lg:mt-10"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Terintegrasi Dengan{" "}
              <span className="text-primary">Satu Sehat</span>
            </h2>

            <ul className="space-y-6">
              {SatuSehat.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <FaCheckCircle className="text-primary w-5 h-5 mt-[0.25rem]" />
                  <div>
                    <h4 className="font-semibold text-black text-base md:text-lg mb-1">
                      {point.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 text-justify">
                      {point.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden md:block flex justify-center md:justify-end"
          >
            <img
              src={satuSehatImage}
              alt="Dashboard Integrasi Satu Sehat"
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Layanan;
