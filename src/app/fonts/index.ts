import localFont from "next/font/local";

export const aeonik = localFont({
  src: [
    {
      path: "../../../public/fonts/Aeonik/Aeonik-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Aeonik/Aeonik-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Aeonik/Aeonik-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-aeonik",
});

export const madeMellow = localFont({
  src: [
    {
      path: "../../../public/fonts/MadeMellow/MADEMellowPERSONALUSE-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-madeMellow",
});
