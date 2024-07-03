/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from 'react';
// import { useUser } from "@clerk/clerk-react";
import { UserButton, useUser } from '@clerk/nextjs';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { MailIcon, User2Icon } from 'lucide-react';


type Props = {};


const DashboardIntro: React.FC<Props> = () => {
    // handle modal
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState<string>('md')

    const sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"];


    const handleOpen = (size: string) => {
        setSize(size)
        onOpen();
    }

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
                            <UserButton
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox: {
                                            width: '4rem',
                                            height: '4rem'
                                        }
                                    }
                                }}
                                userProfileMode="modal"
                                afterSignOutUrl="/"
                            />
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

                        <button onClick={() => handleOpen('md')} className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300">
                            Edit Profile</button>
                        <Modal
                            size={'md'}
                            isOpen={isOpen}
                            onClose={onClose}
                        >
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">Update Your GDUE Profile</ModalHeader>
                                        <ModalBody>
                                            <textarea className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" rows={7} />


                                            {/* <Input
                                                autoFocus
                                                // endContent={
                                                //     <User2Icon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                                // }
                                                label="Profile Information"
                                                placeholder="Tell us about yourself"
                                                variant="bordered"
                                            /> */}
                                            <p>
                                                Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                                dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                                Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                            </p>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" variant="light" onPress={onClose}>
                                                <strong>Close</strong>
                                            </Button>
                                            <Button color="warning" onPress={onClose}>
                                                <strong>Update My Profile</strong>
                                            </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardIntro;
