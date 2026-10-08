export const appConfig = {
  appName: "SIGERcep",
  listingName: "SIGERcep - Transport & Food Delivery",
  packageName: "com.mysigercep140.sigercep140",
  shortDescription:
    "SIGERcep: satu aplikasi untuk transportasi, makanan, dan kebutuhan harian.",
  phoneDisplay: "0822-7898-8415",
  phoneRaw: "082278988415",
  whatsappUrl: "https://wa.me/6282278988415",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  lastUpdated: "8 Oktober 2026",
  hasAccountSystem: true,
} as const;

export const routes = {
  privacyPolicy: "/privacy-policy",
  deleteAccount: "/delete-account",
} as const;
