import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans, ibm_plex_sans_condense } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import { Image } from "@nextui-org/image";
import Heading from "@/components/Jumbotron";
import Jumbotron from "@/components/Jumbotron";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/ghana.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
  header,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={`${ibm_plex_sans_condense.className} min-h-screen bg-background font-sans antialiased`}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="h-auto min-h-[90%]  relative md:rounded-3xl flex flex-col">

            <div>
              <Navbar />

            </div>

          </div>
          <div className="relative flex flex-col h-screen">
            <main className="container mx-auto ">
              {children}
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
