"use client";
import { Upload } from "lucide-react";
import * as React from "react";

const FileUpload: React.FC = () => {
  const handleFileUploadButtonClick = () => {
    const el = document.createElement("input");
    el.setAttribute("type", "file");
    el.setAttribute("accept", ".pdf,.doc,.docx");
    el.addEventListener("change", async (ev) => {
      if (el.files && el.files.length > 0) {
        const file = el.files.item(0);

        //form data
        if (file) {
          const formData = new FormData();
          formData.append("pdf", file);

          await fetch("http://localhost:8000/upload/pdf", {
            method: "POST",
            body: formData,
          });

          console.log("file uploaded");
        }
      }
    });
    el.click();
  };

  return (
    <div className=" border-2 border-dashed  text-white p-6  flex justify-center items-center rounded-md border-black shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] font-sans">
      <div
        onClick={handleFileUploadButtonClick}
        className=" flex justify-center items-center flex-col gap-4"
      >
        <h3>Upload your file</h3>
        <Upload />
      </div>
    </div>
  );
};

export default FileUpload;
