import { Card, TextInput, Label, Textarea, Avatar } from "flowbite-react";
import { clearEmptyFields } from "../../../utils/utilFunctions";
import { getMany, update } from "../../../hooks/useFetch";
import { Loading } from "../../TransitionPages/Loading";
import { RxUpdate } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { useProfileStore } from "../../../store/useStore";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

export const Profile = () => {
  const { handleSubmit, register, reset } = useForm();
  const keyword = "user";

  const { data, isFetching, isLoading } = useQuery({
    queryKey: [keyword],
    queryFn: getMany(keyword),
    onSuccess: (data) => {
      useProfileStore.setState(
        {
          profile: data?.data[0],
        },
        {
          persist: true,
        }
      )
    },
    staleTime: 60000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const profile = data?.data[0]

  // mutation to update the profile
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: update(keyword),
    onSuccess: () => {
      queryClient.invalidateQueries([keyword]);
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
      id: profile?.id,
      ...dataCleaned,
    };
    // mutate the data
    mutate(newData);
    // clear the form
    reset();
  };

  return (
    <div className="flex flex-col h-screen bg-transparent font-exo z-30">
      <Card className="backdrop-blur-md h-5/6 bg-transparent rounded-lg m-8 md:w-10/12 md:ml-32 border-none shadow-md shadow-blue-500 hover:scale-98 hover:shadow-sm hover:shadow-blue-200  transition-all ease-in-out duration-200">
        {isFetching || isLoading ? (
          <Loading />
        ) : (
          <form
            className="flex flex-col h-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <span className="h-1/6 w-full flex justify-center">
              <h1 className="font-bebas font-light text-4xl text-blue-200">Profile</h1>
            </span>
            <div className="h-4/6 overflow-y-auto scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-blue-600 scrollbar-track-transparent p-4 rounded-lg">
              <div id="info" className="lg:grid gap-4 grid-cols-2">
                <Avatar size="xl" img={profile?.profileImg} bordered />
                <div className="flex flex-col pb-4">
                  <div className="mb-2 block">
                    <Label value="Name" className="text-white drop-shadow-md" />
                  </div>
                  <TextInput
                    id="firstName"
                    placeholder={profile?.firstName}
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
                    placeholder={profile?.lastName}
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
                    placeholder={profile?.email}
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
                    placeholder={profile?.phone}
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
                    placeholder={profile?.profileImg}
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
                    placeholder={profile?.bioImage}
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
                  placeholder={profile?.jobTitle}
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
                  className="overflow-y-auto text-xs"
                  id="biography"
                  placeholder={profile?.biography}
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
