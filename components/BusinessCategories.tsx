import { LucideListMinus, LucideSquareChevronRight } from 'lucide-react';
import React from 'react';

type Props = {};

const jobCategories = [
    { title: 'Transport & Logistics', Listings: '4  listings' },
    { title: 'Health & Medicine', Listings: '26  listings' },
    { title: 'Automotive', Listings: '9  listings' },
    { title: 'Computers & Electronics', Listings: '11  listings' },
    { title: 'Food & Clothing', Listings: '37  listings' },
    { title: 'Services', Listings: '2  listings' },
    { title: 'Real Estate', Listings: '10  listings' },
    { title: 'Wholesale Distribution', Listings: '14  listings' },
];

const BusinessCategories = (props: Props) => {
    return (
        <>
            {/* Card Section */}
            <div className="w-full max-w-4xl mx-auto text-center">
                <h2 className="text-xl">
                Discover and support Ghanaian-owned businesses across Europe! Our directory connects you with a vibrant community of entrepreneurs.  Empower your fellow Ghanaians and foster economic connections within the diaspora. 
                </h2>
            </div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-10 lg:px-16 lg:py-14 mx-auto">
                {/* Grid */}
                { /* Title */}
                { /* End Title */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
                    {/* Cards */}
                    {jobCategories.map((category, index) => (
                        <a
                            key={index}
                            className="group flex flex-col bg-white border-yellow-600/35 border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
                            href="#"
                        >
                            <div className="p-4 md:p-5">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="group-hover:text-yellow-600 font-semibold text-neutral-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                                            {category.title}
                                        </h3>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-500">
                                            {category.Listings}
                                        </p>
                                    </div>
                                    <div className="ps-3">
                                        <LucideSquareChevronRight className='text-yellow-600' />
                                        {/* <svg
                      className="flex-shrink-0 size-5 text-neutral-800 dark:text-neutral-200"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg> */}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                    {/* End Cards */}
                </div>
                {/* End Grid */}
            </div>
            {/* End Card Section */}
        </>
    );
};

export default BusinessCategories;
