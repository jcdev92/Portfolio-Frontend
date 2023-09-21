import { useState } from "react";
import NumbersCol from "./NumbersCol";
import Tabbar from "./Tabbar";
import { Intro } from "./Secctions/Intro";
import { AboutMe } from "./Secctions/AboutMe";
import { Skills } from "./Secctions/Skills";
import { Projects } from "./Secctions/Projects";
import { ContactMe } from "./Secctions/ContactMe";

export const Layout = () => {
  const sections = [
    { tag: "intro", fileName: "intro.html" },
    { tag: "AboutMe", fileName: "AboutMe.jsx" },
    { tag: "skills", fileName: "skills.css" },
    { tag: "projects", fileName: "projects.md" },
    { tag: "contactMe", fileName: "contactMe.js" },
  ];

  const [whichSelected, setWichSelected] = useState("intro");

  return (
    <div className="flex flex-col h-screen text-odp-text font-mono">
      <div className="h-[5%] bg-odp-bg">
        <Tabbar sections={sections} setWichSelected={setWichSelected} />
      </div>
      <div className="h-[4%] bg-odp-foreground p-1 text-xs">
        {`portfolio > ${
          sections.find((section) => section.tag === whichSelected).fileName
        }`}
      </div>
      <div className="flex h-[91%] w-full bg-odp-foreground">
        <div className="w-[3%] text-odp-pink-light">
          <NumbersCol />
        </div>
        <div className="w-[97%]">
          {
            {
              intro: <Intro />,
              AboutMe: <AboutMe />,
              skills: <Skills />,
              projects: <Projects />,
              contactMe: <ContactMe />,
            }[whichSelected]
          }
        </div>
      </div>
    </div>
  );
};
