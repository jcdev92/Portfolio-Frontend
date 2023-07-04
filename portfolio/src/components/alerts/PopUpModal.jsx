"use client";
import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";

export const PopUpModal = ({ description, id, handleDelete }) => {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  return (
    <>
      <Button
        color="gray"
        className="w-10 h-10 rounded-full hover:text-white hover:bg-red-500 transition-all ease-in-out duration-300"
        onClick={() => props.setOpenModal("pop-up")}
      >
        <AiFillDelete />
      </Button>
      <Modal
        show={props.openModal === "pop-up"}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {description}
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  handleDelete(id);
                  props.setOpenModal(undefined);
                }}
              >
                Yes, I'm sure
              </Button>
              <Button
                color="gray"
                onClick={() => props.setOpenModal(undefined)}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
