import { TbDatabaseEdit, TbDatabaseMinus } from "react-icons/tb";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../Loading";
import { useState } from "react";
import { EditSkill } from "./EditSkill";
import { AddSkill } from "./AddSkill";
import useSkillsStore from "../../../store/useSkillsStore";
import { DeleteAlert } from "../Alerts/DeleteAlert";
import { deleteSkill, getSkills } from "../../../hooks/useSkills";
import { ErrorPage } from "../../ErrorPage";

export const SkillsTable = () => {
  const keyword = "skills";
  const { data, error, isLoading, isError } = useQuery({
    queryKey: [keyword],
    queryFn: getSkills,
    onSuccess: (data) => {
      useSkillsStore.getState().setSkills(data);
    },
  });

  const [editMode, setEditMode] = useState("table");
  const [selectedId, setSelectedId] = useState("");

  const handleId = (id) => {
    setSelectedId(id);
  };

  return editMode === "table" ? (
    <div className="w-5/6 h-5/6">
      <div className="flex justify-between">
        <div className="pb-4 bg-transparent dark:bg-gray-900">
          <label htmlFor="table-search" className="sr-only">
            Search Skill
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
              id="table-search"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Skill"
            />
          </div>
        </div>
        <button
          className="rounded-full h-1/5 hover:text-yellow-300 hover:scale-110 transition-all ease-in-out delay-100"
          onClick={() => setEditMode("add")}
        >
          <BsDatabaseFillAdd />
        </button>
      </div>
      <div className="relative overflow-auto backdrop-blur-sm bg-white/30 w-full h-5/6 rounded-md shadow-md">
        <table className="w-full sm:rounded-lg text-sm text-left text-white">
          <thead className="text-xs text-white uppercase">
            <tr className="sticky z-10 top-0 backdrop-blur-sm bg-white/10">
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-sky-600 bg-white border-gray-300 rounded"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <h1 className="font-bebas font-light text-lg">title</h1>
              </th>
              <th scope="col" className="px-6 py-3">
                <h1 className="font-bebas font-light text-lg">icon</h1>
              </th>
              <th scope="col" className="px-6 py-3">
                <h1 className="font-bebas font-light text-lg">action</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            {isError ? (
              <h1>{error}</h1>
            ) : (
              data?.map(({ id, title, icon }) => (
                <tr key={id} className="w-auto h-auto">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-2"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-2"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {title}
                  </th>
                  <td className="px-6 py-4">
                    <img src={icon} alt={title} height={30} width={30} />
                  </td>
                  <td className="flex px-6 py-4 gap-5">
                    <button
                      className="text-xl hover:text-yellow-100 hover:scale-150 transition-all ease-in-out duration-75"
                      onClick={() => {
                        handleId(id);
                        setEditMode("edit");
                      }}
                    >
                      <TbDatabaseEdit />
                    </button>
                    <button
                      className="text-xl hover:text-yellow-100 hover:scale-150 transition-all ease-in-out duration-75"
                      onClick={() => {
                        handleId(id);
                        setEditMode("delete");
                      }}
                    >
                      <TbDatabaseMinus />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <nav
        className="flex items-center justify-between pt-4 "
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-200 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-yellow-400 dark:text-white">
            1-10
          </span>{" "}
          of{" "}
          <span className="font-semibold text-yellow-400 dark:text-white">
            1000
          </span>
        </span>
        <ul className="inline-flex -space-x-px text-sm h-8 backdrop-blur-sm bg-white/30">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-white  border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  ) : editMode === "edit" ? (
    <EditSkill setEditMode={setEditMode} selectedId={selectedId} />
  ) : editMode === "add" ? (
    <AddSkill setEditMode={setEditMode} />
  ) : editMode === "delete" ? (
    <DeleteAlert
      setEditMode={setEditMode}
      selectedId={selectedId}
      deleteFn={deleteSkill}
      keyword={keyword}
    />
  ) : editMode === "table" && isLoading ? (
    <Loading />
  ) : (
    <ErrorPage error={error} />
  );
};
