import useProfileStore from "../../../store/useProfileStore";
export const AboutMe = () => {
  const profile = useProfileStore((state) => state.profile);
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 h-full p-2">
      <div className="flex flex-col items-center justify-center h-full rounded-lg p-2">
        <img src={profile?.bioImage} alt="bioImage" />
      </div>
      <div className="flex flex-col items-center justify-center h-full rounded-lg lg:col-span-2 p-2 gap-2">
          <span className="font-bold text-yellow-300">Biography: </span> {profile?.bio}
        <p className="w-3/4 overflow-y-auto text-sm text-gray-400">{profile?.biography}</p>
      </div>
    </div>
  );
};
