"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../../../i18n-config";
import { getDictionary } from "../../../../get-dictionary";
import LocaleSwitcher from "../../components/locale-switcher";

export default function Partners({
    dictionary,
  }: {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["partners"];
  }) {    
  return (
    <section>
      
    </section>
  );
}