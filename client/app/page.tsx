import Image from "next/image";
import FileUpload from "./components/file-upload";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen w-screen flex bg-stone-700">
        <div className="min-h-screen w-[35vw] flex justify-center items-center  ">
          <FileUpload />
        </div>
        <div className="h-screen w-[65vw] border-l-4/20 p-4 flex justify-center items-center flex-col  shadow-xl/80 
        rounded-l-2xl ">
          <div>Something</div>
          <div className="w-full h-full border-2 border-blue border-dashed rounded-2xl flex justify-center items-center">
            <div className=" bg-slate-200 text-black">sdfad</div>
          </div>
        </div>
      </div>
    </div>
  );
}
