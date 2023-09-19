import NumbersCol from "./NumbersCol";

export const Layout = () => {

  return (
    <div className="flex flex-col gap-1 h-screen bg-odp-bg">
        <div className="border-2 border-white/30 h-[5%]">
            juancito
        </div>
        <div className="grid grid-cols-12 gap-1 h-[95%]">
            <div className="border-2 border-white/30 col-span-1 pt-1"><NumbersCol/></div>
            <div className="border-2 border-white/30 col-span-11">carpacho</div>
        </div>
    </div>
  );
};
