import { AiOutlineClose } from "react-icons/ai";
import { RiUploadCloud2Line } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { clearEmptyFields } from "../../../utils/utilFunctions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProject } from "../../../hooks/useProjects";
import { ErrorAlert } from "../Alerts/ErrorAlert";
import { SuccessAlert } from "../Alerts/SuccessAlert";
import { Loading } from "../../Loading";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
export const AddProject = ({ setEditMode, setClicked }) => {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addProject,
    onSuccess: () => {
      queryClient.invalidateQueries("projects");
    },
  });

  const { mutate, isError, isSuccess, error, status, isLoading } = mutation;
  const onSubmit = (data) => {
    const cleanedData = clearEmptyFields(data);
    mutate(cleanedData);
    reset();
  };

  return (
    <motion.div
    key="back"
      layoutId="card"
      initial={{ rotateY: 180 }}
      animate={{ rotateY: 0 }}
      exit={{ rotateY: -180 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 1,
      }} 
    className="w-5/6 h-5/6 backdrop-blur-sm p-6 rounded-md shadow-md">
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <ErrorAlert error={error.response.data.message} />
      ) : isSuccess ? (
        <SuccessAlert status={status} />
      ) : null}
      <form className="h-full w-full flex flex-col items-center justify-center p-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="p-2 flex h-fit w-full sticky z-0 inset-0">
          <div className="w-3/4">
            <h1 className="font-bebas">Add Project</h1>
          </div>
          <div className="flex justify-around items-center w-1/4">
            <button
              type="submit"
              className="text-white bg-transparent rounded-full hover:scale-125 hover:text-yellow-300 transition-all ease-in-out duration-200 sm:w-auto text-center"
            >
              <RiUploadCloud2Line className="w-full" />
            </button>
            <button
              className="text-white hover:bg-transparent hover:scale-75 transition-all ease-in-out duration-200 hover:text-yellow-300 rounded-lg text-4xl sm:w-auto text-center"
              onClick={() => {
                setEditMode("table");
                setClicked("e");
              }}
            >
              <AiOutlineClose className="h-full w-full" />
            </button>
          </div>
        </div>
        <div className="h-3/4 w-full overflow-y-auto scrollbar scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-blue-600 scrollbar-track-transparent p-4 rounded-lg">
          <div className="relative z-0 w-11/12 mb-6 group p-1">
            <input
              type="text"
              name="title"
              id="title"
              className="block py-2.5 font-exo px-0 w-full text-sm placeholder-transparent focus:placeholder-white text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
              placeholder=" "
              required
              autoComplete="off"
              {...register("title")}
            />
            <label
              htmlFor="title"
              className="peer-focus:font-exo font-exo absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Title
            </label>
          </div>
          <div className="relative z-0 w-11/12 mb-6 group p-1">
            <input
              type="text"
              name="url"
              id="url"
              className="block py-2.5 font-exo px-0 w-full text-sm placeholder-transparent focus:placeholder-white text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
              placeholder=" "
              required
              autoComplete="off"
              {...register("url")}
            />
            <label
              htmlFor="url"
              className="peer-focus:font-exo font-exo absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              URL
            </label>
          </div>
          <div className="relative z-0 w-11/12 mb-6 group p-1">
            <input
              type="text"
              name="github"
              id="github"
              className="block py-2.5 font-exo px-0 w-full text-sm placeholder-transparent focus:placeholder-white text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
              placeholder=" "
              required
              autoComplete="off"
              {...register("github")}
            />
            <label
              htmlFor="github"
              className="peer-focus:font-exo font-exo absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Github
            </label>
          </div>
          <div className="relative z-0 w-11/12 mb-6 group p-1">
            <input
              type="text"
              name="image"
              id="image"
              className="block py-2.5 font-exo px-0 w-full text-sm placeholder-transparent focus:placeholder-white text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
              placeholder=" "
              required
              autoComplete="off"
              {...register("image")}
            />
            <label
              htmlFor="image"
              className="peer-focus:font-exo font-exo absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Image
            </label>
          </div>
          <label
            htmlFor="description"
            className="block mb-2 font-exo text-sm font-exo text-white dark:text-white p-1"
          >
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            className="block font-exo p-2.5 w-11/12 text-sm text-white bg-transparent rounded-lg border border-gray-300 placeholder-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description of the project..."
            autoComplete="off"
            {...register("description")}
          ></textarea>
        </div>
      </form>
    </motion.div>
  );
};
