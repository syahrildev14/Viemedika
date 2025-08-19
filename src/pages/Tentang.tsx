// icons
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";
import { FaReact, FaNodeJs, FaLaravel, FaVuejs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiDart,
  SiMongodb,
  SiMysql,
  SiTypescript,
} from "react-icons/si";

// images
import heroImg from "../assets/images/office.png";
import foto1 from "../assets/images/foto1.png";

const icons = [
  {
    icon: <FaMapMarkerAlt size={32} />,
    label: "Jl. Raya Gudo, No. 101A, Gudo - Jombang",
  },
  { icon: <FaEnvelope size={32} />, label: "info@vimedika.com" },
  { icon: <FaPhone size={32} />, label: "(+62) 8518-2267-460" },
  { icon: <FaGlobe size={32} />, label: "vimedika.com" },
];

const teamMembers = [
  {
    name: "Dian Purnama Ashari",
    title: "Chief Executive Officer",
    quote:
      "Koding bisa dikerjakan siapa saja, tapi membangun tim yang solid dan berkualitas hanya bisa dilakukan oleh pemimpin sejati",
    image: foto1,
    highlight: true,
  },
  {
    name: "Heru Oktafian",
    title: "Chief Executive Officer",
    quote:
      "Koding bisa dikerjakan siapa saja, tapi membangun tim yang solid dan berkualitas hanya bisa dilakukan oleh pemimpin sejati",
    image: foto1,
    highlight: true,
  },
  {
    name: "Doni Mulya Syahputra",
    title: "Chief Technology Office",
    quote:
      "Inovasi bukan sekadar mencipta yang baru, tapi menyelesaikan masalah dengan cara yang luar biasa",
    image: foto1,
  },
  {
    name: "Romzi Fadac",
    title: "Chief Operating Officer",
    quote:
      "Pastikan mesin berjalan lancar dan pesan sampai ke hati. Kesuksesan bukan hanya soal efisiensi, tapi juga resonansi dengan pasar",
    image: foto1,
  },
  {
    name: "Syahril Caesa Mahira",
    title: "Chief Marketing Officer",
    quote:
      "Pastikan mesin berjalan lancar dan pesan sampai ke hati. Kesuksesan bukan hanya soal efisiensi, tapi juga resonansi dengan pasar",
    image: foto1,
  },
  {
    name: "Nurul Dwi Arifani",
    title: "Head Devlead",
    quote:
      "Inovasi bukan sekadar mencipta yang baru, tapi menyelesaikan masalah dengan cara yang luar biasa",
    image: foto1,
  },
];

const techStack = [
  { icon: <SiNextdotjs size={36} />, label: "Next.js" },
  { icon: <FaReact size={36} />, label: "React" },
  { icon: <FaLaravel size={36} />, label: "Laravel" },
  { icon: <FaNodeJs size={36} />, label: "Node.js" },
  { icon: <SiDart size={36} />, label: "Dart" },
  { icon: <FaVuejs size={36} />, label: "Vue.js" },
  { icon: <SiTailwindcss size={36} />, label: "Tailwind" },
  { icon: <SiMongodb size={36} />, label: "MongoDB" },
  { icon: <SiMysql size={36} />, label: "MySQL" },
  { icon: <SiTypescript size={36} />, label: "TypeScript" },
];

const Tentang = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <h2
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="text-3xl md:text-4xl font-bold text-black mb-2"
          >
            Tentang Kami
          </h2>
          <p
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="text-black max-w-xl mx-auto mb-8"
          >
            Kami memberikan layanan pembuatan sistem digital yang modern,
            inovatif, dan mudah digunakan sesuai dengan kebutuhan anda
          </p>

          {/* Hero Image */}
          <div className="relative rounded-[2rem] overflow-hidden">
            <img
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="800"
              src={heroImg}
              alt="Vimedika Resepsionis"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Info Icons */}
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800"
            className="relative -translate-y-5 md:-translate-y-14 mx-auto w-9/12 bg-white/50 backdrop-blur-lg rounded-2xl shadow-md px-4 py-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
              {icons.map((item, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-primary rounded-xl px-2 py-6 cursor-default h-full"
                >
                  <div className="h-8 flex items-center justify-center">
                    <div className="text-black group-hover:hidden">
                      {item.icon}
                    </div>
                    <div className="text-white p-3 font-semibold text-xs md:text-sm hidden group-hover:block transition-all duration-300">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Foto Tim */}
      <section className="py-16 px-4 bg-white">
        {/* Judul */}
        <h2
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="800"
          className="text-md md:text-xl font-semibold text-center mb-10 border-b-2 w-fit mx-auto border-primary px-4 pb-2"
        >
          Tim Kami
        </h2>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Card CEO */}
          {teamMembers
            .filter((m) => m.highlight)
            .map((member, index) => (
              <div
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
                key={index}
                className="flex flex-col md:flex-row items-center justify-between bg-gray-100 rounded-2xl p-6 md:p-10 shadow-md"
              >
                <div className="md:max-w-2xl text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base mb-4">
                    {member.title}
                  </p>
                  <blockquote className="text-gray-700 text-base md:text-lg italic">
                    “{member.quote}”
                  </blockquote>
                </div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-auto mt-6 md:mt-0 md:w-48 object-contain"
                />
              </div>
            ))}

          {/* Grid untuk anggota tim lainnya */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers
              .filter((m) => !m.highlight)
              .map((member, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                  key={index}
                  className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-primary/10 rounded-2xl p-6 shadow-sm"
                >
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-500 mb-2">{member.title}</p>
                    <p className="text-sm text-gray-700 italic">
                      "{member.quote}"
                    </p>
                  </div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-auto object-contain"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Judul */}
      <h2
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
        className="text-md md:text-xl mt-8 md:mt-28 font-semibold text-center mb-12 border-b-2 w-fit mx-auto border-primary px-4 pb-2"
      >
        Teknologi Kami
      </h2>

      {/* Teknologi Kami */}
      <section className="py-16 px-4 bg-white -mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
            {techStack.map((tech, index) => (
              <div
                data-aos="flip-left"
                key={index}
                className="bg-gray-100 p-6 rounded-2xl flex flex-col items-center justify-center shadow-sm w-full text-center"
              >
                <div className="text-gray-700 mb-2">{tech.icon}</div>
                <p className="text-sm font-medium text-gray-700">
                  {tech.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tentang;
