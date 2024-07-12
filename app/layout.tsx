import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";
import CookieConsent from "@/ui/CookieConsent";


import { siteConfig } from "@/config/site";
import { ibm_plex_sans_condense } from "@/config/fonts";
import Footer from "@/components/Footer";
import { Image } from "@nextui-org/image";
import Heading from "@/components/Jumbotron";
import Jumbotron from "@/components/Jumbotron";
import PrelineScript from "@/components/PrelineScript";
import NavBar from "@/components/NavBar";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { dark } from '@clerk/themes';


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
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  viewport: { width: "device-width", initialScale: 1 },
  publisher: 'Ghanaian Diaspora in Europe',
  robots: "index, follow",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  }

};

// export const viewport: Viewport = {
// };

export default function RootLayout({
  children,
  header,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
}) {
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
          className={`${ibm_plex_sans_condense.className} min-h-screen bg-background font-sans antialiased
              overflow-x-hidden text-[16px]`}
        >


          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className="py-4">
              <NavBar />
            </div>

            <div className="relative flex flex-col h-screen px-4">
              <main className="container mx-auto ">{children}</main>

              <CookieConsent />

              <Footer />
            </div>
          </Providers>
        </body>

        <PrelineScript />
      </html>
    </ClerkProvider>

  );
}
