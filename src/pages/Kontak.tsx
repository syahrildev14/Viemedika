// icons

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Kontak = () => {
  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="bg-gradient-to-b from-teal-100 to-white py-16 text-center rounded-3xl text-black">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg">
            Vimedika siap memberikan solusi terbaik sesuai kebutuhan Anda
          </p>
        </div>
      </section>

      {/* Form Kontak */}
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8 bg-white rounded-3xl shadow-lg -mt-4 relative z-10">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Hubungi Kami</h2>
          <p className="text-sm text-gray-600 mb-6">
            Silakan hubungi kami melalui informasi kontak berikut atau kirim
            pesan langsung melalui form.
          </p>
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold">Head Office</h4>
                <p>Jl. Raya Gudo, No. 101A, Gudo - Jombang</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>info@vimedika.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+62 8518-2267-460</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Follow us</h4>
            <div className="flex gap-4 text-primary text-lg">
              <FaFacebookF/>
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Kirim pesan kepada kami</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <input
              type="text"
              placeholder="Name"
              className="col-span-1 border px-4 py-2 rounded outline-none"
            />
            <input
              type="text"
              placeholder="Company"
              className="col-span-1 border px-4 py-2 rounded outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="col-span-1 border px-4 py-2 rounded outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="col-span-1 border px-4 py-2 rounded outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="col-span-2 border px-4 py-2 rounded outline-none"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="col-span-2 border px-4 py-2 rounded outline-none"
            />
            <button
              type="submit"
              className="col-span-2 bg-primary hover:bg-secondary text-white font-semibold py-2 rounded-md transition-all duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Kontak;
