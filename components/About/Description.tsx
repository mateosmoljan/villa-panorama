"use client";
import { getAboutData } from "@/lib/About";
import { useLocale } from "next-intl";
import { useState } from "react";
import Markdown from "react-markdown";

function Description() {
  const localeActive = useLocale();
  const AboutData = getAboutData(localeActive);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = isExpanded
    ? AboutData.des
    : `${AboutData.des.slice(0, 280)}${
        AboutData.des.length > 280 ? "..." : ""
      }`;
  return (
    <div>
      <Markdown>{displayText}</Markdown>
      <div className="w-full flex justify-end">
        <span
          onClick={handleToggle}
          className="underline text-black cursor-pointer"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </span>
      </div>
    </div>
  );
}

export default Description;
