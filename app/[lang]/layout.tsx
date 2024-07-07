import { i18n, type Locale } from "../../i18n-config";

import './globals.css'

import { Unbounded, Nunito } from 'next/font/google'

const unbounded = Unbounded({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-unbounded',
})

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} className={`${unbounded.variable} ${nunito.variable} font-sans max-w-[100vw] overflow-x-hidden`}>
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "",
  description: "",
};
