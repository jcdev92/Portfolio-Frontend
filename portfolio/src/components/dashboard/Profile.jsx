import React, { useEffect } from "react";
import {
  Spinner,
  Card,
  TextInput,
  Label,
  Textarea,
  Button,
  Avatar,
} from "flowbite-react";
import useAxiosGet from "../../hooks/useAxiosGet";
import useAxiosPatch from "../../hooks/useAxiosPatch";
import { useForm } from "react-hook-form";
import useProfileStore from "../../hooks/store/profile";

export const Profile = () => {
  const { handleSubmit, register } = useForm();
  const url = "http://localhost:9000/api/v1/user";

  // get data from the api and loading state
  const { data, loading } = useAxiosGet(url);

  // listen for changes in the profile data
  useEffect(() => {
    // set the profile data in the store
    useProfileStore.setState({ profile: data?.data?.[0] });
  }, [data]);

  const profile = useProfileStore((state) => state.profile);
  const id = profile?.id;
  const patchUrl = `http://localhost:9000/api/v1/user/${id}/`;

  // update the profile data
  const onSubmit = (data) => {
    // remove empty fields
    for (let key in data) {
      if (data[key] === "") {
        delete data[key];
      }
    }
    // update the profile data
    useAxiosPatch(patchUrl, data);
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
    <div className="flex flex-col justify-center items-center font-sans">
      <Card className="lg:w-8/12 my-20 backdrop-blur-sm bg-white/30">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <Avatar
            size="xl"
            img={profile?.profileImg}
            className="mb-4"
            bordered
          />
          <div id="info" className="lg:grid gap-4 grid-cols-2">
            <div>
              <div className="mb-2 block">
                <Label value="Name" className="text-white drop-shadow-md" />
              </div>
              <TextInput
                id="firstNa"
                placeholder={profile?.firstName}
                type="text"
                {...register("firstName")}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  value="Last Name"
                  className="text-white drop-shadow-md"
                />
              </div>
              <TextInput
                id="lastName"
                placeholder={profile?.lastName}
                type="text"
                {...register("lastName")}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Email" className="text-white drop-shadow-md" />
              </div>
              <TextInput
                id="email"
                placeholder={profile?.email}
                type="email"
                {...register("email")}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label value="Phone" className="text-white drop-shadow-md" />
              </div>
              <TextInput
                id="phone"
                placeholder={profile?.phone}
                type="text"
                {...register("phone")}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  value="Profile image"
                  className="text-white drop-shadow-md"
                />
              </div>
              <TextInput
                id="profileImg"
                placeholder={profile?.profileImg}
                type="text"
                {...register("profileImg")}
              />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Job title" className="text-white drop-shadow-md" />
            </div>
            <TextInput
              id="jobTitle"
              placeholder={profile?.jobTitle}
              type="text"
              {...register("jobTitle")}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="About me" className="text-white drop-shadow-md" />
            </div>
            <Textarea
              id="aboutMe"
              placeholder={profile?.aboutMe}
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
