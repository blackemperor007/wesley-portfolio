import "./globals.css";
import { Inter, Bebas_Neue } from "next/font/google";

const inter = Inter ({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
})

const bebasNeue = Bebas_Neue ({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
})

export const metadata = {
  title: "Wesley Pagnol portfolio",
  description: "Get to know Wesley Pagnol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={`antialiased ${inter.variable} ${bebasNeue.variable}`}>
        {children}
      </body>
    </html>
  );
}
