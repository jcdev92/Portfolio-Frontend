import { useState } from "react";
import NumbersCol from "./NumbersCol";
import Tabbar from "./Tabbar";

export const Layout = () => {
  const [section, setSection] = useState("");
  return (
    <div className="flex flex-col h-screen text-odp-text font-mono">
      <div className="h-[5%]">
        <Tabbar setSection={setSection} />
      </div>
      <div className="flex h-[95%] w-full bg-odp-foreground">
        <div className="border-2 border-white/30 w-[3%] text-odp-pink-light">
          <NumbersCol />
        </div>
        <div className="border-2 border-white/30 w-[97%]">{section}</div>
      </div>
    </div>
  );
};
