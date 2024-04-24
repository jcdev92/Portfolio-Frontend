/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";

const SkillsContainer = ({
  project,
  mutateDeleteSkill,
  isLoadingSkills,
  isLoadingDeleteSkillFromProject,
}) => {
  const { ProjectsSkills } = project;

  // handling the data to delete a skill from the project
  const handleDeleteData = (id) => {
    const data = {
      //object id, it could be any, its just for the parameter query
      id: project.id,
      // project id, it needs to be the id of the project
      projectId: project.id,
      // skill id, it needs to be the id of the skill to delete from the project
      skillId: id,
    };
    mutateDeleteSkill(data);
  };

  return isLoadingSkills || isLoadingDeleteSkillFromProject ? (
    <div className="w-full mb-6 flex items-center justify-center">
      <div className="loader"></div>
    </div>
  ) : (
    <div className="relative z-0 w-full mb-6 group">
      <h5 className="font-bebas pt-4 text-2xl">Project Skills</h5>
      <div className="rounded-md w-full flex justify-around items-center p-4 flex-wrap gap-4">
        {isLoadingSkills ||
          (isLoadingDeleteSkillFromProject && (
            <div className="w-full mb-6 flex items-center justify-center">
              <div className="loader"></div>
            </div>
          ))}
        {ProjectsSkills.map(({ Skill }) => (
          <div
            key={Skill.id}
            className="p-4 flex shadow-md gap-4 rounded-md hover:scale-110 transition-all ease-in-out duration-100"
          >
            <div className="flex gap-2">
              <span className="text-white text-sm">{Skill.title}</span>
              <img src={Skill.icon} alt={Skill.title} height={20} width={20} />
            </div>
            <button
              type="button"
              className="text-white text-sm hover:scale-75 hover:text-yellow-300 transition-all ease-in-out duration-100"
              onClick={() => handleDeleteData(Skill.id)}
            >
              <AiOutlineClose />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
