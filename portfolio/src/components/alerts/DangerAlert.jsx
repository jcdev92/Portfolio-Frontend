"use client";

import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import useStatusStore from "../../hooks/store/useStatusStore";

const DangerAlert = ({ message }) => {
  return (
    <Alert
      color="failure"
      onDismiss={() => {
        useStatusStore.getState().setError(null);
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
