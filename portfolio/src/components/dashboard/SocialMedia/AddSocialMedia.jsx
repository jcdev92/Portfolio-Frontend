import { AiOutlineClose } from "react-icons/ai";
import { RiUploadCloud2Line } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { clearEmptyFields } from "../../../utils/utilFunctions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSocialMedia } from "../../../hooks/useSocialMedia";
import { ErrorAlert } from "../Alerts/ErrorAlert";
import { SuccessAlert } from "../Alerts/SuccessAlert";
import { Loading } from "../../Loading";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
export const AddSocialMedia = ({ setEditMode }) => {
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addSocialMedia,
    onSuccess: () => {
      queryClient.invalidateQueries("social");
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
      key="front"
      layoutId="card"
      initial={{ rotateY: 180 }}
      animate={{ rotateY: 360 }}
      exit={{ rotateY: 180 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 1,
      }}
      className="w-5/6 h-5/6 backdrop-blur-sm p-12 rounded-md shadow-lg overflow-y-auto font-exo"
    >
      <div className="flex w-full justify-between mb-8">
        <h1 className="font-bebas">Add Social Network</h1>
        <button
          className="text-white hover:bg-transparent hover:scale-75 transition-all ease-in-out duration-200 hover:text-yellow-300 rounded-lg text-4xl sm:w-auto text-center"
          onClick={() => setEditMode("table")}
        >
          <AiOutlineClose className="h-full w-full" />
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
            className="block py-2.5 px-0 w-full text-sm placeholder-transparent focus:placeholder-white text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
            placeholder=" "
            required
            autoComplete="off"
            {...register("title")}
          />
          <label
            htmlFor="title"
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
            className="block py-2.5 px-0 w-full text-sm placeholder-transparent focus:placeholder-white text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
            placeholder=" "
            required
            autoComplete="off"
            {...register("url")}
          />
          <label
            htmlFor="url"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            URL
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="icon"
            id="icon"
            className="block py-2.5 px-0 w-full text-sm placeholder-transparent focus:placeholder-white text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
            placeholder=" "
            required
            autoComplete="off"
            {...register("icon")}
          />
          <label
            htmlFor="icon"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Icon
          </label>
        </div>
        <div className="flex justify-center w-full">
          <button
            type="submit"
            className="text-white bg-transparent text-5xl mt-8 rounded-full hover:scale-125 hover:text-yellow-300 transition-all ease-in-out duration-200 sm:w-auto text-center"
          >
            <RiUploadCloud2Line className="w-full" />
          </button>
        </div>
      </form>
    </motion.div>
  );
};
