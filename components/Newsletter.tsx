import { Library } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Newsletter = (props: Props) => {
  return (
    <div className="w-full text-[16px]">
      <div className="lg:max-w-none lg:mt-38 mt-22 mx-auto sm:mt-30">
        <div
          className="-mx-6 md:rounded-6xl bg-neutral-950 px-6 py-16 sm:mx-0 sm:py-28 md:px-12"
          style={{ opacity: "1", transform: "none" }}
        >
          <div className="mx-auto max-w-4xl">
            <div className="max-w-2xl space-y-5 ">
              <h2 className="font-display text-3xl  text-white [text-wrap:balance] sm:text-4xl">
                Stay Connected with GDUE
              </h2>
              <p className="text-md text-gray-500">
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
    </div>
  );
};

export default Newsletter;
