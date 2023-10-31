import useProfileStore from "../../../store/useProfileStore";

export const Skills = () => {
  const { Skills: skills } = useProfileStore((state) => state.profile);

  return (
    <div className="h-full lg:flex lg:justify-center lg:items-center">
      <div className="px-3 md:lg:xl:px-40 bg-opacity-10">
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-3 group shadow-xl shadow-neutral-100 overflow-y-auto h-fit rounded-md">
          {skills.map(({ id, title, icon }) => (
            <div
              key={id}
              className="p-10 flex flex-col items-center text-center group"
            >
              <span className="p-5 rounded-full bg-gray-700 text-white shadow-sm shadow-gray-400 hover:shadow-none hover:cursor-pointer hover:scale-95 transition-all ease-in-out duration-200">
                <img src={icon} alt="" height="20" width="20"/>
              </span>
              <p className="text-sm font-medium text-slate-700 mt-3">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
