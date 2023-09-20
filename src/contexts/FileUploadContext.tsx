"use client";

import { createContext, useContext, useMemo, useState } from "react";

export interface FileUploadContext {
  files: Record<string, File>;
  updateFile: (name: string, file: File) => void;
}

const FileUploadContext = createContext({} as FileUploadContext);

export const useFileUpload = () => {
  return useContext(FileUploadContext);
};

/**
 *
 * @description Aqui você gerencia o estado dos arquivos que serão enviados para o cloud storage bucket.
 *
 * @todo Aqui você pode inserir mais lógica para o FileUploadProvider, como por exemplo:
 * * validateFileSize no updateFile
 * * validateFileType no updateFile
 * * etc
 */
export const FileUploadProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [files, setFiles] = useState({});

  const updateFile = (name: string, file: File) => {
    setFiles((prev) => ({ ...prev, [name]: file }));
  };

  const memoizedValue = useMemo(() => ({ files, updateFile }), [files]);

  return (
    <FileUploadContext.Provider value={memoizedValue}>
      {children}
    </FileUploadContext.Provider>
  );
};
