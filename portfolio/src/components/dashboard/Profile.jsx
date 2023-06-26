import React, { useEffect } from "react";
import {
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
import { Loading } from "../Loading";

export const Profile = () => {
  const { handleSubmit, register } = useForm();
  const url = "http://localhost:9000/api/v1/user";

  // get data from the api and loading state
  const { data, loading } = useAxiosGet(url);

  // set the profile data to the store
  const setProfile = useProfileStore((state) => state.setProfile);

  // set the profile data to the store
  useEffect(() => {
    setProfile(data?.data?.[0]);
  }, [data, setProfile]);

  // get the profile data from the store
  const profile = useProfileStore((state) => state.profile);

  // get the id from the profile data
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

  return (
    <div
      className="
    flex
    flex-col
    w-full
    bg-transparent
    font-
    h-screen
    overflow-y-auto
    "
    >
      
      <Card
        className="
      backdrop-blur-sm
      bg-white/30
      rounded-xl
      p-8
      m-8
      "
      >
        {loading && <Loading />}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div id="info" className="lg:grid gap-4 grid-cols-2">
            <Avatar size="xl" img={profile?.profileImg} bordered />
            <div className="flex flex-col gap-4">
              <div className="mb-2 block">
                <Label value="Name" className="text-white drop-shadow-md" />
              </div>
              <TextInput
                id="firstNa"
                placeholder={profile?.firstName}
                type="text"
                {...register("firstName")}
              />
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
