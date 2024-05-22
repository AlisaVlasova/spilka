"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../../../i18n-config";
import { getDictionary } from "../../../../get-dictionary";
import LocaleSwitcher from "../../components/locale-switcher";

export default function Payment({
    dictionary,
  }: {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["payment"];
  }) {    
  return (
    <section id="payment">
      
    </section>
  );
}