"use client"
import React, { useState } from 'react';
import {
    Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
    Button, useDisclosure, Input, Autocomplete, AutocompleteItem,
    Avatar
} from "@nextui-org/react";
import MainLogo from '@/ui/GDUELogo';
import { playfair_display } from '@/config/fonts';
import { europeanCountries } from '@/config/site';
import { useForm, SubmitHandler } from "react-hook-form";
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import axios from 'axios';
import Link from 'next/link';

type InputsData = {
    firstName: string;
    lastName: string;
    email: string;
    telephone: number;
    address: string;
    spouseName: string;
    fatherName: string;
    motherName: string;
    emergencyContact: string;
    emergencyContactTelephone: number;
    country: string;
};

const RegistrationModal: React.FC = () => {
    // const sitekey: string | undefined = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<InputsData>();
    const [isVerified, setIsVerified] = useState<boolean>(false);

    // if (!sitekey) {
    //     return null;
    // }

    async function handleCaptchaSubmission(token: string | null) {
        const response = axios.post("/api/recaptchaVerification/", { token })
            .then(function (response) {
                console.log(response)
                setIsVerified(true);
            })
            .catch(function (error) {
                setIsVerified(false);
                console.error('Verification failed:', error);
            });

    }

    const handleChange = (token: string | null) => {
        handleCaptchaSubmission(token);
    };

    const handleExpired = () => {
        setIsVerified(false);
    }

    const onSubmit: SubmitHandler<InputsData> = async (data) => {
        console.log(data);
        try {
            const response = await axios.post('/api/register/registrationForm/', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status !== 200) {
                throw new Error('Network response was not ok');
            }

            const result = response.data;
            onClose();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleAutocompleteChange = (value: string) => {
        setValue("country", value);
    };
    return (
        <>
            <Button onPress={onOpen} size="sm" color="warning" className='text-[14px] text-white'>Join GDUE</Button>

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
                                        <div className='italic text-[1.4rem] '>Together We Stand, Divided We Fall! All For One, One For All!</div>
                                    </div>

                                </div>
                                <p>
                                    Join our vibrant community and make a difference! Register now to connect with like-minded individuals and support our mission. Learn more at <Link href={'https://www.ghanaiandiaspora.org/about'}>https://www.ghanaiandiaspora.org</Link>.
                                </p>


                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='space-y-2'>
                                        <div className='flex flex-wrap gap-2 w-full'>
                                            <div>
                                                <Autocomplete
                                                    label="European Country"
                                                    defaultItems={europeanCountries}
                                                    placeholder="Select Country in Europe"
                                                    className="md:max-w-[220px]"
                                                    onSelectionChange={(value) => handleAutocompleteChange(value as string)}
                                                    {...register("country", { required: true })}
                                                    isInvalid={errors.country ? true : false}
                                                >
                                                    {(country) => <AutocompleteItem
                                                        key={country.value}
                                                        startContent={<Avatar alt="Argentina" className="w-5 h-5" src={country.flag} />}
                                                    >
                                                        {country.label}
                                                    </AutocompleteItem>}
                                                </Autocomplete>
                                            </div>
                                            <Input
                                                autoFocus
                                                {...register("firstName", { required: true })}
                                                name="firstName"
                                                label="First Name"
                                                placeholder="Enter your First Name"
                                                className="md:max-w-[220px]"
                                                isInvalid={errors.firstName ? true : false}
                                            />

                                            <Input
                                                {...register("lastName", { required: true })}
                                                name="lastName"
                                                label="Last Name"
                                                placeholder="Enter your Last Name"
                                                className="md:max-w-[220px]"
                                                isInvalid={errors.lastName ? true : false}
                                            />

                                            <Input
                                                {...register("email", { required: true })}
                                                name="email"
                                                type="email"
                                                label="Email Address"
                                                placeholder="Enter your Email Address"
                                                className="md:max-w-[220px]"
                                                isInvalid={errors.email ? true : false}
                                            />

                                            <Input
                                                {...register("telephone", { required: true })}
                                                name="telephone"
                                                label="Telephone"
                                                placeholder="Enter your Cellphone Number"
                                                className="md:max-w-[220px]"
                                                isInvalid={errors.telephone ? true : false}
                                            />

                                            <Input
                                                {...register("address", { required: true })}
                                                name="address"
                                                label="Current Address"
                                                placeholder="Enter your Current Address and Apartment Number"
                                                className="md:max-w-[220px]"
                                                isInvalid={errors.address ? true : false}
                                            />

                                            <Input
                                                {...register("spouseName")}
                                                name="spouseName"
                                                label="Spouse Name"
                                                placeholder="Name of Spouse"
                                                className="md:max-w-[220px]"
                                                isInvalid={errors.spouseName ? true : false}
                                            />

                                            <Input
                                                {...register("fatherName")}
                                                name="fatherName"
                                                label="Father's Name"
                                                placeholder="Enter your Father's Name"
                                                className="md:max-w-[220px]"
                                                isInvalid={errors.fatherName ? true : false}
                                            />

                                            <Input
                                                {...register("motherName")}
                                                name="motherName"
                                                label="Mother's Name"
                                                placeholder="Enter your Mother's Name"
                                                className="md:max-w-[220px]"
                                                isInvalid={errors.motherName ? true : false}
                                            />

                                            <Input
                                                {...register("emergencyContact", { required: true })}
                                                name="emergencyContact"
                                                label="Emergency Contact"
                                                placeholder="Name of Emergency Contact"
                                                className="md:max-w-[220px]"
                                                isInvalid={errors.emergencyContact ? true : false}
                                            />

                                            <Input
                                                {...register("emergencyContactTelephone", { required: true })}
                                                name="emergencyContactTelephone"
                                                label="Emergency Contact Telephone"
                                                placeholder="Emergency Contact Telephone Number"
                                                className="md:max-w-[220px]"
                                                isInvalid={errors.emergencyContactTelephone ? true : false}
                                            />


                                            <div>
                                                <GoogleReCaptchaProvider reCaptchaKey={'6LfyzhUqAAAAANYGhxsaBusPaLv7RXw7Dr0dg9Pf'}

                                                    scriptProps={{
                                                        async: false, // optional, default to false,
                                                        defer: false, // optional, default to false
                                                        appendTo: 'head', // optional, default to "head", can be "head" or "body",
                                                        nonce: undefined // optional, default undefined
                                                    }}>
                                                    <GoogleReCaptcha
                                                        refreshReCaptcha={false}
                                                        onVerify={(token) => { handleCaptchaSubmission(token) }} />
                                                </GoogleReCaptchaProvider>
                                            </div>

                                        </div>
                                    </div>
                                    <ModalFooter>
                                        <Button color="danger" variant="flat" onPress={onClose}>
                                            Cancel
                                        </Button>
                                        {isVerified && (<Button color="primary" type="submit">
                                            Submit
                                        </Button>)}

                                    </ModalFooter>



                                </form>

                                {/* <p>
                                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                    dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                    Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                    Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                </p> */}
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default RegistrationModal;
