import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import React, { useTransition } from "react";
import en_src from "@/public/assets/icons/flags/en.png";
import de_src from "@/public/assets/icons/flags/de.png";
import hr_src from "@/public/assets/icons/flags/hr.png";
import it_src from "@/public/assets/icons/flags/it.png";
import Image, { StaticImageData } from "next/image";

interface LanguageLabel {
  code: string;
  src: StaticImageData;
}

function LanguageSwitch() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();
  const pathname = usePathname();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    const segments = pathname.split("/").filter(Boolean);
    const rest = segments.slice(1).join("/");
    const nextPath = `/${nextLocale}${rest ? `/${rest}` : ""}`;

    startTransition(() => {
      router.replace(nextPath);
    });
  };

  const languageLabels: LanguageLabel[] = [
    { code: "en", src: en_src },
    { code: "de", src: de_src },
    { code: "hr", src: hr_src },
    { code: "it", src: it_src },
  ];

  return (
    <label className="relative inline-flex items-center">
      <select
        value={localeActive}
        onChange={handleChange}
        disabled={isPending}
        className="h-9 rounded-md border border-gray-300 bg-white pl-10 pr-2 text-sm uppercase"
        aria-label="Select language"
      >
        {languageLabels.map((label) => (
          <option key={label.code} value={label.code}>
            {label.code}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2">
        <Image
          src={languageLabels.find((l) => l.code === localeActive)?.src || en_src}
          alt={`${localeActive} flag`}
          width={20}
          height={20}
        />
      </span>
    </label>
  );
}

export default LanguageSwitch;
