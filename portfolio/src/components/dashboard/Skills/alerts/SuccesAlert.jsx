/* eslint-disable react/prop-types */
'use client';

import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';
import useStatusStore from '../../../../store/useStatusStore';

const SuccesAlert = ({message}) => {
  return (
    <Alert
    color="success"
    withBorderAccent
    icon={HiInformationCircle}
    onDismiss={() => {
      useStatusStore.getState().setSuccess(null);
    }}
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