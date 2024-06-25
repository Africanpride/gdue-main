/* eslint-disable @next/next/no-img-element */
import { title } from "@/components/primitives";
import {
  bebas,
  ibm_plex_sans_condense,
  playfair_display,
  poppins,
  sourceCodePro400,
} from "@/config/fonts";
import { Image } from "@nextui-org/image";
import { Button } from '@nextui-org/button';

import Link from "next/link";
import { Library, LucideArrowUpRight } from "lucide-react";
import Faqs from "@/components/Faqs";
import Faqs2 from "@/components/Faqs2";
import Newsletter from "@/components/Newsletter";
import Divider from "@/ui/Divider";
import Jumbotron from "@/components/Jumbotron";

export default function AboutPage() {
  return (
    <div className="md:space-y-16 space-y-8">
      <Jumbotron
        heading="The Ghanaian Diaspora Union   in Europe (GDUE)"
        description={(<>   There&apos;s something special about being around people who understand you. GDUE  creates opportunities for Ghanaians to connect and build friendships.</>)}
        linkText="Watch our story"
        linkHref="#"
        backgroundImage="/images/london2.jpg"
        hideVideo={false}
      />

      <Divider title={'About G.D.U.E'} />

      <section className="flex flex-col h-auto">
        <div className="w-full container mx-auto grid md:grid-cols-3 gap-4">
          <div className="space-y-3 w-full  md:col-span-2">

            <h3
              className={`${sourceCodePro400.className} text-4xl md:text-6xl capitalize font-extrabold`}
            >
              Home in Europe &mdash; The Ghana <br />
              <span className={`${playfair_display.className} text-yellow-600`}>
                Diaspora
              </span>{" "}
              Union in <span className={`${playfair_display.className} text-yellow-600`}>
                Europe
              </span>{" "}
            </h3>
            <p>
              Join the Ghanaian Diaspora Union   in Europe (GDUE) to connect with a thriving Ghanaian community abroad. We recognize the unique experiences of living in Europe and are dedicated to supporting you. As a GDUE member, you&apos;ll build friendships, engage in cultural exchanges, and advance your career with a network of fellow Ghanaians.
            </p>
          </div>
          <div className="hidden text-center h-full bg-slate-500/25  justify-center items-center">
            Image
          </div>
        </div>
      </section>

      <section
        className="bg-neutral-200/55 dark:bg-neutral-950 h-auto min-h-dvh -mx-12 p-4 md:p-24 
      flex flex-col justify-center"
      >
        <div>
          <div className="w-full md:flex md:space-x-5 p-4">
            <div
              className={` w-full md:w-6/12 text-4xl p-4 md:pt-3 md:text-right`}
            >
              A Vision for a brighter future for all{" "}
              <span className={`${playfair_display.className} text-yellow-600`}>
                Ghanaians
              </span>{" "}
              in the{" "}
              <span className={`${playfair_display.className} text-yellow-600`}>
                Diaspora
              </span>
              .
            </div>
            <div className="w-full md:w-6/12 bg-white dark:bg-neutral-900 h-auto p-4 md:p-8 rounded-3xl text-md flex justify-center items-center">
              Our Vision is to foster unity among Ghanaians in the diaspora by,
              promoting cultural pride, economic empowerment, and social
              cohesion, thus enhancing the well-being of our members and
              contributing to Ghana&apos;s development.
            </div>
          </div>

          <div className="relative h-auto min-h-[50dvh] md:min-h-[30dvh] w-full block ">
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`${poppins.className} bg-cover bg-center  text-7xl md:text-[12rem] font-extrabold text-transparent`}
                style={{
                  backgroundImage: 'url("images/kente.avif")',
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
              >
                G.D.U.E
              </div>
            </div>
          </div>

          <div className="w-full md:flex md:space-x-5 p-4">
            <div
              className={` w-full md:w-6/12 text-4xl p-4 md:pt-3 md:text-right`}
            >
              Advocating for{" "}
              <span className={`${playfair_display.className} text-yellow-600`}>
                Diaspora
              </span>{" "}
              Rights and Economic Well-being of{" "}
              <span className={`${playfair_display.className} text-yellow-600`}>
                Ghanaians
              </span>{" "}
              .
            </div>
            <div className="w-full md:w-6/12 bg-white dark:bg-neutral-900 h-auto p-4 md:p-8 rounded-3xl text-md flex justify-center items-center">
              GDUE&apos;s mission is advocating for the rights and welfare of
              Ghanaians in diaspora, facilitating economic well-being,
              networking, providing support, and undertaking initiatives for
              community development and integration.
            </div>
          </div>
        </div>
      </section>

      <Faqs />

      <section className="md:p-8 md:min-h-[90dvh]">
        <>
          {/* Hero */}
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Grid */}
            <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
              <div className="lg:col-span-3">
                <h5 className={`${bebas.className} text-lg uppercase text-secondary tracking-wide pb-4`}>
                  Networking The Diasporan Community</h5>
                <h1 className="block text-2xl font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl dark:text-white">
                  <span className={`${bebas.className} leading-8`}>
                    
                    friendship, cultural exchange, and professional advancement
                  </span>
                </h1>
                <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
                  The Ghanaian Diaspora Union   in Europe (GDUE) is your bridge to a
                  vibrant Ghanaian community abroad. We understand the joys and
                  challenges of living in Europe, and we are here to empower
                  you. As a member of GDUE, you&apos;ll connect with a network
                  of fellow Ghanaians for friendship, cultural exchange, and
                  professional advancement.
                </p>

                <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                  {/* <div className="w-full sm:w-auto">
                    <label htmlFor="hero-input" className="sr-only">
                      Search
                    </label>
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      className="py-3 px-4 block w-full xl:min-w-72 border-gray-200 rounded-md text-sm focus:border-yellow-500 focus:ring-yellow-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter work email"
                    />
                  </div> */}
                  <Link href={'/services'}>
                    <Button className='uppercase rounded-none' size='lg' color="secondary" variant="solid"
                      endContent={<LucideArrowUpRight className='bg-warning  text-white' />}>
                      <span className='text-sm'>View Services</span>
                    </Button>
                  </Link>
                </div>

                {/* Brands */}

                {/* End Brands */}
              </div>
              {/* End Col */}

              <div className="lg:col-span-4 mt-10 lg:mt-0">
                <Image
                  width={700}
                  height={700}
                  className="w-full rounded-xl"
                  src="/images/festival.jpg"
                  alt="Image Description"
                />
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Hero */}
        </>
      </section>

      <section className="hidden h-auto md:px-4 md:py-24 py-8  mx-auto min-h-[50dvh]  flex-col justify-center  text-center ">
        <div className="flex flex-col md:flex-auto md:justify-between items-center">
          <div className={` font-semibold flex justify-start items-center`}>
            <span className=" text-xl md:text-7xl">We proudly </span>
            <span className="px-4">
              <Image
                src="/images/kente.jpg"
                alt="alt"
                width={120}
                height={180}
                className=" rounded-5xl bg-no-repeat bg-center bg-cover"
              />
            </span>{" "}
            <span className="text-xl md:text-7xl">Work</span>
          </div>
          {/* <div className="text-right text-4xl">
          Your bridge to a vibrant Ghanaian<br />
           community abroad. 
            
          </div> */}
        </div>
      </section>
      <section
        className=" h-auto md:px-24 md:py-4   mx-auto min-h-[70dvh]
      flex flex-col justify-center items-center space-y-5  "
      >
        <div className="text-md max-w-3xl">
          The Ghanaian Diaspora Union   in Europe (GDUE) is your bridge to a vibrant
          Ghanaian community abroad. We understand the joys and challenges of
          living in Europe, and we are here to empower you. As a member of GDUE,
          you&apos;ll connect with a network of fellow Ghanaians for friendship,
          cultural exchange, and professional advancement. <br /> <br />
          <span className="font-bold">Empowerment and Opportunity:</span> GDUE
          offers a variety of programs to help you thrive in Europe. We advocate
          for your rights and fair treatment, ensuring your voice is heard. Our
          workshops and training sessions equip you with valuable skills to
          excel in your career, while mentorship opportunities connect you with
          experienced professionals. <br /> <br />
          <span className="font-bold">Economic Benefits:</span> Being a GDUE
          member opens doors to economic opportunities. We provide access to
          business networks, financial literacy programs, and mentorship
          specifically geared towards helping you succeed financially. Whether
          you&apos;re seeking employment or pursuing entrepreneurial ventures,
          GDUE empowers you to achieve your goals.
          <br /> <br />
          <span className="font-bold">Together We Rise:</span> Beyond the
          professional sphere, GDUE fosters a strong sense of community. We
          organize cultural events and celebrations to keep Ghanaian traditions
          alive and share them with others in Europe. Through social gatherings
          and networking events, you&apos;ll build lasting friendships and feel
          a sense of belonging. Join GDUE and experience the difference &mdash;
          together we can build a brighter future for Ghanaians living in
          Europe.
        </div>
      </section>
      <Newsletter />
    </div>
  );
}
