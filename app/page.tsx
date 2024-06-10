import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { bebas, playfair_display } from "@/config/fonts";
import { Library } from "lucide-react";
import Newsletter from "@/components/Newsletter";
import Faqs from "@/components/Faqs";
import Image from "next/image";
import News from "@/components/News";
import BusinessCategories from "@/components/BusinessCategories";
import Divider from "@/ui/Divider";
import Sponsors from "@/components/Sponsors";

export default function Home() {
    return (
        <div className="space-y-3 md:space-y-16">
            <section className="">
                {/* Features */}
                <div className="mx-auto">
                    <div className="min-h-[35vh] h-auto md:min-h-[75vh] bg-[url('/images/festival2.jpg')] bg-bottom bg-cover  bg-no-repeat relative md:rounded-6xl">
                       
                        <div className="absolute bottom-0 start-0 end-0 max-w-xs text-center mx-auto p-6 md:start-auto md:text-start md:mx-0">
                            {/* Card */}
                            <div className="px-5 py-4 inline-block bg-white rounded-4xl md:p-7 dark:bg-neutral-900">
                                <div className="hidden md:block">
                                    <h3
                                        className={`${bebas.className} text-md font-bold text-gray-800 sm:text-2xl dark:text-neutral-200`}
                                    >
                                        Share Your Business?
                                    </h3>
                                    <p className="mt-2 text-gray-800 dark:text-neutral-200 text-sm">
                                        Learn more about sharing your business with the{" "}
                                        <span className="text-yellow-600 font-bold">
                                            Ghana diasporan
                                        </span>{" "}
                                        community.
                                    </p>
                                </div>

                                <div className="md:mt-16">
                                    <a
                                        className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-500 dark:text-white dark:hover:text-neutral-400"
                                        href="#"
                                    >
                                        <svg
                                            className="flex-shrink-0 size-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polygon points="5 3 19 12 5 21 5 3" />
                                        </svg>
                                        Watch our story
                                    </a>
                                </div>
                            </div>
                            {/* End Card */}
                        </div>
                    </div>
                </div>
                {/* End Features */}
            </section>

            <Divider title={'Business Directory'} />
            <BusinessCategories />

            <Divider title={'Our Sponsors'} />
            <Sponsors />

            <section>
                <div className="w-full ">
                    <div className=" max-w-7xl lg:max-w-none ">
                        <div
                            className="-mx-6 md:rounded-6xl relative overflow-hidden bg-neutral-950 px-6 py-16 sm:mx-0 sm:py-28 md:px-12 min-h-[70dvh]
            flex flex-col justify-center"
                            style={{
                                opacity: "1",
                                transform: "none",
                                backgroundImage: "url('/images/africa.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute inset-0 bg-black opacity-60 z-10"> </div>

                            <div className=" z-20 max-w-5xl space-y-4">
                                <div
                                    className={`${bebas.className} text-5xl md:text-6xl md:leading-[4rem] font-bold text-white capitalize`}
                                >
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
                                    challenges of living in Europe, and we are here to empower
                                    you.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Faqs /> */}
            <Newsletter />
        </div>
    );
}