import { AiOutlineClose } from "react-icons/ai";
import { RxUpdate } from "react-icons/rx";
import useProjectsStore from "../../../store/useProjectsStore";
import { useForm } from "react-hook-form";
import { clearEmptyFields } from "../../../utils/utilFunctions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProject } from "../../../hooks/useProjects";
import { ErrorAlert } from "../Alerts/ErrorAlert";
import { SuccessAlert } from "../Alerts/SuccessAlert";
import { Loading } from "../../Loading";

// eslint-disable-next-line react/prop-types
export const EditProject = ({ setEditMode, selectedId }) => {
  const projects = useProjectsStore((state) => state.projects);
  const project = projects.find((project) => project.id === selectedId);
  const { title, description, url, github, image } = project;
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateProject,
    onSuccess: () => {
      queryClient.invalidateQueries("projects");
    },
  });

  const { mutate, isError, isSuccess, error, status, isLoading } = mutation;

  const {
    register,
    handleSubmit,
    watch,
    formState: { isDirty },
    reset,
  } = useForm();

  // submiting the data to the server and update de cached data
  const onSubmit = (data) => {
    const dataCleaned = clearEmptyFields(data);
    const newData = {
      id: selectedId,
      ...dataCleaned,
    };
    mutate(newData);
    reset();
  };

  // watch all the form inputs
  let { watchTitle, watchUrl, watchGithub, watchImage, watchDescription } =
    watchingInputs({
      watchTitle: watch("title"),
      watchUrl: watch("url"),
      watchGithub: watch("github"),
      watchImage: watch("image"),
      watchDescription: watch("description"),
    });

  // is the input empty or not?
  const isCleanOrEmptyInput =
    !isDirty ||
    (watchTitle.length === 0 &&
      watchUrl.length === 0 &&
      watchGithub.length === 0 &&
      watchImage.length === 0 &&
      watchDescription.length === 0);

  return (
    <div className="w-5/6 h-5/6 backdrop-blur-sm bg-white/30 p-12 overflow-y-auto rounded-md shadow-md">
      <div className="flex w-full justify-between mb-8">
        <h1 className="font-bebas">
          Updating... <span className="text-yellow-300">{title}</span> - Project
        </h1>
        <button
          className="text-white hover:bg-transparent hover:scale-75 transition-all ease-in-out duration-200 hover:text-yellow-300 rounded-lg text-4xl sm:w-auto text-center"
          onClick={() => setEditMode("table")}
        >
          <AiOutlineClose className="w-full h-full" />
        </button>
      </div>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <ErrorAlert error={error.response.data.message} />
      ) : isSuccess ? (
        <SuccessAlert status={status} />
      ) : null}
      <form className="pr-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="title"
            id="title"
            className="block py-2.5 px-0 w-full text-sm placeholder-transparent focus:placeholder-slate-300 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
            placeholder={title}
            {...register("title")}
            autoComplete="off"
          />
          <label
            htmlFor="floating_text"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="url"
            id="url"
            className="block py-2.5 px-0 w-full text-sm placeholder-transparent focus:placeholder-slate-300 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
            placeholder={url}
            {...register("url")}
            autoComplete="off"
          />
          <label
            htmlFor="floating_text"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            URL
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="github"
            id="github"
            className="block py-2.5 px-0 w-full text-sm placeholder-transparent focus:placeholder-slate-300 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
            placeholder={github}
            {...register("github")}
            autoComplete="off"
          />
          <label
            htmlFor="floating_text"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Github
          </label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="image"
            id="image"
            className="block py-2.5 px-0 w-full text-sm placeholder-transparent focus:placeholder-slate-300 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
            placeholder={image}
            {...register("image")}
            autoComplete="off"
          />
          <label
            htmlFor="floating_text"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Image
          </label>
        </div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-white dark:text-white"
        >
          Description
        </label>
        <textarea
          id="description"
          rows="4"
          className="block p-2.5 w-full text-sm text-white bg-transparent rounded-lg border border-gray-300 placeholder-slate-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={description}
          {...register("description")}
          autoComplete="off"
        ></textarea>
        <div className="flex justify-center w-full">
          <button
            type="submit"
            className={
              isCleanOrEmptyInput
                ? "text-gray-400 bg-transparent text-5xl mt-8 rounded-full scale-75"
                : "text-white bg-transparent text-5xl mt-8 rounded-full hover:text-yellow-300 hover:rotate-180 hover:scale-125  transition-all ease-in-out duration-200 sm:w-auto text-center"
            }
            disabled={isCleanOrEmptyInput}
          >
            <RxUpdate className="w-full" />
          </button>
        </div>
      </form>

    </div>
  );

  function watchingInputs() {
    let watchTitle = watch("title");
    let watchUrl = watch("url");
    let watchGithub = watch("github");
    let watchImage = watch("image");
    let watchDescription = watch("description");
    return { watchTitle, watchUrl, watchGithub, watchImage, watchDescription };
  }
};
