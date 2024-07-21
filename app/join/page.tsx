import EventCard from "@/components/EventCard";
import Jumbotron from "@/components/Jumbotron";
import Newsletter from "@/components/Newsletter";
import { sourceCodePro700 } from "@/config/fonts";
import React from "react";


type Props = {};

const JoinPage = (props: Props) => {

  return (
    <div className="md:space-y-16">

      <Jumbotron
        heading="Diasporan Events Information"
        description={(<>  Learn more about Ghana Diasporan events and {" "}
          <span className="text-yellow-600 font-bold">
          participation Details. 
          </span>{" "}
          </>)}
        linkText="Watch our story"
        linkHref="#"
        backgroundImage="/images/accra-fishing.jpg"
        hideVideo={false}
      />
      <div className={`${sourceCodePro700} text-4xl font-bold`}>More information coming soon ...</div>
    </div>
  );
};

export default JoinPage;
