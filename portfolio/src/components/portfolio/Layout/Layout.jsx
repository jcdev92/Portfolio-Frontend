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

  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="relative flex h-full md:flex-col md:h-screen text-odp-text font-mono">
      {!showNavbar && (
        <button
          type="button"
          className="fixed h-[5%] w-[10%] px-4 py-3 bg-transparent rounded-md text-white outline-none transform active:scale-75 transition-transform right-[1%] md:hidden"
          onClick={() => setShowNavbar(true)}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      )}

      <div
        className={
          showNavbar
            ? "fixed inset-0 z-10 w-1/2 h-full md:w-full md:static md:h-[5%] bg-odp-bg"
            : "hidden md:w-full md:static md:flex md:bg-odp-bg"
        }
      >
        <TabBar
          sections={sections}
          setWichSelected={setWichSelected}
          whichSelected={whichSelected}
          setShowNavbar={setShowNavbar}
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
