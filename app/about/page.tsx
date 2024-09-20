/* eslint-disable @next/next/no-img-element */
"use client"
import {
  bebas,
  playfair_display,
} from "@/config/fonts";
import { Image } from "@nextui-org/image";
import { Button } from '@nextui-org/button';

import Link from "next/link";
import { LucideArrowUpRight } from "lucide-react";
import Faqs from "@/components/Faqs";
import Newsletter from "@/components/Newsletter";
import Divider from "@/ui/Divider";
import Jumbotron from "@/components/Jumbotron";
import { useAnimationContext } from "@/components/AnimationContext";
import { useEffect, useRef } from "react";
import AnimatedSections from "@/components/AnimatedSections";
import AnimatedDivTag from "@/components/AnimatedDivTag";
import AboutFaqs from "@/components/AboutFaqs";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import Executives from "@/components/Executives";

export default function AboutPage() {
  const { observe } = useAnimationContext();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      observe(sectionRef.current);
    }
  }, [observe]);

  return (
    <div className="md:space-y-16 space-y-8">
      <Jumbotron
        heading="The Ghanaian Diaspora Union   in Europe (GDUE)"
        description={(<>   There&apos;s something special about being around people who understand you. GDUE  creates opportunities for Ghanaians to connect and build friendships.</>)}
        linkText="Watch our story"
        linkHref="#"
        backgroundImage="/images/berlin.jpg"
        hideVideo={false}
      />

      {/* <Divider title={'About G.D.U.E'} /> */}

      <AnimatedSections className="flex flex-col h-auto">
        <div className="max-w-3xl container mx-auto grid  gap-4">
          <div className="space-y-3 w-full   animate-fade-up animate-once animate-ease-out animate-normal animate-fill-forwards">

            <h3
              className={` text-2xl md:text-5xl capitalize font-extrabold`}
            >
              Home in Europe &mdash; The Ghana <br />
              <span className={`${playfair_display.className} text-yellow-600`}>
                Diaspora
              </span>{" "}
              Union in <span className={`${playfair_display.className} text-yellow-600`}>
                Europe
              </span>{" "}
            </h3>
            <p ref={sectionRef}>
              Join the Ghanaian Diaspora Union   in Europe (GDUE) to connect with a thriving Ghanaian community abroad. We recognize the unique experiences of living in Europe and are dedicated to supporting you. As a GDUE member, you&apos;ll build friendships, engage in cultural exchanges, and advance your career with a network of fellow Ghanaians.
            </p>
          </div>
          <div className="hidden text-center h-full bg-slate-500/25  justify-center items-center">
            Image
          </div>
        </div>
      </AnimatedSections>


      <section
        className=" bg-neutral-100 dark:bg-neutral-950 h-auto min-h-dvh -mx-12 p-4 md:p-8 
      flex flex-col justify-center"
      >
        <div>
          <div className="w-full md:flex md:space-x-5 p-6">
            <div
              className={` w-full md:w-6/12 text-2xl md:text-4xl md:p-4 md:pt-3 md:text-right`}
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
            <div className="w-auto md:w-6/12 md:bg-white dark:bg-neutral-900 h-auto md:p-6 rounded-3xl text-md md:flex justify-center items-center">
              Our Vision is to foster unity among Ghanaians in the diaspora by,
              promoting cultural pride, economic empowerment, and social
              cohesion, thus enhancing the well-being of our members and
              contributing to Ghana&apos;s development.
            </div>
          </div>

          <div className="relative h-auto min-h-[50dvh] md:min-h-[30dvh] w-full flex flex-col justify-center items-center px-4 ">
            <div className="px-4 py-12">
              <Image src={'/images/map.png'}
                alt="alt"
                width={1728}
                height={650}
                style={{
                  width: '100%',
                  height: 'auto',
                }} />
            </div>


            <div className="absolute inset-0  items-center justify-center hidden">
              <div
                className={`${bebas.className} bg-cover bg-center  text-7xl md:text-[12rem] font-extrabold text-transparent`}
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

          <div className="md:flex md:space-x-5 p-6 w-full">
            <div
              className={` w-full md:w-6/12 text-2xl md:text-4xl md:p-4 md:pt-3 md:text-right`}
            >
              Advocating for{" "}
              <span className={`${playfair_display.className} text-yellow-600`}>
                Diaspora
              </span>{" "}
              Rights and Economic Well-being of{" "}
              <span className={`${playfair_display.className} text-yellow-600`}>
                Ghanaians
              </span>{" "}

            </div>
            <div className="w-auto md:w-6/12 md:bg-white dark:bg-neutral-900 h-auto md:p-6 rounded-3xl text-md md:flex justify-center items-center">
              GDUE&apos;s mission is advocating for the rights and welfare of
              Ghanaians in diaspora, facilitating economic well-being,
              networking, providing support, and undertaking initiatives for
              community development and integration.
            </div>
          </div>
        </div>
      </section>
      <AnimatedSections
        className=" h-auto md:px-24 md:py-4   mx-auto min-h-[70dvh]
      flex flex-col justify-center items-center space-y-5  "
      >
        <div className="text-md max-w-3xl mx-auto">
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
      </AnimatedSections>


      <AnimatedSections className="md:p-8 md:min-h-[90dvh]">
        <>
          {/* Hero */}
          <div className="max-w-[85rem] mx-auto sm:px-6 lg:px-8">
            {/* Grid */}
            <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
              <div className="lg:col-span-3">
                {/* <h5 className={`${bebas.className} `}>
                  <span className="text-lg uppercase text-warning tracking-wide pb-4 py-3 flex items-center  after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:after:border-neutral-600">Networking The Diasporan Community</span>
                </h5> */}
                <h1 className="block text-2xl font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl dark:text-white">
                  <span className={`${bebas.className} leading-8`}>

                    friendship, cultural exchange, and professional advancement
                  </span>
                </h1>
                <p ref={sectionRef} className="mt-3  text-gray-800 dark:text-neutral-400">
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
                      endContent={<LucideArrowUpRight className='bg-green-500  text-white' />}>
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
                  // fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
      </AnimatedSections>

      <div className="hidden h-auto md:px-4 md:py-24 py-8  mx-auto min-h-[50dvh]  flex-col justify-center  text-center ">
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


      </div>
      <AnimatedSections className="md:p-8 md:min-h-[80vh] flex flex-col justify-center">
        <AboutFaqs />
      </AnimatedSections>
      <Executives />
      <Newsletter />
    </div>
  );
}