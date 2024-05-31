import { title } from "@/components/primitives";
import { bebas, ibm_plex_sans_condense } from "@/config/fonts";
import { Image } from "@nextui-org/image";


export default function AboutPage() {
  return (
    <main className={`${ibm_plex_sans_condense.className} flex min-h-screen flex-col items-center justify-center `}>
      <section className="body-font dark:text-white">
        <div className="container  py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/3 w-full mb-6 lg:mb-0">
              <h1 className={`${bebas.className} sm:text-3xl md:text-5xl font-medium title-font mb-2`}>
                Discover GDUE&apos;s Mission
              </h1>
              <div className="h-1 w-20 bg-yellow-500 rounded" />
            </div>
            <p className="lg:w-2/3 w-full leading-relaxed md:text-2xl ">

              Learn about GDUE&apos;s mission to unite Ghanaians in Europe. We
              promote cultural pride, economic empowerment, and social cohesion
              while advocating for the rights and welfare of our diverse and
              vibrant community.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className=" md:flex items-center  gap-x-4 gap-y-8">
              <div className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h3 className="tracking-widest text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg font-medium title-font mb-4">
                  Chichen Itza
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h3 className="tracking-widest text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg font-medium title-font mb-4">
                  Chichen Itza
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h3 className="tracking-widest text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg font-medium title-font mb-4">
                  Chichen Itza
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
              <div className="bg-neutral-100 dark:bg-neutral-900 p-2 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h3 className="tracking-widest text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg font-medium title-font mb-4">
                  Chichen Itza
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
