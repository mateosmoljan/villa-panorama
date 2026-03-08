"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import FullscreenButton from "../About/FullscreenButton";
import { RxCross2 } from "react-icons/rx";
import { useGlobalContext } from "./Photogalleries";
import { usePropertyGalleryContext } from "./ShowcaseGallery";
import { useShowcaseGallery2Context } from "./ShowcaseGallery2";
import { useGalleryContext } from "../PropertyGallery/PropertyGallery";
import { useFourGalleryContext } from "./FourGallery";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

type Props = {
  initIndex: number;
  library: { src: StaticImageData; alt: string }[];
};

function Gallery({ initIndex, library }: Props) {
  const { setFourGalleryContext } = useFourGalleryContext();
  const { setOpenIndex } = useGlobalContext();
  const { setOpenIndexPropertyGallery } = usePropertyGalleryContext();
  const { setOpenIndexShowcaseGallery2Context } = useShowcaseGallery2Context();
  const { setOpenGalleryContext } = useGalleryContext();
  const [currentSlide, setCurrentSlide] = useState<number>(Math.max(initIndex, 0));

  const totalImages = library.length;

  const closeAll = () => {
    document.body.style.overflowY = "auto";
    setOpenIndexPropertyGallery(false);
    setOpenIndex(false);
    setOpenIndexShowcaseGallery2Context(false);
    setOpenGalleryContext(false);
    setFourGalleryContext(false);
    if (document.fullscreenElement) document.exitFullscreen();
  };

  const next = () => setCurrentSlide((v) => (v + 1) % totalImages);
  const prev = () => setCurrentSlide((v) => (v - 1 + totalImages) % totalImages);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflowY = "auto";
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const image = library[currentSlide];

  return (
    <section className="fixed inset-0 w-screen h-screen bg-black z-[1000] overflow-hidden">
      <div className="flex justify-end mr-4 absolute w-full z-[100]">
        <div className="rounded-md bg-grey2 flex justify-end items-center gap-2 mt-6 m-4 landscape:flex-col-reverse">
          <button className="fullscreen-button">
            <FullscreenButton />
          </button>
          <button onClick={closeAll} className="text-white cursor-pointer p-2 close-button">
            <RxCross2 className="text-2xl text-dark_blue_black hover:scale-150 transition-scale duration-300" />
          </button>
        </div>
      </div>

      <div className="absolute top-4 left-4 text-white z-[100]">{currentSlide + 1}/{totalImages}</div>

      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-[100] text-white">
        <MdOutlineArrowBackIosNew className="rounded-full p-2 bg-black/70 text-3xl" />
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-[100] text-white">
        <MdOutlineArrowForwardIos className="rounded-full p-2 bg-black/70 text-3xl" />
      </button>

      <div className="h-screen flex items-center justify-center px-12">
        <Image
          src={image.src}
          alt={image.alt}
          placeholder="blur"
          sizes="100vw"
          className="object-contain h-[80vh] w-full"
        />
      </div>
    </section>
  );
}

export default Gallery;
