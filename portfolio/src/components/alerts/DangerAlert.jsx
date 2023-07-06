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
      icon={HiInformationCircle}
      className="mt-4"
    >
      <span>
        <p>
          <span className="font-medium">{` ${message} `}</span>
        </p>
      </span>
    </Alert>
  );
};

export default DangerAlert;
