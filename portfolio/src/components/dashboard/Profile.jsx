import {
  Card,
  TextInput,
  Label,
  Textarea,
  Button,
  Avatar,
} from "flowbite-react";
import { useForm } from "react-hook-form";
import useProfileStore from "../../store/useProfileStore";
import { clearEmptyFields } from "../../utils/utilFunctions";
import useProfile from "../../hooks/useProfile";
import useStatusStore from "../../store/useStatusStore";
import { Loading } from "../Loading";

export const Profile = () => {
  useStatusStore.getState().setSuccess(null);
  useStatusStore.getState().setError(null);
  const url = "http://localhost:9000/api/v1/user";
  const { useGetProfile, usePatchProfile } = useProfile();
  useGetProfile(url);

  // get the profile data from the store
  const profile = useProfileStore((state) => state.profile);
  const { handleSubmit, register, reset } = useForm();

  const isLoading = useStatusStore((state) => state.loading);
  // get the id from the profile data
  const id = profile?.id;
  const patchUrl = `http://localhost:9000/api/v1/user/${id}/`;

  // update the profile data
  const useOnSubmit = (formData) => {
    // remove empty fields
    const data = clearEmptyFields(formData);

    // update the profile data
    usePatchProfile(patchUrl, data);
    reset();
  };

  return (
    <div className="flex flex-col w-full bg-transparent font-sans h-screen overflow-y-auto">
      <Card className="backdrop-blur-sm bg-white/30 rounded-xl p-8 m-8 md:w-8/12 md:ml-32">
        {isLoading ? (
          <Loading />
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(useOnSubmit)}
          >
            <div id="info" className="lg:grid gap-4 grid-cols-2">
              <Avatar size="xl" img={profile?.profileImg} bordered />
              <div className="flex flex-col gap-4">
                <div className="mb-2 block">
                  <Label value="Name" className="text-white drop-shadow-md" />
                </div>
                <TextInput
                  id="firstName"
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
                    value="Profile Image"
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
              <div>
                <div className="mb-2 block">
                  <Label
                    value="Bio Image"
                    className="text-white drop-shadow-md"
                  />
                </div>
                <TextInput
                  id="bioImage"
                  placeholder={profile?.bioImage}
                  type="text"
                  {...register("bioImage")}
                />
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  value="Job Title"
                  className="text-white drop-shadow-md"
                />
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
                <Label value="About Me" className="text-white drop-shadow-md" />
              </div>
              <Textarea
              className="overflow-y-auto"
                id="aboutMe"
                placeholder={profile?.aboutMe}
                rows={4}
                {...register("aboutMe")}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  value="Biography"
                  className="text-white drop-shadow-md"
                />
              </div>
              <Textarea
                id="biography"
                placeholder={profile?.biography}
                rows={4}
                {...register("biography")}
              />
            </div>
            <div className="flex flex-row justify-center">
              <div className="mb-2 block">
                <Button gradientDuoTone="purpleToBlue" outline type="submit">
                  Update Profile
                </Button>
              </div>
            </div>
          </form>
        )}
      </Card>
    </div>
  );
};
