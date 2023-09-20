"use client";

import React from "react";
import FileUploadForm from "./FileUploadForm";
import FileInput from "./FileInput";
import { FormProvider, useForm } from "react-hook-form";

export const FormParent = () => {
  const initialValues = {
    originalTicket: null,
    receivedTicket: null,
    anotherUserDocument: null,
  };

  const methods = useForm({
    defaultValues: initialValues,
  });

  const { control } = methods;

  const handleFormSubmit = (files) => {
    console.log(files);
    // Send to your cloud bucket here
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormProvider {...methods}>
        <FileUploadForm onSubmit={handleFormSubmit}>
          <FileInput control={control} name="originalTicket" />
          <FileInput control={control} name="receivedTicket" />
          <FileInput control={control} name="anotherUserDocument" />
        </FileUploadForm>
      </FormProvider>
    </main>
  );
};
