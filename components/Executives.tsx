import { bebas } from '@/config/fonts'
import { Avatar } from '@nextui-org/react'
import React from 'react'
import AnimatedSections from './AnimatedSections'
import { executiveMembers } from '@/config/site'

type Props = {}

const Executives = (props: Props) => {

    return (
        <AnimatedSections className=" bg-neutral-100 dark:bg-neutral-950 h-auto md:min-h-dvh md:-mx-12 p-4 md:p-8 
    flex flex-col justify-center space-y-6">

            <div className='py-6 md:py-12'>
                <div className="max-w-3xl space-y-3 md:p-10 mb-5">
                    <div className={`${bebas.className} leading-8`}>

                        <span className="block text-2xl  text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">
                            Our Executives
                        </span>
                    </div>
                    <p>
                        Meet the dynamic leadership of the Ghanaian Diaspora Union in Europe (GDUE). These executives are committed to empowering the Ghanaian community in Europe, fostering unity, and driving initiatives for positive growth and development.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 gap-x-4 md:gap-y-10">

                    {executiveMembers.map((executive, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <Avatar radius={"full"} src={executive.image} size={'lg'} className=" md:w-28 md:h-28 text-large" />
                            <div className="text-center">
                                <div className='capitalize'>
                                    {executive.name}
                                </div>
                                <div className="text-xs">
                                    {executive.title}
                                </div>
                            </div>
                        </div>
                    ))}


                </div>

            </div>

        </AnimatedSections>
    )
}

export default Executives