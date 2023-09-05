/* eslint-disable react/prop-types */
export const ErrorPage = ({error}) => {
  return (
    <div
      className="
    flex
    flex-col
    h-screen
    items-center
    justify-center
    bg-gray-900
    "
    >
      <h1 className="text-4xl text-red-700 font-bebas">{error}</h1>
    </div>
  );
};
