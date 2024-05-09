import { useProfileStore } from "../../../store/useStore";

export const Skills = () => {
  const { Skills: skills } = useProfileStore((state) => state.profile);

  return (
    <div className="h-full lg:flex lg:justify-center lg:items-center">
      <div className="px-3 md:lg:xl:px-40 bg-opacity-10">
        <div className="flex justify-center shadow-sm p-5 w-full hover:shadow-teal-600 hover:bg-odp-bg">
          <h1 className="text-yellow-300 text-2xl">SKILLS</h1>
        </div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 group shadow-xl shadow-neutral-100 overflow-y-auto h-fit rounded-md p-2">
          {skills.map(({ id, title, icon }) => (
            <div
              key={id}
              className="p-10 flex flex-col items-center text-center group shadow-sm hover:scale-105 transition-all ease-in-out duration-200 hover:shadow-teal-600 hover:bg-odp-bg"
            >
              <span className="p-5 rounded-full bg-gray-700 text-white shadow-sm shadow-gray-400 hover:shadow-none hover:cursor-pointer hover:scale-95 transition-all ease-in-out duration-200">
                <img src={icon} alt="" height="20" width="20" />
              </span>
              <p className="text-sm font-medium text-slate-700 mt-3">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
