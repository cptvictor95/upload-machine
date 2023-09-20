"use client";

import { useFileUpload } from "@/contexts/FileUploadContext";
import { Controller } from "react-hook-form";

const FileInput = ({ control, name }) => {
  const { updateFile } = useFileUpload();

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
