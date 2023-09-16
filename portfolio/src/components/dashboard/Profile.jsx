import { Card, TextInput, Label, Textarea, Avatar } from "flowbite-react";
import { useForm } from "react-hook-form";
import useProfileStore from "../../store/useProfileStore";
import { clearEmptyFields } from "../../utils/utilFunctions";
import { getProfile, updateProfile } from "../../hooks/useProfile";
import { Loading } from "../Loading";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { RxUpdate } from "react-icons/rx";

export const Profile = () => {
  const { handleSubmit, register, reset } = useForm();

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    onSuccess: (data) => {
      useProfileStore.getState().setProfile(data);
    },
    staleTime: 60000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  // mutation to update the profile
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries(["profile"]);
    },
  });

  // mutate function destructuring
  const { mutate } = mutation;

  // update the profile data
  const onSubmit = (formData) => {
    // remove empty fields
    const dataCleaned = clearEmptyFields(formData);
    // data to send to the server
    const newData = {
      id: data?.id,
      ...dataCleaned,
    };
    // mutate the data
    mutate(newData);
    // clear the form
    reset();
  };

  return (
    <div className="flex flex-col h-screen bg-transparent font-exo z-30">
      <Card className="backdrop-blur-md h-5/6 bg-transparent rounded-lg m-8 md:w-10/12 md:ml-32 border-none shadow-md shadow-sky-800 hover:scale-98 hover:shadow-sm hover:shadow-sky-600  transition-all ease-in-out duration-200">
        {isFetching || isLoading ? (
          <Loading />
        ) : (
          <form
            className="flex flex-col h-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <span className="h-1/6 w-full flex justify-center">
              <h1 className="font-bebas font-light text-4xl text-sky-200">Profile</h1>
            </span>
            <div className="h-4/6 overflow-y-auto scrollbar scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-sky-600 scrollbar-track-transparent p-4 rounded-lg">
              <div id="info" className="lg:grid gap-4 grid-cols-2">
                <Avatar size="xl" img={data?.profileImg} bordered />
                <div className="flex flex-col pb-4">
                  <div className="mb-2 block">
                    <Label value="Name" className="text-white drop-shadow-md" />
                  </div>
                  <TextInput
                    id="firstName"
                    placeholder={data?.firstName}
                    type="text"
                    className="pb-4 text-xs"
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
                    placeholder={data?.lastName}
                    type="text"
                    className="text-xs"
                    {...register("lastName")}
                  />
                </div>
                <div className="gap-4">
                  <div className="mb-2 block">
                    <Label
                      value="Email"
                      className="text-white drop-shadow-md"
                    />
                  </div>
                  <TextInput
                    id="email"
                    placeholder={data?.email}
                    type="email"
                    className="text-xs"
                    {...register("email")}
                  />
                </div>
                <div className="gap-4">
                  <div className="mb-2 block">
                    <Label
                      value="Phone"
                      className="text-white drop-shadow-md"
                    />
                  </div>
                  <TextInput
                    id="phone"
                    placeholder={data?.phone}
                    type="text"
                    className="text-xs"
                    {...register("phone")}
                  />
                </div>
                <div className="gap-4">
                  <div className="mb-2 block">
                    <Label
                      value="Profile Image"
                      className="text-white drop-shadow-md"
                    />
                  </div>
                  <TextInput
                    id="profileImg"
                    placeholder={data?.profileImg}
                    type="text"
                    className="text-xs"
                    {...register("profileImg")}
                  />
                </div>
                <div className="pb-4">
                  <div className="mb-2 block">
                    <Label
                      value="Bio Image"
                      className="text-white drop-shadow-md"
                    />
                  </div>
                  <TextInput
                    id="bioImage"
                    placeholder={data?.bioImage}
                    type="text"
                    className="text-xs"
                    {...register("bioImage")}
                  />
                </div>
              </div>
              <div className="pb-4">
                <div className="mb-2 block">
                  <Label
                    value="Job Title"
                    className="text-white drop-shadow-md"
                  />
                </div>
                <TextInput
                  id="jobTitle"
                  placeholder={data?.jobTitle}
                  type="text"
                  className="text-xs"
                  {...register("jobTitle")}
                />
              </div>
              <div className="pb-4">
                <div className="mb-2 block">
                  <Label
                    value="About Me"
                    className="text-white drop-shadow-md"
                  />
                </div>
                <Textarea
                  className="overflow-y-auto text-xs"
                  id="aboutMe"
                  placeholder={data?.aboutMe}
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
                  className="overflow-y-auto text-xs"
                  id="biography"
                  placeholder={data?.biography}
                  rows={4}
                  {...register("biography")}
                />
              </div>
            </div>
            <div className="h-1/6 flex flex-row justify-center">
              <div className="mb-2 block">
                <button
                  type="submit"
                  className={
                    "text-white bg-transparent text-3xl mt-8 rounded-full hover:text-yellow-300 hover:rotate-180 hover:scale-125  transition-all ease-in-out duration-200 sm:w-auto text-center"
                  }
                >
                  <RxUpdate className="w-full" />
                </button>
              </div>
            </div>
          </form>
        )}
      </Card>
    </div>
  );
};
