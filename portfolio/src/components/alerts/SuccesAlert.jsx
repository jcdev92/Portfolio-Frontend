/* eslint-disable react/prop-types */
'use client';

import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

const SuccesAlert = ({message}) => {
  return (
    <Alert
    color="success"
    withBorderAccent
    icon={HiInformationCircle}
    className='mt-4 text-xs'
  >
    <span>
      <p>
        <span className="font-medium">
          Success!
        </span>
        {message}
      </p>
    </span>
  </Alert>
  )
}

export default SuccesAlert