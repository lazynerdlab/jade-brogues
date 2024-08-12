import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Chakra_Petch } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const chakra_petch = Chakra_Petch({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-chakra_petch",
});

export const metadata: Metadata = {
  // metadataBase: new URL(""),
  title: {
    template: "%s | Jade & Brogues",
    default: "Jade & Brogues",
  },
  description: "",

  keywords: ["Jade", "Brogues", "JadeandBrogues"],
  // openGraph: {
  //   images: "/opengraph-image.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${chakra_petch.variable}`}>
        {children}
      </body>
    </html>
  );
}
