/* eslint-disable react/prop-types */
const TabBar = ({ sections, setWichSelected, whichSelected }) => {
  // copy the tags of each section into an array
  const arrayTags = [...sections.map((section) => section.tag)];

  // compare if the tag passed from the respective section, are in the array tags, if it true, then it will be selected to the state isSelected.
  const compareTags = (sectionTag) => {
    arrayTags.includes(sectionTag) && setWichSelected(sectionTag);
  };

  return (
    <div className="sm:flex sm:flex-col md:flex-row md:w-full md:h-full">
      {sections.map((section, index) => (
        <button
          onClick={() => compareTags(section.tag)}
          key={index} // Asegúrate de agregar una clave única para cada elemento en el array
          className={
            whichSelected === section.tag
              ? "bg-odp-foreground border-b flex items-center gap-2 h-full px-4 hover:bg-odp-text-light"
              : "bg-odp-bg flex items-center gap-2 h-full px-4 hover:bg-odp-text-light"
          }
        >
          {
            // render the icons here
            section[section.tag]
          }
          <span className="text-white">{section.fileName}</span>
        </button>
      ))}
    </div>
  );
};

export default TabBar;
