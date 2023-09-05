import { Spinner } from "flowbite-react";

export const Loading = () => {
  return (
    <div
      className="
    flex
    flex-col
    h-screen
    items-center
    justify-center
    "
    >
      <Spinner size="xl" />
    </div>
  );
};
