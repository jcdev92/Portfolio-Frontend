'use client';
import React from 'react'

import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

const SuccesAlert = ({message}) => {
  return (
    <Alert
    color="success"
    withBorderAccent
    icon={HiInformationCircle}
    className='mt-4'
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