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
import { SearchBar } from "../SearchBar/SearchBar";

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
        <SearchBar />
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
