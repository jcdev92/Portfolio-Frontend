import useProfileStore from "../../../store/useProfileStore";
export const AboutMe = () => {
  const profile = useProfileStore((state) => state.profile);
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 h-full p-2">
      <div className="h-fit rounded-lg p-2">
        <img src={profile?.bioImage} alt="bioImage" />
      </div>
      <div className="h-fit rounded-lg lg:col-span-2 p-2">
        <p>{profile?.biography}</p>
      </div>
    </div>
  );
};
