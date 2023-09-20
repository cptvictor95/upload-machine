"use client";

import React from "react";
import FileUploadForm from "./FileUploadForm";
import FileInput from "./FileInput";
import { FormProvider, useForm } from "react-hook-form";

export interface MyFormDTO {
  originalTicket: File;
  receivedTicket: File;
  genericField: File;
}

/**
 * @description O componente FormWrapper não precisa se preocupar com a lógica de upload de arquivos, ele apenas precisa se preocupar com o formulário em si.
 *
 * Coloque os initialValues com a estrutura de dados do MyFormDTO e use o handleFormSubmit para enviar a estrutura de dados para o cloud storage bucket.
 *
 * Contanto que o contrato da interface TypeScript com handleFormSubmit seja respeitado, o componente FormWrapper não precisa se preocupar com a lógica de upload de arquivos e aceita quantos FileInput forem necessários.
 */
export const FormWrapper = () => {
  const initialValues: MyFormDTO = {
    originalTicket: undefined,
    receivedTicket: undefined,
    genericField: undefined,
  };

  const methods = useForm<MyFormDTO>({
    defaultValues: initialValues,
  });

  const handleFormSubmit = (files: File[]) => {
    console.log(files);
    // Action do cloud bucket
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormProvider {...methods}>
        <FileUploadForm onSubmit={handleFormSubmit}>
          <FileInput name="originalTicket" />
          <FileInput name="receivedTicket" />
          <FileInput name="genericField" />
        </FileUploadForm>
      </FormProvider>
    </main>
  );
};
