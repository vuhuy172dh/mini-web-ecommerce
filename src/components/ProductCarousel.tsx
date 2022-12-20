import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper style
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

function ProductCarousel({ images }: { images: string[] }) {
  return (
    <div className="w-full">
      <Swiper pagination={true} modules={[Pagination]} className="w-full">
        {images.map((img: string, index: number) => (
          <SwiperSlide key={index} className="w-full px-2">
            <div className="w-full pt-[125%] relative rounded-xl overflow-hidden shadow-lg shadow-gray-700/40">
              <img
                src={img}
                alt={index.toString()}
                className="w-full h-full absolute top-0 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductCarousel;
