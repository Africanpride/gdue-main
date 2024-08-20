import Jumbotron from "@/components/Jumbotron";
import Newsletter from "@/components/Newsletter";
import { Button } from "@nextui-org/button";
import { LucideArrowUpRight, LucideBitcoin, LucideCombine, LucideEuro, LucideMerge } from "lucide-react";
import Link from "next/link";
import React from "react";


type Props = {};

const page = (props: Props) => {

  return (
    <div className="md:space-y-16">

      <Jumbotron
        heading="Share Your Business?"
        description={(<>  Learn more about sharing your business with the{" "}
          <span className="text-yellow-600 font-bold">
            Ghana diasporan
          </span>{" "}
          community.</>)}
        linkText="Watch our story"
        linkHref="#"
        backgroundImage="/images/service.jpg"
        hideVideo={false}
      />
      <section className=" w-full  py-10 grid grid-cols-12 gap-6 md:gap-0 z-20">
        <div className="flex flex-col gap-2 col-span-12 md:col-span-6">
          <div className="flex flex-col">
            <h1 className="tracking-tight font-semibold text-[2.5rem] lg:text-3xl inline">
              Empower, Connect, Thrive Abroad
            </h1>

          </div>
          <p className="w-full md:max-w-xl my-2 font-normal text-default-500 block max-w-full md:w-full text-base lg:text-lg">
            The Ghanaian Diaspora Union   in Europe (GDUE) is your bridge to a vibrant Ghanaian community abroad. We understand the joys and challenges of living in Europe, and we are here to empower you. <br /><br />As a member of GDUE, you&apos;ll connect with a network of fellow Ghanaians for friendship, cultural exchange, and professional advancement.

          </p>
          <Link href={'/contact'}>
            <Button  className='uppercase rounded-none' size='lg' color="secondary" variant="solid"
                      endContent={<LucideArrowUpRight className='bg-green-500  text-white' />}>
              <span className='text-sm'>Get in Touch With GDUE</span>
            </Button>
          </Link>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2">
            <button
              className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-[0.97] tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
              type="button"
              role="button"
            >
              <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
                <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-yellow-500">
                  <LucideEuro width="24"
                    className="text-yellow-500" />

                </div>
                <p className="text-base font-semibold">Empowerment and Opportunity</p>
              </div>
              <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
                <p className="font-normal text-base text-default-500">
                  GDUE empowers Ghanaians in Europe with advocacy, training, mentorship, financial literacy, and business networks.
                </p>
              </div>
            </button>
            <button
              className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-[0.97] tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
              type="button"
              role="button"
            >
              <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
                <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-yellow-500">
                  <LucideBitcoin width="24"
                    className="text-yellow-500" />

                </div>
                <p className="text-base font-semibold">Economic Benefits</p>
              </div>
              <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
                <p className="font-normal text-base text-default-500">
                  GDUE membership offers business networks, financial literacy, and mentorship opportunities.
                </p>
              </div>
            </button>
            <button
              className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-[0.97] tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
              type="button"
              role="button"
            >
              <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
                <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-yellow-500">
                  <LucideCombine width="24"
                    className="text-yellow-500" />

                </div>
                <p className="text-base font-semibold">Together We Rise</p>
              </div>
              <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
                <p className="font-normal text-base text-default-500">
                  Nurture community with cultural events, networking, and lasting friendships in Europe.
                </p>
              </div>
            </button>
            <button
              className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-[0.97] tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
              type="button"
              role="button"
            >
              <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-0">
                <div className="flex justify-center p-2 rounded-full items-center bg-secondary-100/80 text-yellow-500">
                  <LucideMerge width="24"
                    className="text-yellow-500" />

                </div>
                <p className="text-base font-semibold">Thriving in The Diaspora</p>
              </div>
              <div className="relative flex w-full p-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased">
                <p className="font-normal text-base text-default-500">
                  Whether it&apos;s dealing with the government or just getting fair treatment, GDUE  will be your voice.
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>
      <Newsletter />
    </div>
  );
};

export default page;
