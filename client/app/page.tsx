import Image from "next/image";
import FileUpload from "./components/file-upload";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen w-screen flex">
        <div className="min-h-screen w-[35vw] flex justify-center items-center  ">
          <FileUpload />
        </div>
        <div className="h-screen w-[65vw] border-l-2">2</div>
      </div>
    </div>
  );
}
