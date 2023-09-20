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

  /**
   * @description Esse componente serve principalmente como camada de escopo para o hook de lógica do formulário.
   *
   * @todo Aqui você também pode inserir mais props para o FileUploadForm, como por exemplo:
   * * onReset
   * * etc
   * @todo Aqui você pode também usar o children para inserir mais componentes de UI, como por exemplo:
   * * title
   * * description
   * * isLoading
   * * isDisabled
   * * etc
   */
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
