import useProfileStore from "../../../store/useProfileStore";
export const ContactMe = () => {
  const profile = useProfileStore((state) => state.profile);

  return (
    <div className="h-screen md:h-full md:w-full flex">
      <div className="hidden md:flex gap-4 items-center justify-center border h-1/5 w-2/12">
        <div className="relative flex justify-center items-center h-full w-full">
          <img
            className="absolute border-4 border-double rounded-full z-10 hover:scale-90 hover:rotateX-180 shadow-md hover:shadow-none tansition-all ease-in-out duration-200 hover:cursor-pointer shadow-gray-700 hover:z-0 h-3/4 w-5/12"
            src={profile?.profileImg}
            alt="profileImg"
          />
          <div
            className="absolute flex border-4 border-double items-center justify-center rounded-full bg-red-600 text-white z-0 hover:z-10 h-3/4 w-5/12"
          >
            <span className="uppercase text-sm w-full h-full flex justify-center items-center">
              <a
                href="https://drive.google.com/file/d/1q74NsAiPiDPK-1AMqZlqVXJxyLWfPCS1/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="w-full h-full flex justify-center items-center"
              >
                Resume
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
