import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { bebas, playfair_display } from "@/config/fonts";
import { Library } from "lucide-react";

export default function Home() {
  return (
    <section>
      <div className="w-full ">
        <div className=" max-w-7xl lg:max-w-none ">
          <div
            className="-mx-6 md:rounded-4xl relative overflow-hidden bg-neutral-950 px-6 py-16 sm:mx-0 sm:py-28 md:px-12 min-h-[70dvh]
            flex flex-col justify-center"
            style={{
              opacity: "1",
              transform: "none",
              backgroundImage: "url('/images/africa.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-green-900 opacity-25 z-10">
              {" "}
            </div>

            <div className=" z-20 max-w-5xl">
              <div className="text-6xl font-bold text-white capitalize">
                Uniting The{" "}
                <span
                  className={`${playfair_display.className} text-yellow-400`}
                >
                  Diaspora
                </span>{" "}
                For <br />
                <span
                  className={`${playfair_display.className} text-yellow-400`}
                >
                  National
                </span>{" "}
                Development
              </div>
              <div className="text-2xl font-bold text-white ">
                The Ghana Diaspora Union in Europe (GDUE) is your bridge to a
                vibrant Ghanaian community abroad. We understand the joys and
                challenges of living in Europe, and we are here to empower you.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
