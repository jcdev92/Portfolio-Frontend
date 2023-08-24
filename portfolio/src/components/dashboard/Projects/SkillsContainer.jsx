/* eslint-disable react/prop-types */

const SkillsContainer = ({ project }) => {
  const { ProjectsSkills } = project;

  return (
    <div className="relative z-0 w-full mb-6 group">
      <h5 className="font-bebas p-4">Project Skills</h5>
      <div className="rounded-md w-full flex justify-around p-4 flex-wrap gap-4">
        {ProjectsSkills.map(({ Skill }) => (
          <div key={Skill.id} className="p-4 flex shadow-md gap-4 rounded-md">
            <div className="flex gap-2">
              <span className="text-white text-sm">{Skill.title}</span>
              <img src={Skill.icon} alt={Skill.title} height={20} width={20} />
            </div>
            <button className="text-white text-sm">X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
