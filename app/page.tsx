import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { bebas } from "@/config/fonts";
import { Library } from "lucide-react";

export default function Home() {
  return (
    <div>
      <h1 className="text-900 font-medium leading-10">
        Planned listings get more leads
        <span className="whitespace-nowrap">
           
          <svg
            className="inline-block h-auto w-20 -translate-x-1/4 align-super bp:w-36"
            width="37"
            height="33"
            viewBox="0 0 37 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.3843 2.3623C17.3309 9.99828 7.02245 20.1796 2.25 24.3157M11.7951 29.0881C17.8402 27.8154 30.694 24.3156 33.7483 20.4977"
              stroke="currentColor"
              strokeWidth={5.43873}
            />
          </svg>
        </span>
      </h1>
      <section className="w-full pt-2">
        <div className="mx-auto max-w-7xl lg:max-w-none px-6 lg:px-8 ">
          <div
            className="-mx-6 md:rounded-6xl bg-neutral-950 px-6 py-16 sm:mx-0 sm:py-28 md:px-12 min-h-[70dvh]"
            style={{
              opacity: "1",
              transform: "none",
              backgroundImage: "url('/images/africa.jpg')",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            <div className="mx-auto max-w-4xl hidden">
              <div className="max-w-2xl space-y-5 ">
                <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                  Stay Connected with GDUE
                </h2>
                <p className="text-sm text-gray-500">
                  Join our newsletter to stay informed about events, support
                  services, and community news. Be part of our mission to unite
                  and empower Ghanaians in the diaspora.
                </p>
                <div className="mt-6 flex">
                  <Link
                    className="inline-flex items-center rounded-full px-4 py-1.5 space-x-3 text-sm font-semibold transition bg-white text-neutral-950 hover:bg-neutral-200"
                    href="/contact"
                  >
                    <span className="relative top-px">Say Hi</span>
                    <span>
                      <Library className="text-current h-5 w-5" />
                    </span>
                  </Link>
                </div>
                <div className="mt-10 border-t border-white/10 pt-10">
                  <h3 className="font-display text-base font-semibold text-white">
                    Our offices
                  </h3>
                  <ul
                    role="list"
                    className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                  >
                    <li>
                      <address className="text-sm not-italic text-neutral-300">
                        <strong className="text-white">Barcelona</strong>
                        <br />1 Carlsberg Gate
                        <br />
                        1260, København, Spain
                      </address>
                    </li>
                    <li>
                      <address className="text-sm not-italic text-neutral-300">
                        <strong className="text-white">Ankara</strong>
                        <br />
                        24 Lego Allé
                        <br />
                        7190, Billund, Turkey
                      </address>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h3 className="block-title d-inline-block position-relative"><a href="/project-details-v1">Manage your online banking and get rewarded</a></h3>
    </div>
  );
}
