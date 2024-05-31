/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { siteConfig } from "@/config/site";


export default function NotFound() {
  return (
    <>
      {/* component */}
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-4 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div className="relative">
            <div className="">
              <div className="space-y-12">
                <h1 className="my-2 text-gray-500 font-bold text-2xl">
                  Oops! You’ve wandered into the void...
                </h1>
                <p className="my-2 text-gray-500">
                  It&apos;s empty here, isn&apos;t it? Let&apos;s get you back on track. Head
                  over to our homepage and reclaim your adventure!
                </p>
                <Button
              
                as={Link}
                className={` text-sm font-bold  bg-default-100`}
                href={'/'}
                startContent={
                  <Image
                    alt="Ghana"
                    src={"/images/ghana.svg"}
                    width={30}
                    height={30}
                  />
                }
                variant="flat"
              >
                Back Home ....
              </Button>
              </div>
            </div>
            <div>
              {/* <img alt="not found" src="https://i.ibb.co/G9DC8S0/404-2.png" /> */}
            </div>
          </div>
        </div>
        <div>
          <img alt="not found" src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
    </>
  );
}
