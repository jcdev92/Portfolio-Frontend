import { AddProject } from "./AddProject";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { DeleteAlert } from "../../Alerts/DeleteAlert";
import { EditProject } from "./EditProject";
import { ErrorPage } from "../../TransitionPages/ErrorPage";
import { getMany } from "../../../hooks/useFetch";
import { Loading } from "../../../components/TransitionPages/Loading";
import { motion } from "framer-motion";
import { SearchBar } from "../SearchBar/SearchBar";
import { SuccessAlert } from "../../Alerts/SuccessAlert";
import { TbDatabaseEdit, TbDatabaseMinus } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useProjectsStore } from "../../../store/useStore";
import { useQuery } from "@tanstack/react-query";

export const ProjectsTable = () => {
  const keyword = "projects";
  const messages = ["project successfully added", "project successfully updated", "project successfully deleted", "skill added to project", "skill removed from project"];
  const { data, error, isLoading, isError, isFetching } = useQuery({
    queryKey: [keyword],
    queryFn: getMany(keyword),
    onSuccess: (data) => {
      useProjectsStore.setState(
        {
          projects: data,
        },
        {
          persist: true,
        }
      )
    },
    staleTime: 60000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const [editMode, setEditMode] = useState("table");
  const [deleteMode, setDeleteMode] = useState("");
  const [deleteStatus, setDeleteStatus] = useState(null)
  const [selectedId, setSelectedId] = useState("");
  const [clicked, setClicked] = useState(null);
  const [word, setWord] = useState("");

  useEffect(() => {
    if (editMode === "add" || editMode === "edit") {
      setDeleteStatus(null)
    }
  }, [editMode])


  const handleId = (id) => {
    setSelectedId(id);
  };

  return editMode === "table" ? (
    <motion.div
      key="front"
      layoutId="card"
      initial={clicked !== null && {rotateY: 180}}
      animate={{ rotateY: 360 }}
      exit={{ rotateY: 180 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 1,
      }}
      className="w-5/6 h-5/6 z-10"
    >
      <div className="flex justify-between">
        <SearchBar word={word} setWord={setWord} />
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
      <div className="relative overflow-y-auto scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-blue-600 scrollbar-track-transparent backdrop-blur-sm w-full h-5/6 shadow-md shadow-blue-500 hover:scale-98 hover:shadow-sm hover:shadow-blue-200  transition-all ease-in-out duration-200 rounded-md">
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
          <table className="w-full sm:rounded-lg text-sm text-left text-white">
            <thead className="text-xs text-white uppercase">
              <tr className="sticky z-10 top-0 backdrop-blur-sm bg-indigo-900/80">
                <th scope="col" className="px-6 py-3">
                  <h1 className="font-bebas font-light text-lg">title</h1>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h1 className="font-bebas font-light text-lg">description</h1>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h1 className="font-bebas font-light text-lg">url</h1>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h1 className="font-bebas font-light text-lg">action</h1>
                </th>
              </tr>
            </thead>
            <tbody className="w-full h-full font-exo">
              {word.length > 0
                ? data
                    ?.filter(({ title }) => {
                      return title.toLowerCase().includes(word.toLowerCase());
                    })
                    .map(({ id, title, description, url }) => (
                      <tr key={id} className="w-auto h-auto">
                        <th
                          scope="row"
                          className="px-6 py-4 font-exos whitespace-nowrap"
                        >
                          {title}
                        </th>
                        <td className="px-6 py-4">
                          <p className="truncate overflow-ellipsis w-40">
                            {description}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="truncate overflow-ellipsis w-40">
                            {url}
                          </p>
                        </td>
                        <td className="flex px-6 py-4 gap-5">
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
                : data?.map(({ id, title, description, url }) => (
                    <tr key={id} className="w-auto h-auto">
                      <th
                        scope="row"
                        className="px-6 py-4 font-exos whitespace-nowrap"
                      >
                        {title}
                      </th>
                      <td className="px-6 py-4">
                        <p className="truncate overflow-ellipsis w-40">
                          {description}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="truncate overflow-ellipsis w-40">{url}</p>
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
            {
                    deleteStatus ? <SuccessAlert status={deleteStatus} message={messages[2]}/> : null
            }
          </table>
        )}
      </div>
      {deleteMode === "delete" && (
        <div className="backdrop-blur-sm rounded-md backdrop-filter absolute top-0 left-0 z-50 w-full h-full flex justify-center items-center">
          <DeleteAlert
            setDeleteMode={setDeleteMode}
            selectedId={selectedId}
            keyword={keyword}
            setDeleteStatus={setDeleteStatus}
          />
        </div>
      )}
    </motion.div>
  ) : editMode === "edit" ? (
    <EditProject
      setEditMode={setEditMode}
      selectedId={selectedId}
      keyword={keyword}
      setClicked={setClicked}
      messages={messages}
    />
  ) : editMode === "add" ? (
    <AddProject setEditMode={setEditMode} setClicked={setClicked} keyword={keyword} message={messages[0]}/>
  ) : editMode === "table" && isLoading ? (
    <Loading />
  ) : (
    <ErrorPage error={error} />
  );
};
