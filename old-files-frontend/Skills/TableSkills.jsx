/* eslint-disable react/prop-types */
import useStatusStore from "../../../store/useStatusStore";
import useSkillsStore from "../../../store/useSkillsStore";
import { useForm } from "react-hook-form";
import { PopUpModal } from "./alerts/PopUpModal";
import { Table } from "flowbite-react";
import { AiFillEdit } from "react-icons/ai";
import { Loading } from "../../Loading";
import useSkills from "../../../hooks/useSkills";

const TableSkills = ({ setEditMode, setRowCellData }) => {
  const skills = useSkillsStore((state) => state.skills);
  const loading = useStatusStore((state) => state.loading);
  const { reset } = useForm();
  const { deleteSkill } = useSkills();

  // edit mode
  const handleEdit = (skill) => {
    setRowCellData(skill);
    reset({
      id: skill.id,
    });
    setEditMode("edit");
    useStatusStore.getState().setSuccess(null);
    useStatusStore.getState().setError(null);
  };

  const handleDelete = (id) => {
    useStatusStore.getState().setSuccess(null);
    useStatusStore.getState().setError(null);
    const url = `http://localhost:9000/api/v1/skill/${id}`;
    deleteSkill(url);
  };

  return (
    <div className="flex flex-col p-8  w-6/12  overflow-y-auto">
      {loading ? (
        <Loading />
      ) : (
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
            {skills &&
              skills.map((skill) => (
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
                      className="btn btn-primary hover:bg-green-500 hover:text-white hover:rounded-full hover:scale-150 transition-all duration-300 ease-in-out"
                      onClick={() => handleEdit(skill)}
                    >
                      <AiFillEdit />
                    </button>
                  </Table.Cell>
                  <Table.Cell>
                    <PopUpModal
                      description="Are you sure you want to delete this skill?"
                      id={skill.id}
                      handleDelete={handleDelete}
                      setEditMode={setEditMode}
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      )}
    </div>
  );
};

export default TableSkills;
