/* eslint-disable react/prop-types */
const Tabbar = ({ setSection }) => {
  return (
    <div className="flex items-start h-full w-full bg-odp-bg">
      <div className="border h-full px-4">
        <button onClick={() => setSection("intro")}>intro.html</button>
      </div>
      <div className="border h-full px-4">
        <button onClick={() => setSection("aboutme")}>Aboutme.jsx</button>
      </div>
      <div className="border h-full px-4">
        <button onClick={() => setSection("skill")}>skills.css</button>
      </div>
      <div className="border h-full px-4">
        <button onClick={() => setSection("projects")}>projects.md</button>
      </div>
      <div className="border h-full px-4">
        <button onClick={() => setSection("contactme")}>contactme.js</button>
      </div>
    </div>
  );
};

export default Tabbar;
