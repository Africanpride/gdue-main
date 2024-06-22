import EventCard from "@/components/EventCard";
import Jumbotron from "@/components/Jumbotron";
import Newsletter from "@/components/Newsletter";
import { sourceCodePro700 } from "@/config/fonts";
import React from "react";


type Props = {};

const page = (props: Props) => {

  return (
    <div className="md:space-y-16">

      <Jumbotron
        heading="Diasporan Business Directory"
        description={(<>  Explore our Diasporan Business Directory showcasing diverse businesses owned by  {" "}
          <span className="text-yellow-600 font-bold">
          Ghanaians in the diaspora. 
          </span>{" "}
          Support community entrepreneurship. {" "}
          </>)}
        linkText="Watch our story"
        linkHref="#"
        backgroundImage="/images/news.jpg"
        hideVideo={false}
      />
      <div className={`${sourceCodePro700} text-4xl font-bold`}>More information coming soon ...</div>
    </div>
  );
};

export default page;
