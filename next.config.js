/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ru"],
    defaultLocale: "ru",
  },
  env: {
    NEXT_PUBLIC_API_KEY: "ec8c9e49bd5084c843c9d2f077ad5d97",
    APIS_KEY: "321",
    NEXT_PUBLIC_API_URL: "http://api.openweathermap.org/data/2.5/forecast?",
    NEXT_PUBLIC_ICON_URL: "http://openweathermap.org/img/wn/",
  },
};

module.exports = nextConfig;
