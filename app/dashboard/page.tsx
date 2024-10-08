"use client";
import React from 'react';
import Jumbotron from '@/components/Jumbotron';
import MembersPage from '@/components/MembersTable';
import { useUser } from '@clerk/nextjs';

const DashboardPage: React.FC = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) return <div>Loading...</div>;
  if (!isSignedIn) return <div>Not signed in</div>;

  return (
    <div className="md:space-y-16 space-y-8">
      <Jumbotron
        heading={<span>Welcome! {user?.fullName}</span>}
        description={(
          <>
            Welcome to your <strong>GDUE Dashboard</strong>. Here, you can complete your <strong>Profile</strong> and add your <strong>business details</strong> to be featured in our Diasporan Business Directory.
            <br /><br />
            Connect with the community, enhance your visibility, and grow your network. Start by entering your business information and join a vibrant network of Ghanaian entrepreneurs.
          </>
        )}
        linkText="Watch our story"
        linkHref="#"
        backgroundImage="/images/cargo2.jpg"
        hideVideo={false}
      />
      <MembersPage />
    </div>
  );
};

export default DashboardPage;
