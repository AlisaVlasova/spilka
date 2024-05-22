"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../../i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul>
      {i18n.locales.map((locale, index) => {
        return (
            <li
              key={locale}
              className="cursor-pointer drop-shadow-sm hover:drop-shadow-md hover:scale-105 transition-all"
            >
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
            // {
            //   !index && (
            //     <li key={locale + index} className="border border-pink rounded-full"></li>
            //   )
            // }
        );
      })}
    </ul>
  );
}
