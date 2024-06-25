// app/dashboard/page.tsx
import Jumbotron from '@/components/Jumbotron';
import { currentUser } from '@clerk/nextjs/server';
import React from 'react';

type Props = {
  user: {
    firstName: string;
  } | null;
};

const DashboardPage = async () => {
  const user = await currentUser();

  if (!user) {
    return <div>Not signed in</div>;
  }

  return (
    <div className="md:space-y-16">
      <Jumbotron
        heading={(<>Welcome! {user?.firstName} {user?.lastName}</>)}
        description={(<>  Welcome to your <strong>GDUE Dashboard</strong>. Here, you can complete your <strong>Profile</strong> add and manage your <strong>business details</strong> to be featured in our Diasporan Business Directory. <br /> <br />Connect with the community, enhance your visibility, and grow your network. Start by entering your business information and join a vibrant network of Ghanaian entrepreneurs
        </>)}
        linkText="Watch our story"
        linkHref="#"
        backgroundImage="/images/cargo2.jpg"
        hideVideo={false}
      />
    </div>
  );
};

export default DashboardPage;
