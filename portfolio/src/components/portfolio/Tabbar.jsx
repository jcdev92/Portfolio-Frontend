import { AiFillHtml5 } from "react-icons/ai";
import { SiCsswizardry } from "react-icons/si";
import { BiLogoReact } from "react-icons/bi";
import { FaMarkdown } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

/* eslint-disable react/prop-types */
const Tabbar = ({ setSection, section }) => {
  return (
    <div className="flex items-start h-full w-full bg-odp-bg">
      <button
        onClick={() => setSection("intro")}
        className={
          section === "intro"
            ? "bg-odp-foreground border-b flex items-center gap-2 h-full px-4 hover:bg-odp-text-light"
            : "flex items-center gap-2 h-full px-4 hover:bg-odp-text-light"
        }
      >
        <AiFillHtml5 className="text-orange-500" />
        <span>intro.html</span>
      </button>
      <button
        onClick={() => setSection("aboutme")}
        className={
          section === "aboutme"
            ? "bg-odp-foreground border-b flex items-center gap-2 h-full px-4 hover:bg-odp-text-light"
            : "flex items-center gap-2 h-full px-4 hover:bg-odp-text-light"
        }
      >
        <BiLogoReact className="text-purple-500" />
        <span>Aboutme.jsx</span>
      </button>
      <button
        onClick={() => setSection("skills")}
        className={
          section === "skills"
            ? "bg-odp-foreground border-b flex items-center gap-2 h-full px-4 hover:bg-odp-text-light"
            : "flex items-center gap-2 h-full px-4 hover:bg-odp-text-light"
        }
      >
        <SiCsswizardry className="text-blue-400" />
        <span>skills.css</span>
      </button>
      <button
        onClick={() => setSection("projects")}
        className={
          section === "projects"
            ? "bg-odp-foreground border-b flex items-center gap-2 h-full px-4 hover:bg-odp-text-light"
            : "flex items-center gap-2 h-full px-4 hover:bg-odp-text-light"
        }
      >
        <FaMarkdown className="text-white" />
        <span>projects.md</span>
      </button>
      <button
        onClick={() => setSection("contactme")}
        className={
          section === "contactme"
            ? "bg-odp-foreground border-b flex items-center gap-2 h-full px-4 hover:bg-odp-text-light"
            : "flex items-center gap-2 h-full px-4 hover:bg-odp-text-light"
        }
      >
        <DiJavascript1 className="text-yellow-300" />
        <span>contactme.js</span>
      </button>
    </div>
  );
};

export default Tabbar;
