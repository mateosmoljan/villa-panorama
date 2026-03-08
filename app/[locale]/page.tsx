import type { Metadata } from "next";
import { Suspense } from "react";
import About from "@/components/About/About";
import Acommodation from "@/components/Accommodations/Accommodation";
import Distances from "@/components/About/Distances";
import HeadSwiper from "@/components/HeadSwiper/HeadSwiper";
import Loading from "@/components/Loading/Loading";
import NavPath from "@/components/NavPath/NavPath";
import Photogalleries from "@/components/Gallery/Photogalleries";
import SendMessage from "@/components/SendMessage/SendMessage";
import TouristGuide from "@/components/TouristGuide/TouristGuide";
import { createPageMetadata } from "@/lib/seo";

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  return createPageMetadata(locale, "home");
}

export default function Home() {
  return (
    <div>
      <HeadSwiper />
      <main>
        <h1 className="sr-only">Villa Panorama</h1>
        <NavPath homePage />
        <About />
        <Distances />
        <Acommodation />
        <Suspense fallback={<Loading />}>
          <Photogalleries />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <TouristGuide />
        </Suspense>
        <div className="mb-24">
          <SendMessage />
        </div>
      </main>
    </div>
  );
}
