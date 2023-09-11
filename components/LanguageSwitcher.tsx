import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const getLocaleLabel = (locale: string) => {
    switch (locale) {
      case "pl":
        return "PL";
      case "en":
        return "ENG";
      default:
        return "PL";
    }
  };

  return (
    <div className="flex h-[42px] w-max items-center gap-x-5 bg-white/10 backdrop-blur-sm py-2 px-3 xl:translate-x-8 rounded-full">
      {locales
        ?.slice(1)
        .reverse()
        .map((locale) => {
          const isActive =
            locale === activeLocale ||
            (locale === "pl" && activeLocale === "default");

          return (
            <span className="" key={"locale-" + locale}>
              {isActive ? (
                <div className="text-accent">{getLocaleLabel(locale)}</div>
              ) : (
                <Link
                  className="hover:cursor-pointer hover:text-accent transition-all duration-300"
                  href={router.pathname}
                  locale={locale}
                >
                  <div>{getLocaleLabel(locale)}</div>
                </Link>
              )}
            </span>
          );
        })}
    </div>
  );
}
