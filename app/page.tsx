import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

import { isPublishedLocale } from "@/lib/i18n/config";
import {
  localeCookieName,
  negotiateLocaleFromAcceptLanguage,
} from "@/lib/i18n/routing";

export default async function IndexPage() {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(localeCookieName)?.value;
  const headerStore = await headers();
  const locale =
    cookieLocale && isPublishedLocale(cookieLocale)
      ? cookieLocale
      : negotiateLocaleFromAcceptLanguage(headerStore.get("accept-language"));

  redirect(`/${locale}`);
}
