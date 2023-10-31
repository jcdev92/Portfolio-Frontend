import useProfileStore from "../../../store/useProfileStore";

export const Skills = () => {
  const { Skills: skills } = useProfileStore((state) => state.profile);

  return (
    <div className="h-full lg:flex lg:justify-center lg:items-center">
      <div className="px-3 md:lg:xl:px-40 bg-opacity-10">
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-3 group shadow-xl shadow-neutral-100 overflow-y-auto h-fit">
          {skills.map(({ id, title, icon }) => (
            <div
              key={id}
              className="p-10 flex flex-col items-center text-center group hover:bg-slate-50 cursor-pointer"
            >
              <span className="p-5 rounded-full bg-red-500 text-white shadow-sm shadow-red-200">
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
