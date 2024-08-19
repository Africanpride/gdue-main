import IdentityCard from "@/components/IdentityCard";
import Jumbotron from "@/components/Jumbotron";
import React from "react";


type Props = {};

const page = (props: Props) => {


  return (
    <div className="md:space-y-16">

      <Jumbotron
        heading="Empower Our Community with Your Donation"
        description={(<>

          Join us in making a lasting impact! Your generous donation to GDUE supports vital programs that empower Ghanaians in the diaspora through advocacy, education, and community building. Together, we can create opportunities and strengthen our vibrant community.<br />
          <br /> With your support, we can continue to advocate for the rights and welfare of Ghanaians, offer educational and empowerment initiatives, and foster a sense of belonging through cultural celebrations and networking opportunities. Donate now and be a part of our mission for positive change, making a difference in the lives of many and contributing to a brighter future.
        </>)}
        linkText="Watch our story"
        linkHref="#"
        backgroundImage="/images/donate.jpg"
        hideVideo={false}
      />
      <IdentityCard />
      <div className={` text-4xl font-bold`}>More information coming soon ...</div>
    </div>
  );
};

export default page;
