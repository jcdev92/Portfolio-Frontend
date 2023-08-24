/* eslint-disable react/prop-types */

const SkillsContainer = ({ project }) => {
  const { ProjectsSkills } = project;
  console.log(ProjectsSkills);
  return (
    <div className="relative z-0 w-full mb-6 group">
      <div className="border overflow-y-auto rounded-md w-full flex justify-around py-4">
        {ProjectsSkills.map(({ Skill }) => (
          <div key={Skill.id} className="flex gap-2">
            <span className="text-white text-sm">{Skill.title}</span>
            <img src={Skill.icon} alt={Skill.title} height={20} width={20} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
