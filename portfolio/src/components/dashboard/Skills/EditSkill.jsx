import { AiOutlineClose } from "react-icons/ai";
import { RxUpdate } from "react-icons/rx";
import { useForm } from "react-hook-form";
import { clearEmptyFields } from "../../../utils/utilFunctions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSkill } from "../../../hooks/useSkills";
import { ErrorAlert } from "../Alerts/ErrorAlert";
import { SuccessAlert } from "../Alerts/SuccessAlert";
import { Loading } from "../../Loading";
import useSkillsStore from "../../../store/useSkillsStore";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
export const EditSkill = ({ setEditMode, selectedId, keyword }) => {
  const skills = useSkillsStore((state) => state.skills);
  const skill = skills.find((skill) => skill.id === selectedId);
  const { title, icon } = skill;
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateSkill,
    onSuccess: () => {
      queryClient.invalidateQueries(keyword);
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
  let { watchTitle, watchIcon } = watchingInputs();

  // is the input empty or not?
  const isCleanOrEmptyInput =
    !isDirty || (watchTitle.length === 0 && watchIcon.length === 0);

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
      className="w-5/6 h-5/6 backdrop-blur-sm p-12 overflow-y-auto rounded-md shadow-md"
    >
      <div className="flex w-full justify-between mb-8">
        <h1 className="font-bebas">
          Updating... <span className="text-yellow-300">{title}</span>
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
            className="block font-exo py-2.5 px-0 w-full text-sm placeholder-transparent focus:placeholder-slate-300 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
            placeholder={title}
            {...register("title")}
            autoComplete="off"
          />
          <label
            htmlFor="floating_text"
            className="peer-focus:font-exo font-exo absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="icon"
            id="icon"
            className="block font-exo py-2.5 px-0 w-full text-sm placeholder-transparent focus:placeholder-slate-300 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
            placeholder={icon}
            {...register("icon")}
            autoComplete="off"
          />
          <label
            htmlFor="floating_text"
            className="peer-focus:font-exo font-exo absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Icon
          </label>
        </div>
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
    </motion.div>
  );

  function watchingInputs() {
    let watchTitle = watch("title");
    let watchIcon = watch("icon");
    return { watchTitle, watchIcon };
  }
};
