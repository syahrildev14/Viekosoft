import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface CarouselProps {
  items: { id: number; image: string; text: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="rounded-2xl shadow-lg"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center bg-white p-8 sm:p-10 lg:p-12 rounded-2xl shadow-lg text-center space-y-6">
              {/* Avatar */}
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-cover rounded-full border-4 border-gray-100 shadow-md"
              />

              {/* Nama / Title */}
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                {item.title}
              </h2>

              {/* Testimoni */}
              <p className="text-gray-600 leading-relaxed italic max-w-md">
                “{item.text}”
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
