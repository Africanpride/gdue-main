import Jumbotron from "@/components/Jumbotron";
import { sourceCodePro700 } from "@/config/fonts";
import React from "react";


type Props = {};

const page = (props: Props) => {

  return (
    <div className="md:space-y-16">

      <Jumbotron
        heading="News & Updates: Stay Connected"
        description={(<>  Welcome to the GDUE News section! Here, you&apos;ll find the latest updates and insights on events, initiatives, and community engagements from the Ghanaian Diaspora Union in Europe. Stay informed about our advocacy efforts, cultural celebrations, educational programs, and economic empowerment initiatives.<br /><br /> This section is dedicated to keeping you connected with the vibrant activities and achievements of GDUE, highlighting our mission to promote unity, cultural pride, and economic well-being among Ghanaians in the diaspora. Join us in celebrating our community and stay updated on our journey toward a brighter future.
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
