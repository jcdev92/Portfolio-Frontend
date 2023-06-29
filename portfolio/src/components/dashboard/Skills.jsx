import React, { useEffect, useState } from "react";
import useAxiosGet from "../../hooks/useAxiosGet";
import useSkillsStore from "../../hooks/store/skills";
import { Table, Label, TextInput, Card, Button } from "flowbite-react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Loading } from "../Loading";
import { useForm } from "react-hook-form";

export const Skills = () => {
  const { handleSubmit, register } = useForm();
  const url = "http://localhost:9000/api/v1/skill";
  const { data, loading } = useAxiosGet(url);
  const setSkills = useSkillsStore((state) => state.setSkills);

  useEffect(() => {
    setSkills(data);
  }, [data]);

  const [editMode, setEditMode] = useState("add");
  const [rowCellData, setRowCellData] = useState({});

  // edit mode
  const handleEdit = (skill) => {
    setEditMode("edit");
    setRowCellData(skill);
  };

  // back to add mode
  const handleAdd = () => {
    setEditMode("add");
  };

  return (
    <div
      className="
    flex
    flex-row
    h-screen
    w-full
    items-center
    justify-around
    bg-transparent
    text-white
    font-sans
    "
    >
      {loading && <Loading />}
      <div className="flex flex-row gap-4 h-5/6 w-10/12 backdrop-blur-sm bg-white/30 rounded-md border">
        <Table className="rounded-xl p-8 m-8 w-4/12 h-8/10 overflow-y-auto">
          <Table.Head>
            <Table.HeadCell>Skill</Table.HeadCell>
            <Table.HeadCell>Icon</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Delete</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data &&
              data.map((skill) => (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={skill.id}
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {skill.title}
                  </Table.Cell>
                  <Table.Cell>
                    <img
                      src={skill.icon}
                      alt={skill.title}
                      height={30}
                      width={30}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(skill)}
                    >
                      <AiFillEdit />
                    </button>
                  </Table.Cell>
                  <Table.Cell>
                    <button className="btn btn-primary">
                      <AiFillDelete />
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
        <Card className="flex flex-col gap-4 w-6/12 m-8 h-4/6">
          <h1 className="text-2xl font-bebas text-indigo-950">
            {editMode == "edit" && "Edit Skill"}
            {editMode == "add" && "Add Skill"}
          </h1>
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            {editMode == "edit" && (
              <div>
                <div className="mb-2 block">
                  <Label color="info" htmlFor="input-info" value="ID" />
                </div>
                <TextInput
                  color="info"
                  id="skill-id"
                  placeholder="s3$jd55ef6ss56wi"
                  required
                  value={editMode == "edit" && rowCellData.id}
                  disabled
                  {...register("value")}
                />
              </div>
            )}
            <div>
              <div className="mb-2 block">
                <Label color="info" htmlFor="input-info" value="Skill" />
              </div>
              <TextInput
                color="info"
                id="title"
                placeholder="title"
                required
                {...register("title")}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label color="info" htmlFor="input-info" value="Icon" />
              </div>
              <TextInput
                color="info"
                id="icon"
                placeholder="https://www.flaticon.com/svg/...."
                required
                {...register("icon")}
              />
            </div>
            {editMode == "edit" && (
              <div className="flex flex-row w-full justify-around my-6">
                <Button gradientDuoTone="purpleToBlue" type="submit">
                  Update
                </Button>
                <Button gradientDuoTone="pinkToOrange" onClick={handleAdd}>
                  Cancel
                </Button>
              </div>
            )}
            {editMode == "add" && (
              <Button
                className="my-6"
                gradientDuoTone="purpleToBlue"
                type="submit"
              >
                Add
              </Button>
            )}
          </form>
        </Card>
      </div>
    </div>
  );
};
