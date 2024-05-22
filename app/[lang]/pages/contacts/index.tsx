"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../../../i18n-config";
import { getDictionary } from "../../../../get-dictionary";
import LocaleSwitcher from "../../components/locale-switcher";

export default function Contacts({
    dictionary,
  }: {
    dictionary: Awaited<ReturnType<typeof getDictionary>>["contacts"];
  }) {    
  return (
    <section id="contacts">
      
    </section>
  );
}