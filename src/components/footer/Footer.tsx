import LogoFooter from "../../assets/images/logoFooter.png";
import { Link } from "react-router-dom";

import {
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white rounded-3xl px-6 py-10 md:py-12 mt-48">
      <section className="mb-5 py-12 px-4 md:px-16 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* FORM KONTAK */}
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full border-b border-gray-400 focus:outline-none placeholder-gray-400 py-2 bg-transparent"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Alamat"
                className="w-full border-b border-gray-400 focus:outline-none placeholder-gray-400 py-2 bg-transparent"
              />
            </div>
            <div>
              <textarea
                placeholder="Pesan"
                rows={4}
                className="w-full border-b border-gray-400 focus:outline-none placeholder-gray-400 py-2 bg-transparent resize-none"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full shadow-md transition"
              >
                Submit
              </button>
            </div>
          </form>

          {/* KOTAK KONTAK KANAN */}
          <div className="bg-primary rounded-2xl p-6 text-black shadow-lg relative">
            <div className="bg-black text-white rounded-xl px-4 py-2 text-center font-semibold text-lg mb-4">
              Kontak Kami
            </div>
            <ul className="space-y-4 mt-4 text-sm">
              <li className="flex items-center gap-3">
                <FaEnvelope /> Email
              </li>
              <li className="flex items-center gap-3">
                <FaInstagram /> Instagram
              </li>
              <li className="flex items-center gap-3">
                <FaTwitter /> Twitter
              </li>
              <li className="flex items-center gap-3">
                <FaFacebookF /> Facebook
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp /> WhatsApp
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fooer Bawah */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm md:text-base">
        {/* Logo & Deskripsi */}
        <div>
          <img src={LogoFooter} alt="logo-footer" className="w-36 mb-4" />
          <p className="text-white text-md">PT Visi Media Digital Komputama</p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-semibold text-yellow-500 mb-2">Menu</h3>
          <ul className="flex flex-col gap-2 text-gray-300 ">
            <Link to={"/"}>Home</Link>
            <Link to={"/layanan"}>Layanan</Link>
            <Link to={"/tentang"}>Tentang Kami</Link>
            <Link to={"/faq"}>FaQ</Link>
            <Link to={"/testimoni"}>Testimoni</Link>
            <Link to={"/kontak"}>Kontak</Link>
          </ul>
        </div>

        {/* Layanan */}
        <div>
          <h3 className="font-semibold text-yellow-500 mb-2">Layanan</h3>
          <ul className="space-y-1 text-gray-300">
            <li>ViApotek</li>
            <li>ViRME</li>
            <li>ViHealth</li>
            <li>ViHospital</li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="font-semibold text-yellow-500 mb-2">Alamat</h3>
          <p>Jl. Raya Gudo, No. 101A, Gudo - Jombang</p>
        </div>
      </div>
    </footer>
  );
}
