import React from "react";
import { useForm } from "react-hook-form";
import useSkillsStore from "../../../hooks/store/skills";
import useAxiosDelete from "../../../hooks/useAxiosDelete";
import { PopUpModal } from "../../alerts/PopUpModal";
import { Table } from "flowbite-react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

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
  };

  return (
    <div className="flex flex-col p-8  w-6/12  overflow-y-auto">
      <Table className="rounded-xl">
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
                  <PopUpModal
                    description="Are you sure you want to delete this skill?"
                    skillId={skill.id}
                    handleDelete={handleDelete}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default TableSkills;
