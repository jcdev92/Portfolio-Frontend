import { AiOutlineClose } from "react-icons/ai";
import { RxUpdate } from "react-icons/rx";
import useProjectsStore from "../../../store/useProjectsStore";
import { useForm } from "react-hook-form";
import { clearEmptyFields } from "../../../utils/utilFunctions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  updateProject,
  skillToProject,
  deleteSkillToProject,
} from "../../../hooks/useProjects";
import { ErrorAlert } from "../Alerts/ErrorAlert";
import { SuccessAlert } from "../Alerts/SuccessAlert";
import { Loading } from "../../Loading";
import { DropdownSkills } from "./DropdownSkills";
import SkillsContainer from "./SkillsContainer";

// eslint-disable-next-line react/prop-types
export const EditProject = ({ setEditMode, selectedId, keyword }) => {
  const projects = useProjectsStore((state) => state.projects);
  const project = projects.find((project) => project.id === selectedId);
  const { title, description, url, github, image } = project;
  const queryClient = useQueryClient();

  // update the data of the selected project
  const mutationForm = useMutation({
    mutationFn: updateProject,
    onSuccess: () => {
      queryClient.invalidateQueries(keyword);
    },
  });

  const {
    mutate: mutateForm,
    isError,
    error,
    status,
    isLoading,
    isSuccess,
  } = mutationForm;

  const {
    register,
    handleSubmit,
    watch,
    formState: { isDirty },
    reset,
  } = useForm();

  // submiting the data to the server and update de cached data
  const onSubmit = (data) => {
    //cleaning empty form fields
    const dataCleaned = clearEmptyFields(data);
    // this is the data to update, the id of the selected project to update plus the data from the form cleaned
    const newData = {
      id: selectedId,
      ...dataCleaned,
    };
    // updating the data of the selected project
    mutateForm(newData);
    reset();
  };

  // add a skill to a project and mutate the old stored data
  const mutationSkillsProject = useMutation({
    mutationFn: skillToProject,
    onSuccess: () => {
      queryClient.invalidateQueries(keyword);
    },
  });

  const {
    mutate: mutateSkills,
    isSuccess: isSkillAdded,
    isError: isErrorSkills,
    error: errorSkills,
    isLoading: isLoadingSkills,
  } = mutationSkillsProject;

  // delete a skill from the selected project and mutate the old stored data
  const mutationDeleteSkillProject = useMutation({
    mutationFn: deleteSkillToProject,
    onSuccess: () => {
      queryClient.invalidateQueries(keyword);
    },
  });

  const {
    mutate: mutateDeleteSkill,
    isSuccess: isSkillDeleted,
    isError: isErrorDeleteSkill,
    error: errorDeleteSkill,
    isLoading: isLoadingDeleteSkillFromProject,
  } = mutationDeleteSkillProject;

  // watch all the form inputs
  let { watchTitle, watchUrl, watchGithub, watchImage, watchDescription } =
    watchingInputs();

  // is the input empty or not? this condition prevent to send forms whit completly data empty
  const isCleanOrEmptyInput =
    !isDirty ||
    (watchTitle.length === 0 &&
      watchUrl.length === 0 &&
      watchGithub.length === 0 &&
      watchImage.length === 0 &&
      watchDescription.length === 0);

  return (
    <div className="w-5/6 h-5/6 backdrop-blur-md shadow-md">
      <form className="pr-2 w-full h-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="p-6 h-1/6 w-full flex rounded-md flex-col sticky inset-0 z-30">
          <div className="p-3 flex w-full justify-between items-start">
            <div className="flex w-5/6 items-center">
              <h1 className="font-bebas w-full">
                Updating... <span className="text-yellow-300">{title}</span> -
                Project
              </h1>
            </div>
            <div className="flex w-1/6 justify-between">
              <button
                type="submit"
                className={
                  isCleanOrEmptyInput
                    ? "text-gray-400 bg-transparent text-5xl rounded-full scale-75 transition-all ease-in-out duration-200"
                    : "text-white bg-transparent text-5xl rounded-full hover:text-yellow-300 hover:rotate-180 hover:scale-125  transition-all ease-in-out duration-200 sm:w-auto text-center"
                }
                disabled={isCleanOrEmptyInput}
              >
                <RxUpdate className="w-full" />
              </button>
              <button
                className="text-white hover:bg-transparent hover:scale-75 transition-all ease-in-out duration-200 hover:text-yellow-300 rounded-lg sm:w-auto"
                onClick={() => setEditMode("table")}
              >
                <AiOutlineClose />
              </button>
            </div>
          </div>
          {isError ? (
            <ErrorAlert error={error.response.data.message} />
          ) : isErrorSkills ? (
            <ErrorAlert error={errorSkills.response.data.message} />
          ) : isErrorDeleteSkill ? (
            <ErrorAlert error={errorDeleteSkill.response.data.message} />
          ) : isSuccess || isSkillAdded || isSkillDeleted ? (
            <SuccessAlert status={status} />
          ) : null}
        </div>
        <div className="p-6 pt-0 h-4/5 font-exo">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="p-6 pt-1 h-5/6 overflow-y-auto scrollbar scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-sky-600 scrollbar-track-transparent rounded-md">
              <h6 className="text-2xl py-4 uppercase">update - data form</h6>
              <div className="pr-6">
                <div className="p-6">
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
                </div>
                <div className="mt-4">
                  <DropdownSkills
                    project={project}
                    mutateSkills={mutateSkills}
                  />
                  <SkillsContainer
                    project={project}
                    mutateDeleteSkill={mutateDeleteSkill}
                    isLoadingSkills={isLoadingSkills}
                    isLoadingDeleteSkillFromProject={
                      isLoadingDeleteSkillFromProject
                    }
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );

  // This function is used to watch the inputs and return the values of the inputs
  function watchingInputs() {
    let watchTitle = watch("title");
    let watchUrl = watch("url");
    let watchGithub = watch("github");
    let watchImage = watch("image");
    let watchDescription = watch("description");
    return { watchTitle, watchUrl, watchGithub, watchImage, watchDescription };
  }
};
