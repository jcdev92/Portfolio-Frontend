import { TbDatabaseEdit, TbDatabaseMinus } from "react-icons/tb";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import {
  deleteSocialMedia,
  getSocialMedia,
} from "../../../hooks/useSocialMedia";
import { Loading } from "../../../components/Loading";
import { useState } from "react";
import { EditSocialMedia } from "./EditSocialMedia";
import { AddSocialMedia } from "./AddSocialMedia";
import { DeleteAlert } from "../Alerts/DeleteAlert";
import { ErrorPage } from "../../ErrorPage";
import useSocialStore from "../../../store/useSocialStore";
import { SearchBar } from "../SearchBar/SearchBar";

export const SocialMediaTable = () => {
  const keyword = "social";
  const { data, error, isLoading, isError, isFetching } = useQuery({
    queryKey: [keyword],
    queryFn: getSocialMedia,
    onSuccess: (data) => {
      useSocialStore.getState().setSocials(data);
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
        <SearchBar title={"social media"} word={word} setWord={setWord} />
        <button
          className="rounded-full h-1/5 hover:text-yellow-300 hover:scale-110 transition-all ease-in-out delay-100"
          onClick={() => setEditMode("add")}
        >
          <BsDatabaseFillAdd />
        </button>
      </div>
      <div className="relative overflow-y-auto scrollbar scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-sky-600 scrollbar-track-transparent backdrop-blur-sm border w-full h-5/6 rounded-md shadow-md">
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
              <tr className="sticky z-10 top-0 backdrop-blur-sm bg-white/10">
                <th scope="col" className="px-6 py-3">
                  <h1 className="font-bebas font-light text-lg">title</h1>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h1 className="font-bebas font-light text-lg">icon</h1>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h1 className="font-bebas font-light text-lg">url</h1>
                </th>
                <th scope="col" className="px-6 py-3">
                  <h1 className="font-bebas font-light text-lg">action</h1>
                </th>
              </tr>
            </thead>
            <tbody className="w-full h-full">
              {
                // If the length of the word is greater than 0, then filter the data
                // based on the word
                word.length > 0
                  ? data
                      ?.filter(({ title }) => {
                        return title.toLowerCase().includes(word.toLowerCase());
                      })
                      .map(({ id, title, icon, url }) => (
                        <tr key={id} className="w-auto h-auto">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium whitespace-nowrap"
                          >
                            {title}
                          </th>
                          <td className="px-6 py-4">
                            <img
                              src={icon}
                              alt={title}
                              height={30}
                              width={30}
                            />
                          </td>
                          <td className="px-6 py-4">
                            <p className="truncate overflow-ellipsis w-40">
                              {url}
                            </p>
                          </td>
                          <td className="flex px-6 py-4 gap-5">
                            <button
                              className="text-xl hover:text-yellow-300 hover:scale-150 transition-all ease-in-out duration-75"
                              onClick={() => {
                                handleId(id);
                                setEditMode("edit");
                              }}
                            >
                              <TbDatabaseEdit />
                            </button>
                            <button
                              className="text-xl hover:text-yellow-300 hover:scale-150 transition-all ease-in-out duration-75"
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
                  : data?.map(({ id, title, icon, url }) => (
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
                        <td className="px-6 py-4">
                          <p className="truncate overflow-ellipsis w-40">
                            {url}
                          </p>
                        </td>
                        <td className="flex px-6 py-4 gap-5">
                          <button
                            className="text-xl hover:text-yellow-300 hover:scale-150 transition-all ease-in-out duration-75"
                            onClick={() => {
                              handleId(id);
                              setEditMode("edit");
                            }}
                          >
                            <TbDatabaseEdit />
                          </button>
                          <button
                            className="text-xl hover:text-yellow-300 hover:scale-150 transition-all ease-in-out duration-75"
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
              }
            </tbody>
          </table>
        )}
      </div>
    </div>
  ) : editMode === "edit" ? (
    <EditSocialMedia
      setEditMode={setEditMode}
      selectedId={selectedId}
      keyword={keyword}
    />
  ) : editMode === "add" ? (
    <AddSocialMedia setEditMode={setEditMode} />
  ) : editMode === "delete" ? (
    <DeleteAlert
      setEditMode={setEditMode}
      selectedId={selectedId}
      deleteFn={deleteSocialMedia}
      keyword={keyword}
    />
  ) : editMode === "table" && isLoading ? (
    <Loading />
  ) : (
    <ErrorPage error={error} />
  );
};
