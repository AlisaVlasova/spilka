"use client";

import Link from "next/link";
import Image from "next/image";

import { type Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
import LocaleSwitcher from "./locale-switcher";
import NavItem from "./nav-item";

export default function Header({
  lang,
  dictionary,
}: {
  lang: Locale;
  dictionary: Awaited<ReturnType<typeof getDictionary>>["header"];
}) {
  return (
    <header className="container mx-auto sticky top-0 z-20 bg-white border-2 border-pink rounded-full py-2 md:py-0">
      <ul className="flex flex-row justify-between items-center md:px-14 gap-2 font-mono text-xl">
        <li>
          <LocaleSwitcher />
        </li>
        <li>
          <NavItem text={dictionary.about} link="#about" />
        </li>
        <li>
          <NavItem text={dictionary.reports} link="#reports" />
        </li>
        <li>
          <Link href="/">
            <Image
              src={`/${lang}/logo.svg`}
              width={214}
              height={58}
              alt="Logo of Spilka fund"
            />
          </Link>
        </li>
        <li>
          <NavItem text={dictionary.credentials} link="#credentials" />
        </li>
        <li>
          <NavItem text={dictionary.socialMedia} link="#contacts" />
        </li>
      </ul>
    </header>
  );
}
