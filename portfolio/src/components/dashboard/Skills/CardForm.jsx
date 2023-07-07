import React, { useEffect } from "react";
import { Label, TextInput, Card, Button } from "flowbite-react";
import { set, useForm } from "react-hook-form";
import { clearEmptyFields } from "../../../utils/utilFunctions";
import useAxiosPost from "../../../hooks/useAxiosPost";
import useAxiosPatch from "../../../hooks/useAxiosPatch";
import SuccesAlert from "../../alerts/SuccesAlert";
import { AiOutlineUpload } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import DangerAlert from "../../alerts/DangerAlert";
import useStatusStore from "../../../hooks/store/useStatusStore";

export const CardForm = ({ editMode, setEditMode, rowCellData }) => {
  const { handleSubmit, register, reset } = useForm();
  const createUrl = "http://localhost:9000/api/v1/skill";
  const id = rowCellData?.id;
  const updateUrl = `http://localhost:9000/api/v1/skill/${id}`;
  const error = useStatusStore((state) => state.error);
  const success = useStatusStore((state) => state.success);

  // edit mode
  useEffect(() => {
    if (editMode == "edit") {
      reset({
        id: rowCellData?.id,
        title: rowCellData?.title,
        icon: rowCellData?.icon,
      });
    }
  }, [editMode, rowCellData?.id]);

  // back to add mode
  const handleAdd = () => {
    setEditMode("add");
    reset({
      id: "",
      title: "",
      icon: "",
    });
  };

  // create or update skill
  const onSubmit = (data) => {
    data = clearEmptyFields(data);
    editMode == "edit"
      ? useAxiosPatch(updateUrl, data)
      : useAxiosPost(createUrl, data);
  };

  return (
    <Card className="flex flex-col gap-4 lg:w-6/12 m-8 h-auto">
      <h1 className="text-2xl font-bebas text-indigo-950">
        {editMode == "edit" && "Edit Skill"}
        {editMode == "add" && "Add Skill"}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {editMode == "edit" && (
          <div>
            <div className="mb-2 block">
              <Label color="info" htmlFor="input-info" value="Id" />
            </div>
            <TextInput
              color="info"
              id="id"
              required
              value={editMode == "edit" && rowCellData?.id}
              disabled
              {...register("id")}
            />
          </div>
        )}
        <div>
          <div className="mb-2 block">
            <Label color="info" htmlFor="input-info" value="Skill" />
          </div>
          {editMode == "edit" ? (
            <TextInput
              color="info"
              id="title"
              placeholder="title"
              {...register("title")}
            />
          ) : (
            <TextInput
              color="info"
              id="title"
              placeholder="title"
              required
              {...register("title")}
            />
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label color="info" htmlFor="input-info" value="Icon" />
          </div>
          {editMode == "edit" ? (
            <TextInput
              color="info"
              id="icon"
              placeholder="https://www.flaticon.com/svg/...."
              {...register("icon")}
            />
          ) : (
            <TextInput
              color="info"
              id="icon"
              placeholder="https://www.flaticon.com/svg/...."
              required
              {...register("icon")}
            />
          )}
          {success == 201 && editMode == "add" && (
            <SuccesAlert message=" Skill created successfully" />
          )}
          {success == 200 && editMode == "edit" && (
            <SuccesAlert
              message={` Skill with id ${rowCellData?.id} updated successfully`}
            />
          )}
          {error ==
            "Skill already exists, try with diferent title and/or icon url" && (
            <DangerAlert message={error} />
          )}
        </div>
        {editMode == "edit" && (
          <div className="flex flex-row w-full justify-around my-6">
            <Button gradientDuoTone="purpleToBlue" type="submit">
              <AiOutlineUpload />
            </Button>
            <Button
              gradientDuoTone="pinkToOrange"
              onClick={() => {
                handleAdd();
                success(null);
                error(null);
              }}
            >
              <FaTimes />
            </Button>
          </div>
        )}
        {editMode == "add" && (
          <Button className="my-6" gradientDuoTone="purpleToBlue" type="submit">
            <FaPlus />
          </Button>
        )}
      </form>
    </Card>
  );
};
