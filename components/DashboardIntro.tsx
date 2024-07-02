/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from 'react';
// import { useUser } from "@clerk/clerk-react";
import { UserButton, useUser } from '@clerk/nextjs';

type Props = {};

const DashboardIntro: React.FC<Props> = () => {
    const { isSignedIn, user, isLoaded } = useUser();
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
                setUniqueId(data.uniqueId);
            } else {
                console.error("Failed to generate uniqueId");
            }
        };

        if (isLoaded && user) {
            const identity = user?.publicMetadata?.uniqueId;
            if (!identity) {
                generateUniqueId();
            } else {
                setUniqueId(identity as string);
            }
        }
    }, [isLoaded, user]);

    //   if (!isLoaded) {
    //     return <div>Loading...</div>;
    //   }

    //   if (!isSignedIn) {
    //     return <div>Not signed in</div>;
    //   }

    const profileDetails = user?.publicMetadata?.profileDetails as string;

    return (
        <section className="flex justify-start items-start space-y-3 w-full">
            <div className='dark:border-neutral-900 rounded-3xl bg-neutral-200 dark:bg-neutral-900 p-2 md:w-1/2'>
                <div className="rounded-2xl overflow-hidden shadow bg-white dark:bg-neutral-950 p-4 md:p-2">
                    <div className='w-full flex md:flex-row flex-col items-start justify-center md:justify-between space-y-4'>
                        <div>
                            <img className="h-16 w-16 block text-center md:inline-block rounded-full" src={isLoaded ? user?.imageUrl : "https://via.placeholder.com/64"} alt="Profile Picture" />
                        </div>
                        <div>
                            <table className='w-full'>
                                <tbody>
                                    <tr>
                                        <th scope="row" className='text-left'>Name:</th>
                                        <td className='text-right'>{isLoaded ? user?.fullName : "Loading ...."}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className=''>ID Number:</th>
                                        <td className='whitespace-nowrap flex gap-x-4 items-center pl-10'>
                                            <div>{uniqueId ? uniqueId : "Loading..."}</div>
                                            <img className="w-6 h-4" src="https://flagcdn.com/w20/gh.png" alt="Ghana Flag" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p className="mt-4 text-gray-600">
                        {profileDetails}
                    </p>
                    <div className="mt-4 flex flex-col space-y-3">
                        <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700">
                            Request For Physical GDUE ID Card
                        </button>
                        <UserButton
                            appearance={{
                                elements: {
                                    userButtonAvatarBox: {
                                        width: '3rem',
                                        height: '3rem'
                                    }
                                }
                            }}
                            userProfileMode="modal"
                            afterSignOutUrl="/"
                        />
                        <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300">Edit Profile</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardIntro;
