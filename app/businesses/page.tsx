import EventCard from "@/components/EventCard";
import Jumbotron from "@/components/Jumbotron";
import Newsletter from "@/components/Newsletter";
import { sourceCodePro700 } from "@/config/fonts";
import React from "react";


type Props = {};

const page = (props: Props) => {
  // const event = {
  //   date: {
  //     month: 'Jan',
  //     day: 13,
  //     time: '7 pm',
  //   },
  //   event: {
  //     title: '2020 National Championship',
  //     description:
  //       'The College Football Playoff (CFP) determines the national champion of the top division of college football. The format fits within the academic calendar and preserves the sport’s unique and compelling regular season.',
  //     image:
  //       'https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg',
  //     venue: 'Mercedes-Benz Superdome',
  //     logo: 'https://collegefootballplayoff.com/images/section_logo.png',
  //   },
  // };

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
        backgroundImage="/images/market.jpg"
        hideVideo={false}
      />
      <div className={`${sourceCodePro700} text-4xl font-bold`}>More information coming soon ...</div>
    </div>
  );
};

export default page;
