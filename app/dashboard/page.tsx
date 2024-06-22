
//dashboard/page.tsx
import Jumbotron from '@/components/Jumbotron'
import { UserProfile } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="md:space-y-16">

      <Jumbotron
        heading="Manage Your Business Details"
        description={(<>  Welcome to your GDUE Dashboard! Here, you can easily add and manage your business details to be featured in our Diasporan Business Directory. Connect with the community, enhance your visibility, and grow your network. Start by entering your business information and join a vibrant network of Ghanaian entrepreneurs
        </>)}
        linkText="Watch our story"
        linkHref="#"
        backgroundImage="/images/cargo2.jpg"
        hideVideo={false}
      />


      </div>
  )
}

export default page