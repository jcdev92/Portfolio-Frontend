import { AiOutlinePlus } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../../hooks/useProjects";
import { Loading } from "../../../components/Loading";
import { useState } from "react";
import { EditProject } from "./EditProject";
import { AddProject } from "./AddProject";

export const ProjectsTable = () => {
  const {
    data: projects,
    error,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["projects"], queryFn: getProjects });

  const [editMode, setEditMode] = useState("table");

  return editMode === "table" ? (
    <div className="w-5/6 h-5/6">
      <div className="flex justify-between">
        <div className="pb-4 bg-transparent dark:bg-gray-900">
          <label htmlFor="table-search" className="sr-only">
            Search Project
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
              placeholder="Search Project"
            />
          </div>
        </div>
        <button className="rounded-full h-1/5 backdrop-blur-sm bg-white/30 hover:bg-white hover:text-sky-800 hover:scale-110 transition-all ease-in-out delay-100">
          <AiOutlinePlus className="text-md" />
        </button>
      </div>
      <div className="relative overflow-auto backdrop-blur-sm bg-white/30 w-full h-5/6 rounded-md shadow-md">
        <table className="w-full sm:rounded-lg text-sm text-left text-white dark:text-gray-400">
          <thead className="border-b text-xs text-white uppercase  dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                title
              </th>
              <th scope="col" className="px-6 py-3">
                description
              </th>
              <th scope="col" className="px-6 py-3">
                url
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isError ? (
              <h1>{error}</h1>
            ) : (
              projects?.map(({ id, title, description, url }) => (
                <tr
                  key={id}
                  className=" dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600 hover:text-yellow-300"
                >
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
                    className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                  >
                    {title}
                  </th>
                  <td className="px-6 py-4">{description}</td>
                  <td className="px-6 py-4">{url}</td>
                  <td className="px-6 py-4">
                    <button
                      className="text-xl hover:text-yellow-100 hover:scale-150 transition-all ease-in-out duration-75"
                      onClick={setEditMode("edit")}
                    >
                      <AiFillEdit />
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
    <EditProject />
  ) : editMode === "add" ? (
    <AddProject />
  ) : editMode === "table" && isLoading ? (
    <Loading />
  ) : (
    <h1>Error</h1>
  );
};
