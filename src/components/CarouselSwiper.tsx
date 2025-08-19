import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';


<Swiper
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
    <div className="bg-green-100 rounded-xl p-6 w-full relative h-72">
      <img
        src="https://via.placeholder.com/150x220"
        alt="Syahril Caesa Mahira"
        className="absolute -top-12 right-4 w-28 h-36 object-cover rounded-md"
      />
      <div className="mt-28">
        <h3 className="text-lg font-semibold">Syahril Caesa Mahira</h3>
        <p className="text-gray-500">Chief Marketing Officer</p>
        <p className="mt-2 text-sm">
          “Peluang besar sering tersembunyi di tempat yang belum dijamah. Tugasmu bukan
          menunggu datangnya kesempatan, tapi menciptakannya”
        </p>
      </div>
    </div>
  </SwiperSlide>

  {/* Kartu Slide 2 */}
  <SwiperSlide>
    <div className="bg-green-100 rounded-xl p-6 w-full relative h-72">
      <img
        src="https://via.placeholder.com/150x220"
        alt="Syahril Caesa Mahira"
        className="absolute -top-12 right-4 w-28 h-36 object-cover rounded-md"
      />
      <div className="mt-28">
        <h3 className="text-lg font-semibold">Syahril Caesa Mahira</h3>
        <p className="text-gray-500">Chief Marketing Officer</p>
        <p className="mt-2 text-sm">
          “Peluang besar sering tersembunyi di tempat yang belum dijamah. Tugasmu bukan
          menunggu datangnya kesempatan, tapi menciptakannya”
        </p>
      </div>
    </div>
  </SwiperSlide>

  {/* Tambahkan <SwiperSlide> lainnya sesuai kebutuhan */}
</Swiper>
