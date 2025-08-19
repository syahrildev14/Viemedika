import { testimonials } from "../assets/dummy.js";

const Testimoni = () => {
  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-b from-teal-100 to-white rounded-3xl">
        {/* Judul */}
        <h2 className="text-md md:text-xl font-semibold text-center mb-12 border-b-2 w-fit mx-auto border-primary px-4 pb-2">
          Klien Kami
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                data-aos="flip-left"
                key={index}
                className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-md flex flex-col justify-between"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.position}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 italic mb-4">{`"${item.message}"`}</p>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimoni;
