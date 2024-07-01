/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react';
import { useUser } from "@clerk/clerk-react";

type Props = {};

const DashboardIntro = (props: Props) => {
    const { user, isLoaded } = useUser();
    const [uniqueId, setUniqueId] = useState<string | null>(null);

    useEffect(() => {
        const generateUniqueId = async () => {
            if (!user) return;

            const response = await fetch("/api/user/diasporaID", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId: user.id })
            });

            if (response.ok) {
                const data = await response.json();
                const updatedUniqueId = data.response.publicMetadata.uniqueId as string; // Explicitly casted to string
                setUniqueId(updatedUniqueId);
            } else {
                console.error("Failed to generate uniqueId");
            }
        };

        if (isLoaded && user) {
            const identity = user?.publicMetadata?.uniqueId;
            if (identity) {
                setUniqueId(identity as string);
            } else {
                generateUniqueId();
            }
        }
    }, [isLoaded, user]);

    return (
        <section className="flex justify-start items-start space-y-3 md:w-1/2">
            <div className=' dark:border-neutral-900 rounded-3xl bg-neutral-200 dark:bg-neutral-900 p-2'>
                <div className=" rounded-2xl overflow-hidden shadow bg-white dark:bg-neutral-950 p-2 md:p-2">


                    <div className='w-full flex md:flex-row flex-col items-start justify-center md:justify-between space-y-4'>
                        <div>

                            <img className="h-16 w-16 block text-center md:inline-block rounded-full " src={isLoaded ? user?.imageUrl : "https://via.placeholder.com/64"} alt="Profile Picture" />

                        </div>
                        <div>
                            <table className='w-full '>
                                {/* <caption>Project Information</caption> */}
                                <tbody>
                                    <tr>
                                        <th scope="row" className='text-left'>Name:</th>
                                        <td className='text-right'>{isLoaded ? user?.fullName : "Loading ...."}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className=''>ID Number:</th>
                                        <td className='whitespace-nowrap flex gap-x-4 items-center pl-10'>
                                            <div> {uniqueId ? uniqueId : "Loading..."}</div>
                                            <img className="w-6 h-4" src="https://flagcdn.com/w20/gh.png" alt="Ghana Flag" /></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>


                    <p className="mt-4 text-gray-600">
                        Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.
                    </p>
                    <div className="mt-4 flex flex-col space-y-3">
                        <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700">
                            Request For Physical GDUE ID Card
                        </button>
                        <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300">Edit Profile</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardIntro;
