/* eslint-disable react/prop-types */
const Tabbar = ({ setSection, section }) => {
  return (
    <div className="flex items-start h-full w-full bg-odp-bg">
      <div
        className={
          section === "intro"
            ? "bg-odp-foreground border-b h-full px-4 hover:bg-odp-text-light"
            : "h-full px-4 hover:bg-odp-text-light"
        }
      >
        <button className="h-full" onClick={() => setSection("intro")}>intro.html</button>
      </div>
      <div
        className={
          section === "aboutme"
            ? "bg-odp-foreground border-b h-full px-4 hover:bg-odp-text-light"
            : "h-full px-4 hover:bg-odp-text-light"
        }
      >
        <button className="h-full" onClick={() => setSection("aboutme")}>Aboutme.jsx</button>
      </div>
      <div
        className={
          section === "skills"
            ? "bg-odp-foreground border-b h-full px-4 hover:bg-odp-text-light"
            : "h-full px-4 hover:bg-odp-text-light"
        }
      >
        <button className="h-full" onClick={() => setSection("skills")}>skills.css</button>
      </div>
      <div
        className={
          section === "projects"
            ? "bg-odp-foreground border-b h-full px-4 hover:bg-odp-text-light"
            : "h-full px-4 hover:bg-odp-text-light"
        }
      >
        <button className="h-full" onClick={() => setSection("projects")}>projects.md</button>
      </div>
      <div
        className={
          section === "contactme"
            ? "bg-odp-foreground border-b h-full px-4 hover:bg-odp-text-light"
            : "h-full px-4 hover:bg-odp-text-light"
        }
      >
        <button className="h-full" onClick={() => setSection("contactme")}>contactme.js</button>
      </div>
    </div>
  );
};

export default Tabbar;
