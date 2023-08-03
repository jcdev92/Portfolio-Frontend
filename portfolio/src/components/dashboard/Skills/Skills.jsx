import { useState } from "react";
import { CardForm } from "./CardForm";
import TableSkills from "./TableSkills";
import useSkills from "../../../hooks/useSkills";
import useStatusStore from "../../../store/useStatusStore";

export const Skills = () => {
  useStatusStore.getState().setSuccess(null);
  useStatusStore.getState().setError(null);
  const url = "http://localhost:9000/api/v1/skill";
  const { useGetSkills } = useSkills();
  useGetSkills(url);

  const [editMode, setEditMode] = useState("add");
  const [rowCellData, setRowCellData] = useState({});

  return (
    <div className="flex flex-row h-screen w-full items-center justify-around bg-transparent text-white font-sans">
      <div className="flex flex-row justify-center gap-4 lg:h-5/6 lg:w-10/12 backdrop-blur-sm bg-white/30 rounded-md border">
        <TableSkills
          setRowCellData={setRowCellData}
          setEditMode={setEditMode}
        />
        <CardForm
          editMode={editMode}
          setEditMode={setEditMode}
          rowCellData={rowCellData}
        />
      </div>
    </div>
  );
};
