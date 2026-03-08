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
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function TouristSwiper() {
  const localeActive = useLocale();
  const PhotogalleriesData = getTouristGuideData(localeActive);

  return (
    <div className="tourist-guide max-w-full relative">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{ nextEl: ".tourist-next", prevEl: ".tourist-prev" }}
        autoplay={{ delay: 10000, pauseOnMouseEnter: true, disableOnInteraction: false }}
        loop
        speed={500}
        slidesPerView={4}
        spaceBetween={12}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
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

      <button className="tourist-prev hidden md:flex absolute left-2 top-1/2 z-20 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition">
        <IoIosArrowBack className="text-2xl" />
      </button>
      <button className="tourist-next hidden md:flex absolute right-2 top-1/2 z-20 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition">
        <IoIosArrowForward className="text-2xl" />
      </button>
    </div>
  );
}

export default TouristSwiper;
