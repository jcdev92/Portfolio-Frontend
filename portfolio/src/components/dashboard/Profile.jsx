import React, { useEffect } from "react";
import {
  Spinner,
  Card,
  TextInput,
  Label,
  Textarea,
  Button,
} from "flowbite-react";
import useAxiosGet from "../../hooks/useAxiosGet";
import useAxiosPost from "../../hooks/useAxiosPost";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const url = "http://localhost:9000/api/v1/user";
  const { data, loading } = useAxiosGet(url);
  const { handleSubmit, register } = useForm();
  const id = data.id;
  const patchUrl = `http://localhost:9000/api/v1/user/${id}/`;

  const onSubmit = (data) => {
    for (let key in data) {
      if (data[key] === "") {
        delete data[key];
      }
    }
    useAxiosPost(patchUrl, data);
    // refresh the page
    window.location.reload();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="xl" color="info" />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Card className="lg:w-8/12 m-4">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div id="info" className="lg:grid gap-4 grid-cols-2">
            <div>
              <div className="mb-2 block">
                <Label value="Your name" />
              </div>
              <TextInput
                id="firstNa"
                placeholder={data.firstName}
                type="text"
                {...register("firstName")}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Your lastname" />
              </div>
              <TextInput
                id="lastName"
                placeholder={data.lastName}
                type="text"
                {...register("lastName")}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder={data.email}
                type="email"
                {...register("email")}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Your phone" />
              </div>
              <TextInput
                id="phone"
                placeholder={data.phone}
                type="text"
                {...register("phone")}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Your profile image" />
              </div>
              <TextInput
                id="profileImg"
                placeholder={data.profileImg}
                type="text"
                {...register("profileImg")}
              />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Your job title" />
            </div>
            <TextInput
              id="jobTitle"
              placeholder={data.jobTitle}
              type="text"
              {...register("jobTitle")}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="About me description" />
            </div>
            <Textarea
              id="aboutMe"
              placeholder={data.aboutMe}
              rows={4}
              {...register("aboutMe")}
            />
          </div>
          <div className="flex flex-row justify-center">
            <div className="mb-2 block">
              <Button gradientDuoTone="purpleToBlue" outline type="submit">
                Update profile
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};
