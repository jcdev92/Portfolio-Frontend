"use client";

import { Alert } from "flowbite-react";
import { HiInformationCircle } from 'react-icons/hi';

const DangerAlert = ({ message, setErr }) => {
  return (
    <Alert
      color="failure"
      onDismiss={() => {
        setErr(null);
      }}
      withBorderAccent
      icon={HiInformationCircle}
    >
      <span>
        <p>
          <span className="font-medium">{message}</span>
          Try with other credentias and submit it again.
        </p>
      </span>
    </Alert>
  );
};

export default DangerAlert;
