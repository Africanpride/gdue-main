import React from 'react';
import { dark } from '@clerk/themes';
import { Button } from '@nextui-org/button';
import { LucideArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Intro = () => {
    return (
        <div className="container mx-auto px-4 md:px-8 py-8 space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <p className="text-gray-700">
                        The Ghanaian Diaspora Union in Europe (GDUE) connects you with a dynamic Ghanaian community abroad, offering essential support and empowerment. Living in Europe, while exciting and full of opportunities, also presents unique joys and challenges. GDUE is here to help you navigate these experiences with confidence and ease. 
                        <br />
                        <br />
                        As a member, you will become part of a vibrant network of fellow Ghanaians who share your background and experiences. Whether you&apos;re seeking career advice, looking for cultural events, or simply wanting to connect with others who understand your journey, GDUE is here for you.
                    </p>
                </div>
                <div>
                    <p className="text-gray-700">
                        We strive to create a sense of belonging and offer opportunities for members to thrive in both their personal and professional lives. Join GDUE and strengthen your ties to the Ghanaian community in Europe, making your experience abroad more fulfilling and connected.   Our organization is dedicated to fostering meaningful friendships, facilitating cultural exchange, and promoting professional advancement.
                        <br />
                        <br />
                       We organize various events and activities designed to bring our community together, celebrate our rich heritage, and provide avenues for personal and career growth. GDUE also offers resources and guidance to help you adapt to life in Europe, ensuring you never feel alone or unsupported.
                    </p>
                </div>
            </div>
            <Link href={'/about'}>
                <Button className='uppercase rounded-none' size='lg' color="secondary" variant="solid" 
                 endContent={<LucideArrowUpRight className='bg-warning  text-white' />}>
                <span className='text-sm'>Read More About GDUE</span>
                </Button> 
            </Link>
        </div>
    );
};

export default Intro;
