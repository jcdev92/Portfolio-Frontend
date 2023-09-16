/* eslint-disable react/prop-types */
export const SearchBar = ({ setWord }) => {
  // make a function to search for a specific item in the data array
  const search = (e) => {
    setWord(e.target.value);
  };

  return (
    <div className="pb-4 bg-transparent backdrop-blur-sm dark:bg-gray-900">
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div className="relative mt-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-sky-400/50"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          onChange={search}
          id="table-search"
          className="block bg-transparent text-white p-2 pl-10 text-sm text-gray-900 border border-sky-400/50  rounded-lg w-80 bg-gray-50 placeholder-sky-400/50 focus:ring-blue-500 focus:border-blue-500 font-exo"
          placeholder="Search"
        />
      </div>
    </div>
  );
};
