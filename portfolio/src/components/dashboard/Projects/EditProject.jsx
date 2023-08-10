import { AiOutlineClose } from "react-icons/ai";
import { RxUpdate } from "react-icons/rx";
import useProjectsStore from "../../../store/useProjectsStore";
// eslint-disable-next-line react/prop-types
export const EditProject = ({ setEditMode, selectedId }) => {
  const projects = useProjectsStore((state) => state.projects);

  const project = projects.find((project) => project.id === selectedId);
  const { title, description, url, github, image } = project;

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
      <form className="pr-2">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_text"
            id="floating_text"
            className="block py-2.5 px-0 w-full text-sm placeholder-transparent focus:placeholder-white text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
            placeholder={title}
            required
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
            name="floating_text"
            id="floating_text"
            className="block py-2.5 px-0 w-full text-sm placeholder-transparent focus:placeholder-white text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
            placeholder={url}
            required
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
            name="floating_text"
            id="floating_text"
            className="block py-2.5 px-0 w-full text-sm placeholder-transparent focus:placeholder-white text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
            placeholder={github}
            required
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
            name="floating_text"
            id="floating_text"
            className="block py-2.5 px-0 w-full text-sm placeholder-transparent focus:placeholder-white text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-300 peer"
            placeholder={image}
            required
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
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-white bg-transparent rounded-lg border border-gray-300 placeholder-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={description}
        ></textarea>
        <div className="flex justify-center w-full">
          <button
            type="submit"
            className="text-white bg-transparent text-5xl mt-8 rounded-full hover:rotate-180 hover:scale-125 hover:text-yellow-300 transition-all ease-in-out duration-200 sm:w-auto text-center"
          >
            <RxUpdate className="w-full" />
          </button>
        </div>
      </form>
    </div>
  );
};
