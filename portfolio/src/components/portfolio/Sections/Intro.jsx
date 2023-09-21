import useProfileStore from "../../../store/useProfileStore";
export const Intro = () => {
  const profile = useProfileStore((state) => state.profile);
  const {
    firstName,
    lastName,
    aboutMe,
    country,
    profileImg,
    jobTitle,
  } = profile;
  return (
    <div className="flex h-full text-odp-text font-mono">
      <div className="border">
        <img
          className="w-[10%]"
          style={{ borderRadius: "50%" }}
          src={profileImg}
          alt="profileImg"
        />
        <h1>
          {firstName} {lastName}
        </h1>
        <p>{jobTitle}</p>
        <p>{country}</p>
      </div>
      <p>{aboutMe}</p>
    </div>
  );
};
