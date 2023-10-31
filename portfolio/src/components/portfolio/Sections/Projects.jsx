import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../../hooks/useProjects";

export const Projects = () => {
  const {
    data: projects,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
    staleTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return isLoading ? (
    <div className="flex h-screen w-screen items-center justify-center md:h-full md:w-full">
      <div className="loader2"></div>
    </div>
  ) : isSuccess ? (
    <section className="bg-transparent dark:bg-gray-900 md:h-full">
      <div className="container px-6 py-10 mx-auto animate-pulse h-full">
        <h1 className="w-2/3 border text-center mx-auto">PROJECTS</h1>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-12 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {projects?.map(({ id, title, description, image }) => (
            <div key={id} className="w-full border">
              <div className="w-full h-40 border rounded-lg dark:bg-gray-600">
                <img src={image} alt="not image" className="w-full h-full rounded-lg"/>
              </div>
              <h1 className="w-56 mt-4 text-white">{title}</h1>
              <p className="w-full mt-4">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : (
    isError && (
      <div className="flex h-full w-full items-center justify-center">
        <span className="text-4xl text-red-700 font-bebas">{error}</span>
      </div>
    )
  );
};
