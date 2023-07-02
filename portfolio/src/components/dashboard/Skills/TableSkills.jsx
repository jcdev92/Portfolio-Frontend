import React from "react";
import { Table } from "flowbite-react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import useSkillsStore from "../../../hooks/store/skills";
import { useForm } from "react-hook-form";
import useAxiosDelete from "../../../hooks/useAxiosDelete";

const TableSkills = ({ setEditMode, setRowCellData }) => {
  const data = useSkillsStore((state) => state.skills);
  const { reset } = useForm();

  // edit mode
  const handleEdit = (skill) => {
    setRowCellData(skill);
    reset({
      id: skill.id,
    });
    setEditMode("edit");
  };

  const handleDelete = (id) => {
    const url = `http://localhost:9000/api/v1/skill/${id}`;
    useAxiosDelete(url);
    // refresh page
    window.location.reload();
  };

  return (
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
                <button
                  className="btn btn-primary"
                  onClick={() => handleDelete(skill.id)}
                >
                  <AiFillDelete />
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table>
  );
};

export default TableSkills;
