/* eslint-disable react/prop-types */
"use client";
import useSkillsStore from "../../../store/useSkillsStore";
import { Dropdown } from "flowbite-react";
import { getSkills } from "../../../hooks/useSkills";
import { useQuery } from "@tanstack/react-query";

export const DropdownSkills = ({ project, mutateSkills }) => {
  // if the skills are not in the store yet, get them from the api
  const { data } = useQuery({
    queryFn: getSkills,
    queryKey: ["skills"],
  });

  let skills;

  useSkillsStore.getState().skills !== null
    ? (skills = useSkillsStore.getState().skills)
    : (skills = data);

  // handling the data to update de skills
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
        placement="right-start"
        className="backdrop-blur-sm bg-white/30"
      >
        {skills?.map(({ id, title, icon }) => (
          <div
            key={id}
            className="flex w-full h-full my-4 px-8 hover:text-white hover:scale-125 transition-all ease-in-out duration-150"
          >
            <button
              className="flex w-full justify-around gap-4"
              onClick={() => handleData(id)}
            >
              {title}
              <img src={icon} alt={title} height={20} width={20} />
            </button>
          </div>
        ))}
      </Dropdown>
    </div>
  );
};
