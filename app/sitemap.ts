import type { MetadataRoute } from "next";
import { SITE_URL, locales } from "@/lib/seo";

const routes = ["", "contact", "environs", "photogallery", "pricelist", "villa-panorama"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${SITE_URL}/${locale}${route ? `/${route}` : ""}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
    }))
  );
}
