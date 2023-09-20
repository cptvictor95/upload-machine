"use client";

import { useFileUpload } from "@/contexts/FileUploadContext";
import { Controller, useFormContext } from "react-hook-form";
export interface FileInputProps {
  name: string;
}

/**
 *
 * @description Passando as props pro FileInput diretamente, você tira a responsabilidade do hook de lógica do formulário e coloca no componente do próprio documento a ser inserido.
 *
 * @todo Aqui você pode inserir mais props para o FileInput, como por exemplo:
 * * label,
 * * maxFileSize
 * * minFileSize
 * * acceptedTypes
 * * etc
 *
 * @todo Aqui você pode usar outros elementos de UI relacionados ao campo de arquivo, como por exemplo:
 * * error message
 */
const FileInput = ({ name }: FileInputProps) => {
  const { updateFile } = useFileUpload();
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <label>{name}</label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            type="file"
            {...field}
            onChange={(e) => {
              updateFile(name, e.target.files[0]);

              field.onChange(e);
            }}
            accept=".jpg,.jpeg,.png,.svg"
          />
        )}
      />
    </div>
  );
};

export default FileInput;
