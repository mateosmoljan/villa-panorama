import type { Metadata } from "next";
import { Link } from "@/navigation";
import FourGallery from "@/components/Gallery/FourGallery";
import NavPath from "@/components/NavPath/NavPath";
import { getEnvironsData } from "@/lib/environs";
import { getLocationsData } from "@/lib/LocationToVisit";
import { createPageMetadata } from "@/lib/seo";
import { useLocale } from "next-intl";
import Image from "next/image";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return createPageMetadata(locale, "environs", "environs");
}

function SectionCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-ExtraBold text-dark_blue_black mb-2">{title}</h3>
      <p className="text-grey1 leading-7">{description}</p>
    </article>
  );
}

function Environs() {
  const localeActive = useLocale();
  const environs = getEnvironsData(localeActive);
  const links = getLocationsData(localeActive);

  return (
    <section className="pt-16 md:pt-14">
      <NavPath />
      <div className="container pb-24">
        <h1 className="mt-12 text-center text-3xl sm:text-4xl font-ExtraBold text-dark_blue_black tracking-wider">
          {environs.heroTitle}
        </h1>

        <div className="mt-8 overflow-hidden rounded-3xl">
          <FourGallery range={{ start: 0, end: 4 }} mapButton />
        </div>

        <div className="mt-10 rounded-3xl bg-white p-6 md:p-8 shadow-sm border border-black/5">
          <p className="text-grey1 leading-8 text-base md:text-lg">
            <Image
              src="/assets/images/sun.png"
              alt="Istria coat of arms"
              width={140}
              height={140}
              className="float-left mr-4 mb-2 aspect-square"
              sizes="140px"
            />
            {environs.heroIntro}
          </p>
        </div>

        <div className="mt-12 grid gap-10">
          <section>
            <h2 className="text-2xl font-ExtraBold text-dark_blue_black">{environs.sections.nearby.title}</h2>
            <p className="mt-3 text-grey1 leading-7 max-w-4xl">{environs.sections.nearby.intro}</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {environs.sections.nearby.items.map((item) => (
                <SectionCard key={item.title} {...item} />
              ))}
            </div>
          </section>

          <section>
            <div className="overflow-hidden rounded-3xl mb-6">
              <FourGallery range={{ start: 4, end: 8 }} mapButton={false} />
            </div>
            <h2 className="text-2xl font-ExtraBold text-dark_blue_black">{environs.sections.beaches.title}</h2>
            <p className="mt-3 text-grey1 leading-7 max-w-4xl">{environs.sections.beaches.intro}</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {environs.sections.beaches.items.map((item) => (
                <SectionCard key={item.title} {...item} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-ExtraBold text-dark_blue_black">{environs.sections.dayTrips.title}</h2>
            <p className="mt-3 text-grey1 leading-7 max-w-4xl">{environs.sections.dayTrips.intro}</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {environs.sections.dayTrips.items.map((item) => (
                <SectionCard key={item.title} {...item} />
              ))}
            </div>
          </section>

          <section>
            <div className="overflow-hidden rounded-3xl mb-6">
              <FourGallery range={{ start: 8, end: 12 }} mapButton={false} />
            </div>
            <h2 className="text-2xl font-ExtraBold text-dark_blue_black">{environs.sections.whyStay.title}</h2>
            <p className="mt-3 text-grey1 leading-7 max-w-4xl">{environs.sections.whyStay.intro}</p>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {environs.sections.whyStay.items.map((item) => (
                <SectionCard key={item.title} {...item} />
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-black/10 bg-slate-50 p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-ExtraBold text-dark_blue_black">{localeActive === "de" ? "Offizielle Quellen für die Urlaubsplanung" : localeActive === "hr" ? "Službeni izvori za planiranje boravka" : localeActive === "it" ? "Risorse ufficiali per organizzare il soggiorno" : "Official resources for planning your stay"}</h2>
            <ul className="mt-5 space-y-4">
              {links.locations.map((item, index) => (
                <li key={index} className="leading-7 text-grey1">
                  <span className="font-Bold text-dark_blue_black">{item.placeToVisit}</span>
                  {item.des ? <span> — {item.des}</span> : null}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl bg-dark_blue_black text-white p-8 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-ExtraBold">{environs.cta.title}</h2>
            <p className="mt-4 text-white/85 leading-7 max-w-3xl">{environs.cta.text}</p>
            <div className="mt-6">
              <Link href="/contact" className="btn inline-flex">
                {environs.cta.button}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Environs;
