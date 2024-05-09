import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { useProfileStore } from "../../../store/useStore";

export const Projects = () => {
  const { Projects: projects } = useProfileStore((state) => state.profile);

  return (
    <section className="bg-transparent dark:bg-gray-900 md:h-full">
      <div className="container px-6 py-10 mx-auto animate-pulse h-full">
        <h1 className="w-2/3 text-center mx-auto text-2xl text-yellow-300">PROJECTS</h1>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-12 lg:gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects?.map(({ id, title, description, image, github, url }) => (
            <div key={id} className="w-full flex flex-col justify-around shadow-md hover:scale-105 transition-all ease-out duration-200">
              <div className="w-full h-40  rounded-lg dark:bg-gray-600">
                <img
                  src={image}
                  alt="not image"
                  className="w-full h-full rounded-lg"
                />
              </div>
              <h1 className="w-full mt-4 text-center text-white">{title}</h1>
              <p className="w-full mt-4 p-4 text-justify">{description}</p>
              <div className="w-full flex justify-around p-4">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl text-white hover:text-yellow-500"
                >
                  <AiFillGithub />
                </a>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl text-white hover:text-yellow-500"
                >
                  <CgWebsite />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
