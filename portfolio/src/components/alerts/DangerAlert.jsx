"use client";

import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

const DangerAlert = ({ message, setErr }) => {
  return (
    <Alert
      color="failure"
      onDismiss={() => {
        setErr(null);
      }}
      withBorderAccent
    >
      <div className="flex flex-row gap-4">
        <span className="text-2xl text-failure font-bold flex items-center justify-center w-10 h-10 rounded-full bg-failure/10">
          <HiInformationCircle className="inline-block" />
        </span>
        <p>
          <span className="font-medium">{message}</span>
          Try with other credentias and submit it again.
        </p>
      </div>
    </Alert>
  );
};

export default DangerAlert;
