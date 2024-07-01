/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import {
    useUser,
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from '@clerk/nextjs';
import { courier } from '@/config/fonts';

type Props = {}

const DashboardIntro = (props: Props) => {
    const { user, isSignedIn, isLoaded } = useUser();
    return (
        <section className="flex justify-start items-start h-screen">
            <div className='border border-neutral-300 dark:border-neutral-900 rounded-3xl bg-slate-300 dark:bg-neutral-900 p-4'>
                <div className="max-w-lg rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-neutral-950 p-6">
                    <div className="flex items-center justify-between">
                        <div className='flex items-center'>
                            <img className="w-16 h-16 rounded-full mr-4" src={isLoaded ? user?.imageUrl : "https://via.placeholder.com/64"} alt="Profile Picture" />
                            <div>
                                <h2 className="text-xl font-semibold">{isLoaded ? user?.fullName : "Loading ...."}</h2>
                                <div className="flex items-center">
                                    <span className="inline-block h-4 w-4 rounded-full bg-green-500 mr-2" />
                                </div>
                            </div>
                        </div>
                        <div className='font-bold flex items-center gap-x-2'>
                            <div>ID Number:   90-6635-GHA</div>
                            <img className="w-6 h-4" src="https://flagcdn.com/w20/gh.png" alt="Italy Flag" />
                        </div>
                    </div>
                    <p className="mt-4 text-gray-600">

                        Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.
                    </p>
                    <div className="mt-4 flex flex-col space-y-3">
                        <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700">
                            Request For Physical ID Card
                        </button>

                        <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300">Edit Profile</button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default DashboardIntro