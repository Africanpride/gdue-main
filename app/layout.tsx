import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";
import CookieConsent from "@/ui/CookieConsent";


import { siteConfig } from "@/config/site";
import { ibm_plex_sans_condense } from "@/config/fonts";
import Footer from "@/components/Footer";
import PrelineScript from "@/components/PrelineScript";
import NavBar from "@/components/NavBar";
import {
  ClerkProvider,

} from '@clerk/nextjs'
import { dark } from '@clerk/themes';
import { GoogleTagManager } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/ghana.svg",
  },
  keywords: siteConfig.keywords,
  publisher: 'Ghanaian Diaspora in Europe',
  robots: "index, follow",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },

};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "blue" },
  ],
};


export default function RootLayout({
  children,
  header,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
}) {
  const sitekey: string | undefined = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        layout: {
          socialButtonsPlacement: 'top',
          termsPageUrl: '/terms',
          privacyPageUrl: '/privacy',
        }
      }}
    >

      <html suppressHydrationWarning lang="en">
        <head />
        <body
          className={`${ibm_plex_sans_condense.className} min-h-screen bg-background  font-sans antialiased
            overflow-x-hidden text-[16px]`}
        >

          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TGQMFKJV"
              height="0" width="0" style={{ display: "none", visibility: "hidden" }}>
            </iframe>
          </noscript>

          <GoogleTagManager gtmId="GTM-TGQMFKJV" />

          <Providers themeProps={{ attribute: "class", defaultTheme: "light", enableSystem: false, forcedTheme: "light" }}>

            <div className="py-4">
              <NavBar />
            </div>

            <div className="relative flex flex-col h-screen px-4">

              <main className="container mx-auto ">{children}</main>


              <CookieConsent />
              <SpeedInsights />
              <Analytics />


              <Footer />
            </div>
          </Providers>
        </body>

        <PrelineScript />
      </html>

    </ClerkProvider >

  );
}
