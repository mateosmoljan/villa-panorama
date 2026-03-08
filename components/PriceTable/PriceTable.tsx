import { getPriceTableData } from "@/lib/priceTable";
import { useLocale } from "next-intl";

function createData(period: string, price: number, persons: number, stay: number) {
  return { period, price, persons, stay };
}

const rows = [
  createData("02.01. - 12.01.", 300, 16, 3),
  createData("13.01. - 31.01.", 200, 16, 3),
  createData("01.02. - 31.03.", 250, 16, 3),
  createData("01.04. - 30.04.", 280, 16, 3),
  createData("01.05. - 31.05.", 350, 16, 3),
  createData("01.06. - 30.06.", 600, 16, 3),
  createData("01.07. - 31.08.", 950, 16, 3),
  createData("01.09. - 12.09.", 500, 16, 3),
  createData("13.09. - 22.09.", 400, 16, 3),
  createData("23.09. - 30.09.", 350, 16, 3),
  createData("01.10. - 30.10.", 250, 16, 3),
  createData("01.11. - 31.11.", 200, 16, 3),
  createData("01.12. - 22.12.", 300, 16, 3),
  createData("23.12. - 27.8.", 500, 16, 3),
  createData("28.12. - 01.01.", 1100, 16, 3),
];

export default function PriceTable() {
  const localeActive = useLocale();
  const PriceTableData = getPriceTableData(localeActive);

  return (
    <div className="overflow-x-auto rounded-md border border-gray-200 bg-white">
      <table className="w-full border-collapse" aria-label="Pricing Table">
        <thead>
          <tr className="bg-grey2 font-titleBold">
            <th className="py-2 w-[160px] text-center">{PriceTableData.data[0].title}</th>
            <th className="py-2 w-[112px] text-center">{PriceTableData.data[0].title2}</th>
            <th className="py-2 w-[112px] text-center">{PriceTableData.data[0].title3}</th>
            <th className="py-2 w-[112px] text-center">{PriceTableData.data[0].title4}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.period} className="border-t border-gray-200">
              <td className="px-2 py-2 text-center font-Bold">{row.period}</td>
              <td className="px-2 py-2 text-center font-ExtraBold">{row.price} €</td>
              <td className="px-2 py-2 text-center font-Bold">{row.persons}</td>
              <td className="px-2 py-2 text-center font-Bold">{row.stay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
