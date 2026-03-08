import type { Metadata } from "next";
import VillaPanoramaPage from "@/components/pages/VillaPanoramaPage";
import { createPageMetadata } from "@/lib/seo";

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  return createPageMetadata(locale, "villa-panorama", "villa-panorama");
}

export default function VillaPanorama() {
  return <VillaPanoramaPage />;
}
