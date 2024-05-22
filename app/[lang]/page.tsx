import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import About from "./pages/about";
import Contacts from "./pages/contacts";
import CurrentFundraise from "./pages/currentFundraise";
import Header from "./components/header";
import Partners from "./pages/partners";
import Payment from "./pages/payment";
import RecentFundraisings from "./pages/recentFundraisings";
import Reports from "./pages/reports";
import Shop from "./pages/shop";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="pt-12">
      <Header lang={lang} dictionary={dictionary.header} />

      <CurrentFundraise dictionary={dictionary.currentFundraise} />
      <RecentFundraisings dictionary={dictionary.recentFundraisings} />

      <About dictionary={dictionary.about} />
      <Reports dictionary={dictionary.reports} />
      <Payment dictionary={dictionary.payment} />
      <Partners dictionary={dictionary.partners} />
      <Shop dictionary={dictionary.shop} />
      <Contacts dictionary={dictionary.contacts} />
    </div>
  );
}
