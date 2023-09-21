import { useState } from "react";
import NumbersCol from "./NumbersCol";
import TabBar from "./TabBar";
import { Intro } from "../Sections/Intro";
import { AboutMe } from "../Sections/AboutMe";
import { Skills } from "../Sections/Skills";
import { Projects } from "../Sections/Projects";
import { ContactMe } from "../Sections/ContactMe";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCsswizardry } from "react-icons/si";
import { BiLogoReact } from "react-icons/bi";
import { FaMarkdown } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../../hooks/useProfile";
import useProfileStore from "../../../store/useProfileStore";

export const Layout = () => {
  const sections = [
    {
      tag: "intro",
      fileName: "intro.html",
      intro: <AiFillHtml5 className="text-orange-500" />,
    },
    {
      tag: "AboutMe",
      fileName: "AboutMe.jsx",
      AboutMe: <BiLogoReact className="text-purple-500" />,
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
  useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    onSuccess: (data) => {
      useProfileStore.getState().setProfile(data);
    },
    staleTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return (
    <div className="flex flex-col h-screen text-odp-text font-mono">
      <div className="h-[5%] bg-odp-bg">
        <TabBar
          sections={sections}
          setWichSelected={setWichSelected}
          whichSelected={whichSelected}
        />
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
