"use client";
import Gallery from "./Gallery";
import { TouristImageData } from "@/lib/TouristImageData";

interface Props {
  initIndex: number;
}

function GuideGallery({ initIndex }: Props) {
  return <Gallery library={TouristImageData} initIndex={initIndex} />;
}

export default GuideGallery;
