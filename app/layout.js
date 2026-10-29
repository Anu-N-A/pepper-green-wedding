import "./globals.css";
import { Cormorant_Garamond, Jost, Poppins } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const logo = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-logo",
  display: "swap",
});

export const metadata = {
  title: "Pepper Green — Wedding Company",
  description:
    "Pepper Green is a wedding company telling honest, cinematic stories of love — across India and beyond.",
  openGraph: {
    title: "Pepper Green — Wedding Company",
    description:
      "Weddings told the way they felt — warm, wild, and entirely yours.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#161511",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${logo.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
