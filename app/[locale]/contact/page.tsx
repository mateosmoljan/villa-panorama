import type { Metadata } from "next";
import { Suspense } from "react";
import IFrameMaps from "@/components/About/iFrameMaps";
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import NavPath from "@/components/NavPath/NavPath";
import Loading from "@/components/Loading/Loading";
import { createPageMetadata } from "@/lib/seo";
import { useTranslations } from "next-intl";

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  return createPageMetadata(locale, "contact", "contact");
}

function Contact() {
  const c = useTranslations("Contact");
  return (
    <section className="pt-16 md:pt-14">
      <NavPath />
      <div className="container">
        <h1 className="mt-12 font-ExtraBold text-center text-4xl text-dark_blue_black mb-12 tracking-wider">
          {c("title")}
        </h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="w-full sm:w-2/3">
            <ContactForm />
          </div>
          <div className="w-full sm:w-1/3">
            <ContactInfo />
          </div>
        </div>
      </div>

      <div className="h-[550px] mt-10 rounded-md overflow-hidden">
        <Suspense fallback={<Loading />}>
          <IFrameMaps />
        </Suspense>
      </div>
    </section>
  );
}

export default Contact;
