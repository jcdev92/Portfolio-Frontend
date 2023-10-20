export const Skills = () => {
  return (
    <div className="h-full md:h-screen md:overflow-y-auto lg:flex lg:justify-center lg:items-center xl:overflow-hidden xl:h-full">
      <div className="px-3 md:lg:xl:px-40 bg-opacity-10">
        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 lg:grid-cols-3 group shadow-xl shadow-neutral-100 border ">
          <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
            </span>
            <p className="text-sm font-medium text-slate-700 mt-3">
              Most Experienced Team
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Team BrainEdge education is a bunch of highly focused, energetic
              set of people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
