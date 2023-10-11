import { useState } from "react";
import NumbersCol from "./NumbersCol";
import TabBar from "./TabBar";
import { Intro } from "../Sections/Intro";
import { Skills } from "../Sections/Skills";
import { Projects } from "../Sections/Projects";
import { ContactMe } from "../Sections/ContactMe";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCsswizardry } from "react-icons/si";
import { FaMarkdown } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

export const Layout = () => {
  const sections = [
    {
      tag: "intro",
      fileName: "intro.html",
      intro: <AiFillHtml5 className="text-orange-500" />,
    },
    {
      tag: "skills",
      fileName: "skills.css",
      skills: <SiCsswizardry className="text-blue-400" />,
    },
    {
      tag: "projects",
      fileName: "projects.md",
      projects: <FaMarkdown className="text-white" />,
    },
    {
      tag: "contactMe",
      fileName: "contactMe.js",
      contactMe: <DiJavascript1 className="text-yellow-300" />,
    },
  ];

  const [whichSelected, setWichSelected] = useState(sections[0].tag);

  // getting the profile data and keeping it in localStorage to usea it globally then.

  return (
    <div className="relative flex md:flex-col min-h-screen md:h-screen text-odp-text font-mono">
      <div className="fixed inset-0 z-10 w-1/2 md:w-full md:static md:h-[5%] bg-odp-bg">
        <TabBar
          sections={sections}
          setWichSelected={setWichSelected}
          whichSelected={whichSelected}
        />
      </div>
      <div className="w-full h-full bg-odp-foreground">
        <div className="md:h-[4%] bg-odp-foreground p-1 text-xs">
          {`portfolio > ${
            sections.find((section) => section.tag === whichSelected).fileName
          }`}
        </div>
        <div className="flex md:h-[91%] md:w-full bg-odp-foreground">
          <div className="md:w-[3%] text-odp-pink-light">
            <NumbersCol />
          </div>
          <div className="md:w-[97%]">
            {
              {
                intro: <Intro />,
                skills: <Skills />,
                projects: <Projects />,
                contactMe: <ContactMe />,
              }[whichSelected]
            }
          </div>
        </div>
      </div>
    </div>
  );
};
