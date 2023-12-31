import { AiOutlineArrowLeft } from "react-icons/ai";
/* eslint-disable react/prop-types */
const TabBar = ({
  sections,
  setWichSelected,
  whichSelected,
  setShowNavbar,
}) => {
  // copy the tags of each section into an array
  const arrayTags = [...sections.map((section) => section.tag)];

  // compare if the tag passed from the respective section, are in the array tags, if it true, then it will be selected to the state isSelected.
  const compareTags = (sectionTag) => {
    arrayTags.includes(sectionTag) && setWichSelected(sectionTag);
  };

  return (
    <div className="flex flex-col h-1/3 justify-between md:justify-start md:flex-row md:w-full md:h-full">
      {sections.map((section, index) => (
        <button
          onClick={() => {
            compareTags(section.tag);
            setShowNavbar(false);
          }}
          key={index} // Asegúrate de agregar una clave única para cada elemento en el array
          className={
            whichSelected === section.tag
              ? "bg-odp-foreground border-b flex items-center gap-2 md:h-full px-4 py-2 md:py-0 hover:bg-odp-text-light"
              : "bg-odp-bg flex items-center gap-2 md:h-full px-4 py-2 md:py-0 hover:bg-odp-text-light"
          }
        >
          {
            // render the icons here
            section[section.tag]
          }
          <span className="text-white">{section.fileName}</span>
        </button>
      ))}
      <button
        onClick={() => setShowNavbar(false)}
        className="md:hidden flex items-center gap-2 md:h-full px-4 py-2 hover:bg-odp-text-light"
        style={{ width: "fit-content" }}
      >
        <AiOutlineArrowLeft className="text-2xl text-white" />
      </button>
    </div>
  );
};

export default TabBar;
