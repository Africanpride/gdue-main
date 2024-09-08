"use client"
import GoogleCaptchaWrapper from "@/components/GoogleCaptchaWrapper";
import Jumbotron from "@/components/Jumbotron";
import { allCountries } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Autocomplete, AutocompleteItem, Avatar, DateInput } from "@nextui-org/react";
import { CalendarDate } from "@internationalized/date";
import axios from "axios";
import { LucideBadgeCheck } from "lucide-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { GoogleReCaptchaProvider, GoogleReCaptcha, useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import router from "next/router";



interface InputsData {
  firstName: string;
  lastName: string;
  email: string;
  telephone: number;
  dateOfBirth: Date;
  addressInDiaspora: string;
  addressInGhana: string;
  spouseName: string;
  emergencyContact: string;
  emergencyContactTelephone: number;
  country: string;
};

const JoinPage = () => {
  const notify = () => toast('Membership Form Submitted!');

  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<InputsData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      telephone: 0o0,
      dateOfBirth: new Date(),
      addressInDiaspora: '',
      addressInGhana: '',
      spouseName: '',
      emergencyContact: '',
      emergencyContactTelephone: 0o0,
      country: '',
    },
  });
  const [dateOfBirth, setDateOfBirth] = useState<CalendarDate>();
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const checkForToken = useCallback(async () => {
    if (!token && executeRecaptcha) {
      try {
        const recaptchaToken = await executeRecaptcha('inquirySubmit');
        if (recaptchaToken) {
          // console.log("Token received from Google::::::::", recaptchaToken);
          setToken(recaptchaToken); // Set the token in state
          // verify token with handleCaptchaSubmission
          handleCaptchaSubmission(recaptchaToken);
        }
      } catch (error) {
        console.error("Error executing reCAPTCHA:", error);
      }
    } else {
      // console.log("Token already present or executeRecaptcha not available");
    }
  }, [token, executeRecaptcha]);


  // checkForToken();

  // // Call the checkForToken function when the component mounts or when executeRecaptcha changes
  useEffect(() => {
    // console.log("EXECUTING USEEFECT...")
    checkForToken();
  }, [checkForToken])

  //   // verify token and then submit form
  //   // const response = await handleCaptchaSubmission(recaptchaToken)
  // }, [checkForToken]);


  async function notifyAllParties(firstName: string, email: string, gdueMemberId: string) {
    try {
      const response = await fetch('/api/notification/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, email, gdueMemberId }),
      });

      if (response.ok) {
        return;
      } else {
        console.error('Notification not sent successfully');
      }
    } catch (error) {
      console.error('An error occurred while sending the notification:', error);
    }
  }


  async function handleCaptchaSubmission(token: string | null) {
    const response = axios.post("/api/recaptchaVerification/", { token })
      .then(function (response) {
        if (response.status !== 200) {
          toast.error("Verification failed ...");
          return;
        }

        setIsVerified(true);

      })
      .catch(function (error) {
        setIsVerified(false);
        console.error('Verification failed:', error);
      });

  }



  const onSubmit: SubmitHandler<InputsData> = async (data) => {
    // Create a promise for the axios request
    const myPromise = axios.post('/api/register/registrationForm/', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });



    // Use toast.promise to handle the toast notifications
    toast.promise(
      myPromise,
      {
        loading: 'Submitting your request...',
        success: (response) => {
          // Handle success response
          const firstName = response.data.firstName;
          const email = response.data.email;
          const gdueMemberId = response.data.membershipNumber;

          console.log("NOTIFYING ....", firstName, email, gdueMemberId);

          const notify = notifyAllParties(
            firstName,
            email,
            gdueMemberId
          );

          // Log the membershipNumber
          // console.log('Membership Number:', membershipNumber);
          // reset();
          return 'Membership Request Submitted!';

        },
        error: (err) => {
          if (axios.isAxiosError(err)) {
            if (err.response) {
              // Handle specific status codes
              if (err.response.status === 409) {
                return 'User is already registered';
              }
              return 'Submission Error. Contact GDUE Office.';
            } else {
              return 'Submission Error. Contact GDUE Office.';
            }
          } else {
            return 'An unexpected error occurred. Please try again later.';
          }
        },
      },
      {
        style: {
          minWidth: '250px',
        },
        success: {
          duration: 18000,
          icon: <LucideBadgeCheck color="limegreen" />,
        },
      }
    );

    try {
      // Await the promise to ensure that errors are caught
      await myPromise;
      // window.location.reload();
    } catch (error) {
      // Additional error handling (if needed)
      console.error('Submission failed:', error);
    }
  };


  // Managing the DateInput changes
  const handleDateChange = (date: CalendarDate) => {
    setDateOfBirth(date); // Update the state
    setValue("dateOfBirth", new Date(date.year, date.month - 1, date.day)); // Set the date in react-hook-form
  };

  const handleAutocompleteChange = (value: string) => {
    setValue("country", value);
  };




  return (

    <div className="md:space-y-16 h-auto">

      <Jumbotron
        heading="Diasporan Events Information"
        description={(<>  Learn more about Ghana Diasporan events and {" "}
          <span className="text-yellow-600 font-bold">
            participation Details.
          </span>{" "}
        </>)}
        linkText="Watch our story"
        linkHref="#"
        backgroundImage="/images/accra-fishing.jpg"
        hideVideo={false}
      />

      <div className="md:p-8 h-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto">
          <div className="bg-neutral-100 rounded-3xl hidden md:h-auto md:flex flex-col justify-start items-center p-8">
            <div className="markdown prose w-full break-words dark:prose-invert dark space-y-3 text-[1.1rem]">

              <p className=" "> We understand the unique challenges of European life and are committed to providing support. As a GDUE member, you’ll forge meaningful connections, participate in rich cultural exchanges, and propel your career forward with the backing of a strong Ghanaian community.</p>

              <ol className="space-y-3">
                <li>
                  <p><strong>Empowerment</strong>: Joining GDUE offers legal, financial, and social support, ensuring your rights are protected and your voice is heard within European systems.</p></li>
                <li><p><strong>Community</strong>: Being part of GDUE means connecting with fellow Ghanaians, reducing isolation, and sharing experiences that strengthen cultural identity and mutual support.</p></li>
                <li><p><strong>Career Growth</strong>: GDUE provides networking opportunities, mentoring, and access to job markets, helping members achieve professional success and entrepreneurial goals.</p></li>
                <li><p><strong>Cultural Exchange</strong>: Engage in cultural events that foster pride in Ghanaian heritage, promoting understanding and unity within diverse European societies.</p></li>
                <li><p><strong>Resources and Guidance</strong>: GDUE offers tailored advice and assistance, helping you navigate the challenges of living abroad, from residency to education.</p></li>
              </ol>
            </div>
          </div>

          <div className="h-auto">

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='space-y-2'>
                <div className='flex flex-wrap gap-4 w-full'>

                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <Input
                      autoFocus
                      {...register("firstName", { required: true })}
                      name="firstName"
                      label="First Name"
                      // placeholder="Enter your First Name"
                      className="md:max-w-auto]"
                      isInvalid={errors.firstName ? true : false}
                    />

                    <Input
                      {...register("lastName", { required: true })}
                      name="lastName"
                      label="Last Name"
                      // placeholder="Enter your Last Name"
                      className="md:max-w-auto]"
                      isInvalid={errors.lastName ? true : false}
                    />
                  </div>

                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      {...register("email", { required: true })}
                      name="email"
                      type="email"
                      label="Email Address"
                      // placeholder="Enter your Email Address"
                      className="md:max-w-auto]"
                      isInvalid={errors.email ? true : false}
                    />

                    <Input
                      {...register("telephone", { required: true })}
                      name="telephone"
                      label="Telephone"
                      // placeholder="Enter your Cellphone Number"
                      className="md:max-w-auto]"
                      isInvalid={errors.telephone ? true : false}
                    />

                  </div>
                  <DateInput
                    label="Date of Birth"
                    placeholderValue={dateOfBirth}
                    value={dateOfBirth}
                    onSubmit={() => {
                      handleDateChange
                    }} // Handle changes
                    labelPlacement="inside"
                  />


                  <Input
                    {...register("addressInDiaspora", { required: true })}
                    name="addressInDiaspora"
                    label="Current Address in Diaspora"
                    // placeholder="Enter your Current Address and Apartment Number"
                    className="md:max-w-auto]"
                    isInvalid={errors.addressInDiaspora ? true : false}
                  />
                  <Input
                    {...register("addressInGhana", { required: true })}
                    name="addressInGhana"
                    label="Current Address in Ghana"
                    // placeholder="Enter your Current Address and Apartment Number"
                    className="md:max-w-auto]"
                    isInvalid={errors.addressInGhana ? true : false}
                  />

                  <Input
                    {...register("spouseName")}
                    name="spouseName"
                    label="Spouse Name"
                    // placeholder="Name of Spouse"
                    className="md:max-w-auto]"
                    isInvalid={errors.spouseName ? true : false}
                  />

                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <Input
                      {...register("emergencyContact", { required: true })}
                      name="emergencyContact"
                      label="Emergency Contact Person"
                      // placeholder="Name of Emergency Contact"
                      className="md:max-w-auto]"
                      isInvalid={errors.emergencyContact ? true : false}
                    />

                    <Input
                      {...register("emergencyContactTelephone", { required: true })}
                      name="emergencyContactTelephone"
                      label="Emergency Contact Telephone"
                      // placeholder="Emergency Contact Telephone Number"
                      className="md:max-w-auto]"
                      isInvalid={errors.emergencyContactTelephone ? true : false}
                    />

                  </div>
                  <div className='group flex flex-col data-[hidden=true]:hidden w-full md:max-w-auto]'>
                    <Autocomplete
                      label="Select Diaspora Country"
                      defaultItems={allCountries}
                      // placeholder="Select Country in Europe"
                      className="md:max-w-auto]"
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


                </div>
              </div>
              <div className='grid md:grid-cols-2 gap-2'>
                <Button type="reset" color="danger" variant="solid">
                  Cancel
                </Button>
                {isVerified && (<Button color="primary" type="submit">
                  Submit
                </Button>)}

              </div>
            </form>

          </div>
        </div>


      </div>


    </div>

  );
};

export default JoinPage;

