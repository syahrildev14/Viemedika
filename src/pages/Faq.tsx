import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // ✅ import framer-motion
import { FaChevronDown } from "react-icons/fa";

const faqList = [
  {
    question: "Apa itu Vimedika?",
    answer:
      "Vimedika adalah penyedia solusi digital untuk kebutuhan klinik, rumah sakit, dan layanan kesehatan lainnya.",
  },
  {
    question: "Apakah bisa request fitur khusus?",
    answer:
      "Tentu, kami menyediakan layanan kustomisasi sesuai dengan kebutuhan Anda.",
  },
  {
    question: "Apakah sistem bisa digunakan offline?",
    answer:
      "Kami menyediakan solusi berbasis cloud, namun tersedia juga opsi hybrid jika dibutuhkan.",
  },
  {
    question: "Berapa lama proses implementasi?",
    answer:
      "Tergantung kompleksitas sistem, rata-rata 2–4 minggu implementasi penuh.",
  },
  {
    question: "Apakah tersedia layanan training?",
    answer: "Ya, kami menyediakan training pengguna baik onsite maupun online.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer:
      "Pembayaran fleksibel, bisa sistem berlangganan bulanan atau beli putus.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="text-center mt-4 md:mt-12">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          className="font-bold text-2xl md:text-5xl"
        >
          Halo! <br />
          Ada yang bisa kami bantu?
        </h1>
      </div>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-black">
          <h2
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="text-lg md:text-xl font-bold mb-8 text-left"
          >
            Pertanyaan yang sering diajukan
          </h2>

          <div className="space-y-4">
            {faqList.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  key={index}
                  className="bg-white/70 backdrop-blur-lg rounded-xl shadow p-4"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center text-left font-medium"
                  >
                    <span>{item.question}</span>
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        isOpen ? "-rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-sm text-gray-700">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" className="mt-12 text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Ingin bertanya lebih lanjut?
            </h3>
            <Link to="">
              <button className="bg-primary hover:bg-secondary duration-300 text-white py-4 px-8 rounded-full shadow-md font-semibold">
                Hubungi Kami
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
