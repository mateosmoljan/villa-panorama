import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "@/components/Loading/Loading";
import ShowcaseGallery from "@/components/Gallery/ShowcaseGallery";
import ShowcaseGallery2 from "@/components/Gallery/ShowcaseGallery2";
import NavPath from "@/components/NavPath/NavPath";
import SendMessage from "@/components/SendMessage/SendMessage";
import { createPageMetadata } from "@/lib/seo";
import { useTranslations } from "next-intl";

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  return createPageMetadata(locale, "photogallery", "photogallery");
}

function Photogallery() {
  const t = useTranslations("Titles");
  return (
    <section className="pt-16 md:pt-14">
      <NavPath />
      <h1 className="mt-12 font-ExtraBold text-center text-4xl text-dark_blue_black tracking-wider">
        {t("Photogallery")}
      </h1>
      <Suspense fallback={<Loading />}>
        <ShowcaseGallery />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ShowcaseGallery2 />
      </Suspense>
      <div className="mb-24">
        <SendMessage />
      </div>
    </section>
  );
}

export default Photogallery;
