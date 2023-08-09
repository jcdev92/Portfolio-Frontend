import { AiOutlineClose } from "react-icons/ai";
import useProjectsStore from "../../../store/useProjectsStore";
// eslint-disable-next-line react/prop-types
export const EditProject = ({ setEditMode, selectedId }) => {
  const projects = useProjectsStore((state) => state.projects);

  const project = projects.find((project) => project.id === selectedId);
  const { title, description, url, github, image } = project;

  return (
    <div className="w-5/6 h-5/6 backdrop-blur-sm bg-white/30 p-12 overflow-y-auto rounded-md shadow-md">
      <div className="flex w-full justify-end">
        <button
          className="text-white hover:bg-transparent hover:scale-75 transition-all ease-in-out duration-75 hover:text-red-700 rounded-lg text-4xl sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setEditMode("table")}
        >
          <AiOutlineClose />
        </button>
      </div>
      <form className="pr-2">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_text"
            id="floating_text"
            className="block py-2.5 px-0 w-full text-sm placeholder-transparent focus:placeholder-white text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
            className="block py-2.5 px-0 w-full text-sm placeholder-transparent focus:placeholder-white text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
            className="block py-2.5 px-0 w-full text-sm placeholder-transparent focus:placeholder-white text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
            className="block py-2.5 px-0 w-full text-sm placeholder-transparent focus:placeholder-white text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder={description}
            required
          />
          <label
            htmlFor="floating_text"
            className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_text"
            id="floating_text"
            className="block py-2.5 px-0 w-full text-sm placeholder-transparent focus:placeholder-white text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
      </form>
    </div>
  );
};
