
import { bebas, playfair_display } from "@/config/fonts";
import Newsletter from "@/components/Newsletter";
import BusinessCategories from "@/components/BusinessCategories";
import Divider from "@/ui/Divider";
import Sponsors from "@/components/Sponsors";
import Intro from "@/components/Intro";
import JumbotronHome from "@/components/JumbotronHome";
import AnimatedSections from "@/components/AnimatedSections";

export default function Home() {
    return (
        <div className="space-y-3 md:space-y-16">
            <JumbotronHome
                heading="Thriving in Europe: GDUE's Support Network"
                description={(<>  GDUE <span className="text-yellow-600">
                    empowers Ghanaians
                </span>{" "} in Europe through advocacy, cultural events, educational programs, and business support for entrepreneurs and professionals.
                </>)}
                linkText="Watch our story"
                linkHref="#"
                backgroundImage="/images/gdue_home.jpg"
                hideVideo={false}
            />
            <div className="max-w-5xl mx-auto">
                <Intro />
            </div>
            <AnimatedSections>
                <div className="w-full ">
                    <div className="-mx-16 max-w-7xl lg:max-w-none ">
                        <div
                            className=" md:rounded-none relative overflow-hidden bg-neutral-950 px-16 py-16 sm:mx-0 sm:py-28 md:px-18 min-h-[85dvh]
            flex flex-col justify-center"
                            style={{
                                opacity: "1",
                                transform: "none",
                                backgroundImage: "url('/images/twins2.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "right 5% bottom 55%",
                            }}
                        >
                            <div className="absolute inset-0 bg-black opacity-60 z-10"> </div>

                            <div className=" z-20 max-w-4xl space-y-4">
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
                                <div className="text-3xl  text-white ">
                                    The Ghanaian Diaspora Union  in Europe (GDUE) is your bridge to a
                                    vibrant Ghanaian community abroad. We understand the joys and
                                    challenges of living in Europe, and we are here to empower
                                    you.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSections>
            <Divider title={'Diasporan Business Directory'} />
            <BusinessCategories />

            {/* <Divider title={'Our Sponsors'} />
            <Sponsors /> */}


            {/* <Faqs /> */}
            <Newsletter />
        </div>
    );
}