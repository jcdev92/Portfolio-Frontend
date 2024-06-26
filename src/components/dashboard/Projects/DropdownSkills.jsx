/* eslint-disable react/prop-types */
"use client";
import useSkillsStore from "../../../store/useSkillsStore";
import { Dropdown } from "flowbite-react";
import { getMany } from "../../../hooks/useFetch";
import { useQuery } from "@tanstack/react-query";

export const DropdownSkills = ({ project, mutateSkills }) => {
  // if the skills are not in the store yet, get them from the api
  const keyword = "skills";
  const { data } = useQuery({
    queryFn: getMany(keyword),
    queryKey: [keyword],
  });

  let skills;

  useSkillsStore.getState().skills !== null
    ? (skills = useSkillsStore.getState().skills)
    : (skills = data);

  // handling the data to update the skills on the project
  const handleData = (id) => {
    const data = {
      //object id, it could be any, its just for the parameter query
      id: project.id,
      // project id, it needs to be the id of the project
      projectId: project.id,
      // skill id, it needs to be the id of the skill to join to the project
      skillId: id,
    };
    mutateSkills(data);
  };

  return (
    <div className="text-xl my-4 hover:text-2xl transition-all ease-in-out duration-150">
      <Dropdown
        inline
        label="Add Skill"
        placement="right-end"
        className="bg-indigo-950 opacity-90 border-none z-40"
      >
        {skills?.map(({ id, title, icon }) => (
          <Dropdown.Item
            key={id}
            className="flex text-white bg-transparent hover:text-yellow-300 hover:scale-90 hover:bg-transparent transition-all ease-in-out duration-150"
          >
            <button
              type="button"
              className="flex w-full justify-around gap-4"
              onClick={() => handleData(id)}
            >
              {title}
              <img src={icon} alt={title} height={20} width={20} />
            </button>
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
};
