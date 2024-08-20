"use client"
import Jumbotron from "@/components/Jumbotron";
import { allCountries } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Autocomplete, AutocompleteItem, Avatar } from "@nextui-org/react";
import axios from "axios";
import React, { useState } from "react";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";
import { SubmitHandler, useForm } from "react-hook-form";



type InputsData = {
  firstName: string;
  lastName: string;
  email: string;
  telephone: number;
  address: string;
  spouseName: string;
  // fatherName: string;
  // motherName: string;
  emergencyContact: string;
  emergencyContactTelephone: number;
  country: string;
};

const JoinPage = () => {

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<InputsData>();
  const [isVerified, setIsVerified] = useState<boolean>(false);

  async function handleCaptchaSubmission(token: string | null) {
    const response = axios.post("/api/recaptchaVerification/", { token })
      .then(function (response) {
        console.log(response)
        console.log("EVERYTHING COOL. LET'S SUBMIT FORM NOW.")
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
      // onClose();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAutocompleteChange = (value: string) => {
    setValue("country", value);
  };




  return (
    <div className="md:space-y-16">

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
      <div className={` text-4xl font-bold`}></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-neutral-100 rounded-3xl hidden h-dvh md:flex flex-col justify-start items-center p-8">
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
                <div className='group flex flex-col data-[hidden=true]:hidden w-full md:max-w-auto]'>
                  <Autocomplete
                    label="Diaspora Country"
                    defaultItems={allCountries}
                    placeholder="Select Country in Europe"
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

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
                  <Input
                    autoFocus
                    {...register("firstName", { required: true })}
                    name="firstName"
                    label="First Name"
                    placeholder="Enter your First Name"
                    className="md:max-w-auto]"
                    isInvalid={errors.firstName ? true : false}
                  />

                  <Input
                    {...register("lastName", { required: true })}
                    name="lastName"
                    label="Last Name"
                    placeholder="Enter your Last Name"
                    className="md:max-w-auto]"
                    isInvalid={errors.lastName ? true : false}
                  />
                </div>

                <Input
                  {...register("email", { required: true })}
                  name="email"
                  type="email"
                  label="Email Address"
                  placeholder="Enter your Email Address"
                  className="md:max-w-auto]"
                  isInvalid={errors.email ? true : false}
                />

                <Input
                  {...register("telephone", { required: true })}
                  name="telephone"
                  label="Telephone"
                  placeholder="Enter your Cellphone Number"
                  className="md:max-w-auto]"
                  isInvalid={errors.telephone ? true : false}
                />

                <Input
                  {...register("address", { required: true })}
                  name="address"
                  label="Current Address"
                  placeholder="Enter your Current Address and Apartment Number"
                  className="md:max-w-auto]"
                  isInvalid={errors.address ? true : false}
                />

                <Input
                  {...register("spouseName")}
                  name="spouseName"
                  label="Spouse Name"
                  placeholder="Name of Spouse"
                  className="md:max-w-auto]"
                  isInvalid={errors.spouseName ? true : false}
                />

                {/* <Input
                                                {...register("fatherName")}
                                                name="fatherName"
                                                label="Father's Name"
                                                placeholder="Enter your Father's Name"
                                                className="md:max-w-auto]"
                                                isInvalid={errors.fatherName ? true : false}
                                            />

                                            <Input
                                                {...register("motherName")}
                                                name="motherName"
                                                label="Mother's Name"
                                                placeholder="Enter your Mother's Name"
                                                className="md:max-w-auto]"
                                                isInvalid={errors.motherName ? true : false}
                                            /> */}

                <Input
                  {...register("emergencyContact", { required: true })}
                  name="emergencyContact"
                  label="Emergency Contact Person"
                  placeholder="Name of Emergency Contact"
                  className="md:max-w-auto]"
                  isInvalid={errors.emergencyContact ? true : false}
                />

                <Input
                  {...register("emergencyContactTelephone", { required: true })}
                  name="emergencyContactTelephone"
                  label="Emergency Contact Telephone"
                  placeholder="Emergency Contact Telephone Number"
                  className="md:max-w-auto]"
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
            <div className='grid md:grid-cols-2 gap-2'>
              <Button color="danger" variant="solid">
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
  );
};

export default JoinPage;

