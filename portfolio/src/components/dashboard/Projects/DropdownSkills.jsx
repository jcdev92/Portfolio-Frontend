"use client";
import useSkillsStore from "../../../store/useSkillsStore";
import { Dropdown } from "flowbite-react";

export const DropdownSkills = () => {
  const skills = useSkillsStore.getState().skills;
  return (
    <div className="text-xl my-4">
      <Dropdown inline label="Add Skill"
          placement="right-start">
        {skills.map(({ id, title, icon }) => (
          <div key={id} className="flex w-full justify-around my-4 px-8">
            <button className="flex w-full justify-around">
              {title}
              <img src={icon} alt={title} height={20} width={20} />
            </button>
          </div>
        ))}
      </Dropdown>
    </div>
  );
};
