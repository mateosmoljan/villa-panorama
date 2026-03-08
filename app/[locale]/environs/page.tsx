import type { Metadata } from "next";
import { Suspense } from "react";
import FourGallery from "@/components/Gallery/FourGallery";
import Loading from "@/components/Loading/Loading";
import NavPath from "@/components/NavPath/NavPath";
import SendMessage from "@/components/SendMessage/SendMessage";
import { getEnvironsData } from "@/lib/environs";
import { getLocationsData } from "@/lib/LocationToVisit";
import { createPageMetadata } from "@/lib/seo";
import { useLocale } from "next-intl";
import Image from "next/image";

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  return createPageMetadata(locale, "environs", "environs");
}

function Environs() {
  const localeActive = useLocale();
  const LocationsData = getLocationsData(localeActive);
  const EnvironsData = getEnvironsData(localeActive);
  return (
    <section className="pt-16 md:pt-14">
      <NavPath />
      <div className="container">
        <h1 className="mt-12 flex justify-center text-3xl sm:text-4xl font-ExtraBold text-dark_blue_black tracking-wider">
          {EnvironsData.data[0].title}
        </h1>

        <Suspense fallback={<Loading />}>
          <FourGallery range={{ start: 0, end: 4 }} mapButton />
        </Suspense>

        <p>
          <Image
            src="/assets/images/sun.png"
            alt="Istria coat of arms"
            width={150}
            height={150}
            className="aspect-square float-left"
            sizes="150px"
          />
          {EnvironsData.data[0].des}
        </p>

        <Suspense fallback={<Loading />}>
          <FourGallery range={{ start: 4, end: 8 }} mapButton={false} />
        </Suspense>

        <h2 className="font-titleBold text-xl mb-4">{EnvironsData.data[0].title2}</h2>
        <p>{EnvironsData.data[0].des2}</p>
        <h3 className="font-semibold">{EnvironsData.data[0].subtitle}</h3>
        <ul className="list-disc p-3 pl-8">
          {LocationsData.locations.map((item, index) => (
            <li key={index}>
              {item.placeToVisit} {item.des}
            </li>
          ))}
        </ul>

        <Suspense fallback={<Loading />}>
          <FourGallery range={{ start: 8, end: 12 }} mapButton={false} />
        </Suspense>

        <div className="mb-24">
          <SendMessage />
        </div>
      </div>
    </section>
  );
}

export default Environs;
