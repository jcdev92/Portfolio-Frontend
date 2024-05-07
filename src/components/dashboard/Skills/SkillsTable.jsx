import { TbDatabaseEdit, TbDatabaseMinus } from "react-icons/tb";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../TransitionPages/Loading";
import { useState } from "react";
import { EditSkill } from "./EditSkill";
import { AddSkill } from "./AddSkill";
import useSkillsStore from "../../../store/useSkillsStore";
import { DeleteAlert } from "../../Alerts/DeleteAlert";
import { ErrorPage } from "../../TransitionPages/ErrorPage";
import { SearchBar } from "../SearchBar/SearchBar";
import { motion } from "framer-motion";
import { getMany } from "../../../hooks/useFetch";

export const SkillsTable = () => {
  const keyword = "skills";
  const { data, error, isLoading, isError, isFetching } = useQuery({
    queryKey: [keyword],
    queryFn: getMany(keyword),
    onSuccess: (data) => {
      useSkillsStore.getState().setSkills(data);
    },
    staleTime: 60000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const [editMode, setEditMode] = useState("table");
  const [deleteMode, setDeleteMode] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [clicked, setClicked] = useState(null);
  const [word, setWord] = useState("");

  const handleId = (id) => {
    setSelectedId(id);
  };

  return editMode === "table" ? (
    <motion.div
      key="front"
      layoutId="card"
      initial={clicked !== null && { rotateY: 180 }}
      animate={{ rotateY: 360 }}
      exit={{ rotateY: 180 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 1,
      }}
      className={
        word.length > 0
          ? "w-5/6 h-5/6 z-10 overflow-y-auto scrollbar scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-blue-600 scrollbar-track-transparent"
          : "w-5/6 h-5/6 z-10"
      }
    >
      <div className="flex justify-between">
        <SearchBar setWord={setWord} />
        <button
          className="rounded-full h-1/5 hover:text-yellow-300 hover:scale-110 transition-all ease-in-out delay-100"
          onClick={() => {
            setEditMode("add");
            setWord("");
          }}
        >
          <BsDatabaseFillAdd />
        </button>
      </div>
      <div
        className={
          word.length > 0
            ? "relative overflow-y-auto scrollbar scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-blue-600 scrollbar-track-transparent backdrop-blur-md w-full h-auto rounded-md shadow-md shadow-blue-500 hover:scale-98 hover:shadow-sm hover:shadow-blue-200  transition-all ease-in-out duration-200"
            : "relative overflow-y-auto scrollbar scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-blue-600 scrollbar-track-transparent backdrop-blur-md w-full h-5/6 rounded-md shadow-md shadow-blue-500 hover:scale-98 hover:shadow-sm hover:shadow-blue-200  transition-all ease-in-out duration-200"
        }
      >
        {isFetching ? (
          <div className="w-full h-full flex justify-center items-center">
            <div className="loader"></div>
          </div>
        ) : isError ? (
          <div className="w-full h-full flex justify-center items-center">
            <h1 className="font-bebas font-light text-lg text-white bg-red-500 rounded-md shadow-md p-4">
              {error.message}
            </h1>
          </div>
        ) : (
          <table className="w-full h-full sm:rounded-lg text-sm text-left text-white">
            <thead className="text-xs text-white uppercase">
              <tr className="sticky z-10 top-0 backdrop-blur-md bg-indigo-900/80">
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
              {word.length > 0
                ? data
                    ?.filter(({ title }) => {
                      return title.toLowerCase().includes(word.toLowerCase());
                    })
                    .map(({ id, title, icon }) => (
                      <tr key={id} className="h-auyo">
                        <th scope="row" className="px-6 py-4 font-exo">
                          {title}
                        </th>
                        <td className="px-6 py-4">
                          <img src={icon} alt={title} height={30} width={30} />
                        </td>
                        <td className="px-6 py-4 gap-5">
                          <button
                            className="text-xl hover:text-yellow-100 hover:scale-150 transition-all ease-in-out duration-75"
                            onClick={() => {
                              handleId(id);
                              setEditMode("edit");
                              setWord("");
                            }}
                          >
                            <TbDatabaseEdit />
                          </button>
                          <button
                            className="text-xl hover:text-yellow-100 hover:scale-150 transition-all ease-in-out duration-75"
                            onClick={() => {
                              handleId(id);
                              setDeleteMode("delete");
                              setWord("");
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
                        className="px-6 py-4 font-exo whitespace-nowrap"
                      >
                        {title}
                      </th>
                      <td className="px-6 py-4">
                        <img src={icon} alt={title} height={30} width={30} />
                      </td>
                      <td className="flex px-6 py-4 gap-5">
                        <button
                          className="text-xl hover:text-yellow-300 hover:scale-150 transition-all ease-in-out duration-75"
                          onClick={() => {
                            handleId(id);
                            setEditMode("edit");
                            setWord("");
                          }}
                        >
                          <TbDatabaseEdit />
                        </button>
                        <button
                          className="text-xl hover:text-yellow-300 hover:scale-150 transition-all ease-in-out duration-75"
                          onClick={() => {
                            handleId(id);
                            setDeleteMode("delete");
                            setWord("");
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
      {deleteMode === "delete" && (
        <div className="backdrop-blur-sm rounded-md backdrop-filter absolute top-0 left-0 z-50 w-full h-full flex justify-center items-center">
          <DeleteAlert
            setDeleteMode={setDeleteMode}
            selectedId={selectedId}
            keyword={keyword}
          />
        </div>
      )}
    </motion.div>
  ) : editMode === "edit" ? (
    <EditSkill
      setEditMode={setEditMode}
      selectedId={selectedId}
      setClicked={setClicked}
      keyword={keyword}
    />
  ) : editMode === "add" ? (
    <AddSkill
      setEditMode={setEditMode}
      setClicked={setClicked}
      keyword={keyword}
    />
  ) : editMode === "table" && isLoading ? (
    <Loading />
  ) : (
    <ErrorPage error={error} />
  );
};
