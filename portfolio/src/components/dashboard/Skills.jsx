import React, { useEffect } from "react";
import useAxiosGet from "../../hooks/useAxiosGet";
import useSkillsStore from "../../hooks/store/skills";
import { Table } from "flowbite-react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Loading } from "../Loading";

export const Skills = () => {
  const url = "http://localhost:9000/api/v1/skill";
  const { data, loading } = useAxiosGet(url);
  const skills = data;

  const setSkills = useSkillsStore((state) => state.setSkills);

  useEffect(() => {
    setSkills(skills);
  }, [skills, setSkills]);

  return (
    <div
      className="
    flex
    flex-col
    h-screen
    w-full
    bg-transparent
    text-white
    font-sans
    "
    >
      {loading && <Loading />}
      <Table className="backdrop-blur-sm bg-white/30 rounded-xl p-8 m-8 w-5/10 h-8/10 overflow-y-auto">
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
                  <button className="btn btn-primary">
                    {" "}
                    <AiFillEdit />{" "}
                  </button>
                </Table.Cell>
                <Table.Cell>
                  <button className="btn btn-primary">
                    {" "}
                    <AiFillDelete />{" "}
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
};
