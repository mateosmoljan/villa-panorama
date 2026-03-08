import type { Metadata } from "next";
import { Suspense } from "react";
import HowToReserve from "@/components/HowToReserve/HowToReserve";
import Loading from "@/components/Loading/Loading";
import NavPath from "@/components/NavPath/NavPath";
import PaymentConditions from "@/components/PaymentConditions/PaymentConditions";
import PriceTable from "@/components/PriceTable/PriceTable";
import SendMessage from "@/components/SendMessage/SendMessage";
import TouristGuide from "@/components/TouristGuide/TouristGuide";
import { getPaymentConditionsData } from "@/lib/paymentConditions";
import { getPricelistData } from "@/lib/pricelist";
import { getTitleData } from "@/lib/title";
import { createPageMetadata } from "@/lib/seo";
import { useLocale, useTranslations } from "next-intl";

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  return createPageMetadata(locale, "pricelist", "pricelist");
}

function Pricelist() {
  const localeActive = useLocale();
  const TitleData = getTitleData(localeActive);
  const PricelistData = getPricelistData(localeActive);
  const PaymentConditionsData = getPaymentConditionsData(localeActive);
  const t = useTranslations("How_Reserve");

  return (
    <section className="pt-16 md:pt-14">
      <NavPath />
      <div className="mt-12 pb-28 container">
        <h1 className="font-ExtraBold text-center text-4xl text-dark_blue_black mb-12 tracking-wider">
          {TitleData.data[0].title4}
        </h1>
        <PriceTable />
        <p className="text-grey1 text-sm mt-4">{PricelistData.data[0].subtitle}</p>
      </div>

      <div className="py-10 bg-gray-100">
        <div className="container">
          <h2 className="text-pink font-semibold uppercase mb-2 tracking-widest">
            {PaymentConditionsData.data[0].subtitle}
          </h2>
          <h3 className="font-bold text-3xl text-dark_blue_black mb-4">
            {PaymentConditionsData.data[0].title}
          </h3>
          <PaymentConditions />
        </div>
      </div>

      <div className="py-10 bg-gray-100">
        <div className="container">
          <h2 className="text-pink font-semibold uppercase mb-2 tracking-widest">
            {t("subtitle")}
          </h2>
          <h3 className="block font-bold text-3xl text-dark_blue_black mb-10">
            {t("title")}
          </h3>
          <HowToReserve />
        </div>
      </div>

      <SendMessage />
      <div className="mb-24">
        <Suspense fallback={<Loading />}>
          <TouristGuide />
        </Suspense>
      </div>
    </section>
  );
}

export default Pricelist;
