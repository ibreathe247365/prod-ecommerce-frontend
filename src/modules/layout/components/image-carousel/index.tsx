'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const images = [
  'https://baby-commerce-space.nyc3.digitaloceanspaces.com/istockphoto-579766570-612x612-1740836895755.jpg',
  'https://baby-commerce-space.nyc3.digitaloceanspaces.com/istockphoto-579766570-612x612-1740836895755.jpg',
  'https://baby-commerce-space.nyc3.digitaloceanspaces.com/istockphoto-579766570-612x612-1740836895755.jpg',
];

export default function ImageCarousel() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-2xl shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
