import React, { useEffect, useState } from "react";
import useAxiosGet from "../../../hooks/useAxiosGet";
import useSkillsStore from "../../../hooks/store/skills";
import { Loading } from "../../Loading";
import { CardForm } from "./CardForm";
import TableSkills from "./TableSkills";

export const Skills = () => {
  const url = "http://localhost:9000/api/v1/skill";
  const { data, loading } = useAxiosGet(url);
  const [status, setStatus] = useState(null);
  const setSkills = useSkillsStore((state) => state.setSkills);

  useEffect(() => {
    setSkills(data);
  }, [data]);

  const [editMode, setEditMode] = useState("add");
  const [rowCellData, setRowCellData] = useState({});

  return (
    <div className="flex flex-row h-screen w-full items-center justify-around bg-transparent text-white font-sans">
      {loading && <Loading />}
      <div className="flex flex-row justify-center gap-4 lg:h-5/6 lg:w-10/12 backdrop-blur-sm bg-white/30 rounded-md border">
        <TableSkills
          setRowCellData={setRowCellData}
          setEditMode={setEditMode}
          setStatus={setStatus}
        />
        <CardForm
          editMode={editMode}
          setEditMode={setEditMode}
          rowCellData={rowCellData}
          status={status}
          setStatus={setStatus}
        />
      </div>
    </div>
  );
};
