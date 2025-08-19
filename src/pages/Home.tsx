import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa"; //icons
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { SatuSehat, Reasons, testimonials } from "../assets/dummy.js";
import { SeeMoreButton } from "../components/button/SeeMoreButton";

// icons
import apotek from "../assets/icons/apotek.png";
import rme from "../assets/icons/rme.png";
import hospital from "../assets/icons/hospital.png";
import klinik from "../assets/icons/klinik.png";

// images
import heroImage from "../assets/images/Hero.png";
import satuSehatImage from "../assets/images/imgHero2.png";
import img1 from "../assets/images/imgHero3.png";
import img2 from "../assets/images/imgHero1.png";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "ViApotek",
    description: "Perangkat Lunak Kustom Berbasis Web, Mobile & Desktop",
    icon: apotek,
  },
  {
    id: 2,
    title: "ViRME",
    description: "Pembuatan Web Profil Perusahaan & Landing Page",
    icon: rme,
  },
  {
    id: 3,
    title: "ViHealth",
    description: "Desain antarmuka pengguna dan pengalaman pengguna modern",
    icon: klinik,
  },
  {
    id: 4,
    title: "ViHospital",
    description: "Desain Logo & Pembuatan Paket Ikon",
    icon: hospital,
  },
];

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.div className="bg-gradient-to-r from-green-100 via-purple-100 to-orange-100 py-12 px-4 sm:px-8 md:px-16 lg:px-24 rounded-3xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight md:leading-[1.2]">
              Smart Web &<br />
              Medical App Solutions
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-lg mb-6 max-w-xl mx-auto md:mx-0">
              Kami adalah mitra terpercaya dalam membangun sistem aplikasi
              berbasis Web, Desktop, dan Android — cepat, andal, dan sesuai
              kebutuhan bisnis Anda.
            </p>
            <div className="flex justify-center md:justify-start">
              <a href="#service">
                <button className="bg-primary hover:bg-secondary duration-200 group text-white font-semibold px-6 py-2 rounded-full shadow-md flex items-center gap-3">
                  More
                  <span className="bg-white/20 p-2 rounded-full transition-transform duration-300 transform -rotate-45 group-hover:rotate-90 translate-x-4">
                    <FaArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </a>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={heroImage}
              alt="Hero Illustration"
              className="w-64 sm:w-72 md:w-80 lg:w-[36rem]"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <section id="service" className="py-16 px-4 md:px-16 bg-white mt-10">
        <div className="max-w-7xl mx-auto">
          {/* Judul */}
          <h2 className="text-md md:text-xl font-semibold text-center mb-12 border-b-2 w-fit mx-auto border-primary px-4 pb-2">
            Produk & Layanan
          </h2>

          {/* Grid Layanan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-28">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-6 text-center"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12 mx-auto mb-4"
                />
                <h3 className="font-bold text-yellow-500 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Link to="/layanan">
          <div className="mt-10 flex justify-end items-center">
            <SeeMoreButton />
          </div>
        </Link>
      </section>

      {/* Title */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-10 text-[2rem] font-bold"
        >
          {/* Judul */}
          <h2 className="text-md md:text-xl font-semibold text-center mb-12 border-b-2 w-fit mx-auto border-primary px-4 pb-2">
            Kenapa harus kami?
          </h2>
        </motion.div>

        {/* Satu Sehat Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 px-6 md:px-16 bg-white mt-10"
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

        {/* Tim Profesional Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-primary/10 py-16 px-4 sm:px-8 lg:px-24 mt-10 rounded-3xl"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-2/3 space-y-6"
            >
              {Reasons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-primary text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm md:text-base">
                      {item.number}
                    </div>
                    {index < Reasons.length - 1 && (
                      <div className="w-px bg-primary flex-1 mt-1" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-base md:text-lg text-black">
                      {item.title}
                    </h4>
                    <p className="text-sm md:text-base text-black mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden md:block w-full md:w-1/3 flex justify-center"
            >
              <img
                src={img2}
                alt="Why Choose Us"
                className="max-w-xs md:max-w-sm lg:max-w-md"
              />
            </motion.div>
          </div>
        </motion.section>
      </section>
      {/* Teks Mobile Section */}
      <section>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="py-16 px-4 sm:px-6 md:px-16 bg-white mt-10"
        >
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="text-center md:text-left w-full md:w-1/2"
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-black mb-6">
                Responsive & Expert <br />
                <span className="text-primary"> Mobile Design</span>
              </h2>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <img
                src={img1}
                alt="Hand holding phone"
                className="max-w-full h-auto"
              />
            </motion.div>
          </div>

          {/* Button */}
          <div className="mt-8 flex justify-center md:justify-start lg:-translate-y-64">
            <button className="py-4 px-6 sm:py-5 sm:px-8 bg-primary hover:bg-secondary duration-300 shadow-lg hover:shadow-none rounded-full font-semibold text-white text-base sm:text-md md:text-lg">
              Gabung Sekarang
            </button>
          </div>
        </motion.section>
      </section>

      {/* Tentang Kami */}
      <section className="">
        <div className="py-10 px-4 sm:px-8 md:px-28">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-8 border-b-2 w-fit mx-auto border-primary px-4 pb-2">
            Tentang Kami
          </h2>
          <p className="text-center px-2 sm:px-8 md:px-24 text-sm sm:text-base leading-relaxed">
            Dengan semangat “Melayani dengan Teknologi, Tumbuh dengan Visi,”
            kami terus berinovasi untuk membantu fasilitas layanan kesehatan
            meningkatkan kualitas pelayanan, efisiensi operasional, dan kepuasan
            pasien.
          </p>
        </div>

        {/* Visi Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16 py-8">
          {/* Visi */}
          <div className="bg-primary/10 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Visi</h3>
            <p>
              Dengan semangat “Melayani dengan Teknologi, Tumbuh dengan Visi,”
              kami terus berinovasi untuk membantu fasilitas layanan kesehatan
              meningkatkan kualitas pelayanan, efisiensi operasional, dan
              kepuasan pasien.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-primary/10 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Misi</h3>
            <p>
              Dengan semangat “Melayani dengan Teknologi, Tumbuh dengan Visi,”
              kami terus berinovasi untuk membantu fasilitas layanan kesehatan
              meningkatkan kualitas pelayanan, efisiensi operasional, dan
              kepuasan pasien.
            </p>
          </div>
        </div>

        {/* Swiper Slide Tim */}
        <Swiper
          className="rounded-xl mt-36"
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {/* Kartu Slide 1 */}
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-xl p-6 w-full relative h-72">
              <img
                src="https://via.placeholder.com/150x220"
                alt="Syahril Caesa Mahira"
                className="absolute -top-12 right-4 w-28 h-36 object-cover rounded-md"
              />
              <div className="mt-28">
                <h3 className="text-lg font-semibold">Syahril Caesa Mahira</h3>
                <p className="text-gray-500">Chief Marketing Officer</p>
                <p className="mt-2 text-sm">
                  “Peluang besar sering tersembunyi di tempat yang belum
                  dijamah. Tugasmu bukan menunggu datangnya kesempatan, tapi
                  menciptakannya”
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Kartu Slide 2 */}
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-xl p-6 w-full relative h-72">
              <img
                src="https://via.placeholder.com/150x220"
                alt="Syahril Caesa Mahira"
                className="absolute -top-12 right-4 w-28 h-36 object-cover rounded-md"
              />
              <div className="mt-28">
                <h3 className="text-lg font-semibold">Syahril Caesa Mahira</h3>
                <p className="text-gray-500">Chief Marketing Officer</p>
                <p className="mt-2 text-sm">
                  “Peluang besar sering tersembunyi di tempat yang belum
                  dijamah. Tugasmu bukan menunggu datangnya kesempatan, tapi
                  menciptakannya”
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Kartu Slide 3 */}
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-xl p-6 w-full relative h-72">
              <img
                src="https://via.placeholder.com/150x220"
                alt="Syahril Caesa Mahira"
                className="absolute -top-12 right-4 w-28 h-36 object-cover rounded-md"
              />
              <div className="mt-28">
                <h3 className="text-lg font-semibold">Syahril Caesa Mahira</h3>
                <p className="text-gray-500">Chief Marketing Officer</p>
                <p className="mt-2 text-sm">
                  “Peluang besar sering tersembunyi di tempat yang belum
                  dijamah. Tugasmu bukan menunggu datangnya kesempatan, tapi
                  menciptakannya”
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Kartu Slide 1 */}
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-xl p-6 w-full relative h-72">
              <img
                src="https://via.placeholder.com/150x220"
                alt="Syahril Caesa Mahira"
                className="absolute -top-12 right-4 w-28 h-36 object-cover rounded-md"
              />
              <div className="mt-28">
                <h3 className="text-lg font-semibold">Syahril Caesa Mahira</h3>
                <p className="text-gray-500">Chief Marketing Officer</p>
                <p className="mt-2 text-sm">
                  “Peluang besar sering tersembunyi di tempat yang belum
                  dijamah. Tugasmu bukan menunggu datangnya kesempatan, tapi
                  menciptakannya”
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Kartu Slide 2 */}
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-xl p-6 w-full relative h-72">
              <img
                src="https://via.placeholder.com/150x220"
                alt="Syahril Caesa Mahira"
                className="absolute -top-12 right-4 w-28 h-36 object-cover rounded-md"
              />
              <div className="mt-28">
                <h3 className="text-lg font-semibold">Syahril Caesa Mahira</h3>
                <p className="text-gray-500">Chief Marketing Officer</p>
                <p className="mt-2 text-sm">
                  “Peluang besar sering tersembunyi di tempat yang belum
                  dijamah. Tugasmu bukan menunggu datangnya kesempatan, tapi
                  menciptakannya”
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Kartu Slide 3 */}
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-xl p-6 w-full relative h-72">
              <img
                src="https://via.placeholder.com/150x220"
                alt="Syahril Caesa Mahira"
                className="absolute -top-12 right-4 w-28 h-36 object-cover rounded-md"
              />
              <div className="mt-28">
                <h3 className="text-lg font-semibold">Syahril Caesa Mahira</h3>
                <p className="text-gray-500">Chief Marketing Officer</p>
                <p className="mt-2 text-sm">
                  “Peluang besar sering tersembunyi di tempat yang belum
                  dijamah. Tugasmu bukan menunggu datangnya kesempatan, tapi
                  menciptakannya”
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <Link to="/tentang">
          <div className="mt-10 flex justify-end items-center">
            <SeeMoreButton />
          </div>
        </Link>
      </section>

      {/* Testimoni */}
      <section className="mt-16 lg:mt-48">
        <div>
          <h2 className="text-md md:text-xl font-semibold text-center mb-12 border-b-2 w-fit mx-auto border-primary px-4 pb-2">
            Testimoni
          </h2>
        </div>
        {/* Carousel */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-10">
          <Swiper
            className="rounded-xl"
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              waitForTransition: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-md mx-auto w-full max-w-xs sm:max-w-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {item.position}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 mb-4">
                    "{item.message}"
                  </p>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Link to="/testimoni">
          <div className="mt-10 flex justify-end items-center">
            <SeeMoreButton />
          </div>
        </Link>
      </section>
    </>
  );
};

export default Home;
