import EventCard from "@/components/EventCard";
import IdentityCard from "@/components/IdentityCard";
import Jumbotron from "@/components/Jumbotron";
import Newsletter from "@/components/Newsletter";
import { sourceCodePro700 } from "@/config/fonts";
import React from "react";


type Props = {};

const page = (props: Props) => {


  return (
    <div className="md:space-y-16">

      <Jumbotron
        heading="Empower Our Community with Your Donation"
        description={(<>  Join us in making a lasting impact! Your generous donation to GDUE supports vital programs that empower Ghanaians in the diaspora through advocacy, education, and community building. Together, we can create opportunities and strengthen our vibrant community. Donate now and be a part of our mission for positive change
          </>)}
        linkText="Watch our story"
        linkHref="#"
        backgroundImage="/images/donate.jpg"
        hideVideo={false}
      />
      <IdentityCard />
      <div className={`${sourceCodePro700} text-4xl font-bold`}>More information coming soon ...</div>
    </div>
  );
};

export default page;
