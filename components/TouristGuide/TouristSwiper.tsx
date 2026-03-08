"use client";
import { getTouristGuideData } from "@/lib/TouristImageData";
import Image from "next/image";
import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function TouristSwiper() {
  const localeActive = useLocale();
  const PhotogalleriesData = getTouristGuideData(localeActive);

  return (
    <div className="tourist-guide max-w-full">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        autoplay={{ delay: 10000, pauseOnMouseEnter: true }}
        loop
        speed={500}
        slidesPerView={4}
        spaceBetween={12}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1, navigation: false },
          640: { slidesPerView: 2, navigation: false },
          1024: { slidesPerView: 4, navigation: true },
        }}
      >
        {PhotogalleriesData.data.slice(0, 6).map((image, index) => (
          <SwiperSlide key={index}>
            <div className="xl:h-80 h-96 relative">
              <Link href="/environs" className="flex items-center justify-center relative h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  placeholder="blur"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  className="object-cover h-full w-full rounded-md"
                />
              </Link>
              <div className="absolute text-left p-4 bottom-0 z-10 flex flex-col gap-2">
                <h2 className="text-white font-bold text-xl drop-shadow-xl" style={{ textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em #B29600" }}>
                  {image.image_title}
                </h2>
                <p className="text-white drop-shadow-xl" style={{ textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em #B29600" }}>
                  {image.image_des}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TouristSwiper;
