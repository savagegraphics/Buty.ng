import Footer from "./components/BaseLayout/Footer";
import Header from "./components/BaseLayout/Header";
import { aeonik, madeMellow } from "./fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${aeonik.variable} ${madeMellow.variable} font-aeonik`}
      lang="en"
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
