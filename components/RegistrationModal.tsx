"use client"
import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Autocomplete, AutocompleteItem } from "@nextui-org/react";
import MainLogo from '@/ui/GDUELogo';
import { playfair_display } from '@/config/fonts';
import { currentUser } from '@clerk/nextjs/dist/types/server';
import { europeanCountries } from '@/config/site';


type Props = {}

const RegistrationModal = (props: Props) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <Button onPress={onOpen} size="sm" color="warning" className='text-[14px] text-white'>Join GDUE</Button>

            {/* <ul className="">
                    <li onClick={onOpen} className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold"><a className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-80 active:opacity-disabled transition-opacity data-[active=true]:text-default data-[active=true]:font-medium hover:text-yellow-600" color="foreground" href="/join">Join Us</a></li>
                </ul> */}
            <Modal placement={'top'} backdrop={'blur'} size={'5xl'} className='rounded-2xl'
                isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}
                radius="lg"

                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                            },
                        },
                        exit: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: "easeIn",
                            },
                        },
                    }
                }}
            >
                <ModalContent className="bg-white dark:bg-slate-950">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 p-4">Register to join G.D.U.E</ModalHeader>
                            <ModalBody>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <MainLogo />
                                        <div className="md:text-md text-sm md:leading-4 px-2 border-s">
                                            Ghanaian Diaspora
                                            <br />
                                            Union in{" "}
                                            <span className={`${playfair_display.className}`}>
                                                Europe
                                            </span>{" "}
                                        </div>
                                    </div>

                                    <div>
                                        {/* Slogan */}
                                        <div className='italic text-[1.4rem] '>Together We Stand, Divided We Fall! All For One, One For All!</div>
                                    </div>

                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                </p>
                                <form className="" action="" method="">
                                    <div className='space-y-2'>

                                        <div className='flex flex-wrap gap-2 w-full'>
                                            <Input
                                                key={'default'}
                                                type="firstName"
                                                // color={'default'}
                                                label="First Name"
                                                placeholder="Enter your First Name"
                                                // defaultValue={`${ 'eg. Mensah'} `}
                                                className="md:max-w-[220px] flex-1"
                                            />
                                            <Input
                                                key={'default'}
                                                type="firstName"
                                                color={'default'}
                                                label="Last Name"
                                                placeholder="Enter your Last Name"
                                                // defaultValue={`${ 'eg. Mensah'} `}
                                                className="md:max-w-[220px]"
                                            />
                                            <Input
                                                autoComplete={'true'}
                                                key={'default'}
                                                type="email"
                                                color={'default'}
                                                label="Email Address"
                                                placeholder="Enter your Email Address"
                                                // defaultValue={`${ 'eg. Mensah'} `}
                                                className="md:max-w-[220px]"
                                            />
                                            <Input
                                                key={'default'}
                                                type="telephone"
                                                color={'default'}
                                                label="Telephone"
                                                placeholder="Enter your Cellphone Number"
                                                // defaultValue={`${ 'eg. Mensah'} `}
                                                className="md:max-w-[220px]"
                                            />
                                        </div>
                                        <div className='flex flex-wrap gap-2 '>
                                            <Input
                                                key={'default'}
                                                type="address"
                                                color={'default'}
                                                label="Current Address"
                                                placeholder="Enter your Current Address and Apartment Number"
                                                // defaultValue={`${ 'eg. Mensah'} `}
                                                className="md:max-w-[220px]"
                                            />
                                            <Input
                                                key={'default'}
                                                type="spouseName"
                                                color={'default'}
                                                label="Spouse Name"
                                                placeholder="Name of Spouse"
                                                // defaultValue={`${ 'eg. Mensah'} `}
                                                className="md:max-w-[220px]"
                                            />
                                            <Input
                                                key={'default'}
                                                type="fatherName"
                                                color={'default'}
                                                label="Father's Name"
                                                placeholder="Enter your Father's Name"
                                                // defaultValue={`${ 'eg. Mensah'} `}
                                                className="md:max-w-[220px]"
                                            />
                                            <Input
                                                key={'default'}
                                                type="motherName"
                                                color={'default'}
                                                label="Mother's Name"
                                                placeholder="Enter your Mother's Name"
                                                // defaultValue={`${ 'eg. Mensah'} `}
                                                className="md:max-w-[220px]"
                                            />
                                            <Input
                                                autoComplete={'true'}
                                                key={'default'}
                                                type="emergencyContact"
                                                color={'default'}
                                                label="Emergency Contact"
                                                placeholder="Name of Emergency Contact"
                                                // defaultValue={`${ 'eg. Mensah'} `}
                                                className="md:max-w-[220px]"
                                            />
                                            <Input
                                                key={'default'}
                                                type="telephone"
                                                color={'default'}
                                                label="Emergency Contact Telephone"
                                                placeholder="Emergency Contact Telephone Number"
                                                // defaultValue={`${ 'eg. Mensah'} `}
                                                className="md:max-w-[220px]"
                                            />
                                            <Autocomplete
                                                isRequired
                                                label="European Country"
                                                defaultItems={europeanCountries}
                                                placeholder="Select Country in Europe"
                                                defaultSelectedKey="cat"
                                                className="md:max-w-[220px]"
                                            >
                                                {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                                            </Autocomplete>
                                        </div>
                                    </div>
                                </form>
                                <p>
                                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                    dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                    Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                    Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Submit
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default RegistrationModal