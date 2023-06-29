import React, { useEffect, useState } from "react";
import useAxiosGet from "../../../hooks/useAxiosGet";
import useSkillsStore from "../../../hooks/store/skills";
import { Table } from "flowbite-react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Loading } from "../../Loading";
import { useForm } from "react-hook-form";
import { CardForm } from "./CardForm";

export const Skills = () => {
  const { reset } = useForm();
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
    setRowCellData(skill);
    reset({
      id: skill.id,
    });
    setEditMode("edit");
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
        <CardForm
          editMode={editMode}
          setEditMode={setEditMode}
          rowCellData={rowCellData}
        />
      </div>
    </div>
  );
};
