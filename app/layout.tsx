import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans, ibm_plex_sans_condense } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import {Image} from "@nextui-org/react";


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
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="h-auto min-h-[90%] superbg md:rounded-3xl md:m-3 flex flex-col">
            <div className={`${ibm_plex_sans_condense.className} md:p-6`}>
              <Navbar />
              <div className="flex flex-col items-left justify-end gap-4 py-8 md:py-10 h-auto min-h-[60dvh]">
                <div className="flex justify-between items-start w-full">
                  <div>Page Title</div>
                  <div>Page Description</div>
                </div>
                <div>
                  <Image 
                    width={300}
                    alt="NextUI hero Image"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
