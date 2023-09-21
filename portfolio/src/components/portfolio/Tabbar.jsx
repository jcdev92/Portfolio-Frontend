import { useState } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCsswizardry } from "react-icons/si";
import { BiLogoReact } from "react-icons/bi";
import { FaMarkdown } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

/* eslint-disable react/prop-types */
const Tabbar = ({ sections, setWichSelected }) => {
  const [isSelected, setSelected] = useState(sections[0].tag);

  const arrayTags = [...sections.map((section) => section.tag)];

  const compareTags = (sectionTag) => {
    arrayTags.includes(sectionTag) && setSelected(sectionTag);
  };

  return (
    <div className="flex w-full h-full">
      {sections.map((section, index) => (
        <button
          onClick={() => {
            compareTags(section.tag);
            setWichSelected(section.tag);
          }}
          key={index} // Asegúrate de agregar una clave única para cada elemento en el array
          className={
            isSelected === section.tag
              ? "bg-odp-foreground border-b flex items-center gap-2 h-full px-4 hover:bg-odp-text-light"
              : "bg-odp-bg flex items-center gap-2 h-full px-4 hover:bg-odp-text-light"
          }
        >
          {
            {
              intro: <AiFillHtml5 className="text-orange-500" />,
              AboutMe: <BiLogoReact className="text-purple-500" />,
              skills: <SiCsswizardry className="text-blue-400" />,
              projects: <FaMarkdown className="text-white" />,
              contactMe: <DiJavascript1 className="text-yellow-300" />,
            }[section.tag]
          }
          <span className="text-white">{section.fileName}</span>
        </button>
      ))}
    </div>
  );
};

export default Tabbar;
