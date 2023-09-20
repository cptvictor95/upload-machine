"use client";

import { useFileUpload } from "@/contexts/FileUploadContext";
import React from "react";
import { useFormContext } from "react-hook-form";

const FileUploadForm = ({ onSubmit, children }) => {
  const { files } = useFileUpload();
  const { handleSubmit } = useFormContext();

  const handleFormSubmit = () => {
    onSubmit(files);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col gap-8"
    >
      {children}

      <button type="submit">Upload</button>
    </form>
  );
};

export default FileUploadForm;
