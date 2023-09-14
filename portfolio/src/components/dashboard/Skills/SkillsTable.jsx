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
import { Spinner } from "flowbite-react";

export const SkillsTable = () => {
  const keyword = "skills";
  const { data, error, isLoading, isError, isFetching } = useQuery({
    queryKey: [keyword],
    queryFn: getSkills,
    onSuccess: (data) => {
      useSkillsStore.getState().setSkills(data);
    },
    staleTime: 60000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const [editMode, setEditMode] = useState("table");
  const [selectedId, setSelectedId] = useState("");
  const [word, setWord] = useState("");

  const handleId = (id) => {
    setSelectedId(id);
  };

  return editMode === "table" ? (
    <div className="w-5/6 h-5/6 z-10">
      <div className="flex justify-between">
        <SearchBar title={"skill"} word={word} setWord={setWord} />
        <button
          className="rounded-full h-1/5 hover:text-yellow-300 hover:scale-110 transition-all ease-in-out delay-100"
          onClick={() => setEditMode("add")}
        >
          <BsDatabaseFillAdd />
        </button>
      </div>
      <div className="relative overflow-auto backdrop-blur-sm border w-full h-5/6 rounded-md shadow-md">
        {isFetching ? (
          <div className="w-full h-full flex justify-center items-center">
            <Spinner size="xl" />
          </div>
        ) : isError ? (
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="font-bebas font-light text-lg text-white bg-red-500 rounded-md shadow-md p-4">
              {error.message}
            </h1>
          </div>
        ) : (
          <table className="w-full sm:rounded-lg text-sm text-left text-white">
            <thead className="text-xs text-white uppercase">
              <tr className="sticky z-10 top-0 backdrop-blur-sm bg-white/10">
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
            <tbody className="w-full h-full">
              {}
              {word.length > 0
                ? data
                    ?.filter(({ title }) => {
                      return title.toLowerCase().includes(word.toLowerCase());
                    })
                    .map(({ id, title, icon }) => (
                      <tr key={id} className="w-auto h-auto">
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
                : data?.map(({ id, title, icon }) => (
                    <tr key={id} className="w-auto h-auto">
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
                  ))}
            </tbody>
          </table>
        )}
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
