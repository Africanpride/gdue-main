import { title } from "@/components/primitives";
import {
  bebas,
  ibm_plex_sans_condense,
  playfair_display,
  poppins,
} from "@/config/fonts";
import { Image } from "@nextui-org/image";
import {
  ArrowBigRightDash,
  ArrowRightCircleIcon,
  ArrowRightFromLine,
  ArrowUpRightSquareIcon,
} from "lucide-react";
import Link from "next/link";
import { Library } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <section className="h-auto min-h-[60dvh] flex flex-col justify-end">
        <div className="w-full container mx-auto grid md:grid-cols-2 gap-4">
          <div className="space-y-3 w-full md:max-w-2xl">
            <div className="py-3 flex items-center text-sm text-gray-800 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-white dark:after:border-neutral-600  uppercase space-x-2">
              <span>
                <ArrowRightCircleIcon className="text-yellow-500" />
              </span>{" "}
              <span className="font-bold"> About G.D.U.E</span>
            </div>
            <h3 className="text-4xl md:text-5xl capitalize font-extrabold">
              Home in Europe &mdash; Ghana{" "}
              <span className={`${playfair_display.className} text-yellow-600`}>
                Diaspora
              </span>{" "}
              Union
            </h3>
            <p>
              The Ghana Diaspora Union in Europe (GDUE) is your bridge to a
              vibrant Ghanaian community abroad. We understand the joys and
              challenges of living in Europe, and we are here to empower you. As
              a member of GDUE, you&apos;ll connect with a network of fellow
              Ghanaians for friendship, cultural exchange, and professional
              advancement.
            </p>
          </div>
          <div className="hidden text-center h-full bg-slate-500  justify-center items-center">
            Image
          </div>
        </div>
      </section>



      <section
        className="bg-neutral-300/30 dark:bg-neutral-900 h-auto min-h-dvh -mx-12 p-4 md:p-24 
      flex flex-col justify-center"
      >
        <div>
          <div className="w-full md:flex md:space-x-5 p-5">
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
            <div className="w-full md:w-6/12 bg-white dark:bg-neutral-800 h-auto p-4 md:p-6 rounded-3xl text-md flex justify-center items-center">
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

          <div className="w-full md:flex md:space-x-5 p-5">
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
            <div className="w-full md:w-6/12 bg-white dark:bg-neutral-800 h-auto p-4 md:p-6 rounded-3xl text-md flex justify-center items-center">
              GDUE&apos;s mission is advocating for the rights and welfare of
              Ghanaians in diaspora, facilitating economic well-being,
              networking, providing support, and undertaking initiatives for
              community development and integration.
            </div>
          </div>
        </div>
      </section>

      <section
        className=" h-auto min-h-dvh -mx-12 p-4 md:px-24 md:py-4 
      flex flex-col justify-center items-center"
      >
        <div className="text-md max-w-2xl">
          The Ghana Diaspora Union in Europe (GDUE) is your bridge to a vibrant
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
    </div>
  );
}
