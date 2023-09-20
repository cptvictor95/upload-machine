"use client";

import { createContext, useContext, useState } from "react";

const FileUploadContext = createContext({} as any);

export const useFileUpload = () => {
  return useContext(FileUploadContext);
};

export const FileUploadProvider = ({ children }) => {
  const [files, setFiles] = useState({});

  const updateFile = (name, file) => {
    setFiles((prev) => ({ ...prev, [name]: file }));
  };

  return (
    <FileUploadContext.Provider value={{ files, updateFile }}>
      {children}
    </FileUploadContext.Provider>
  );
};
