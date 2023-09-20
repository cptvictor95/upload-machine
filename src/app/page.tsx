import { FormWrapper } from "@/components/FormWrapper";
import { FileUploadProvider } from "@/contexts/FileUploadContext";

export default function Home() {
  return (
    <FileUploadProvider>
      <FormWrapper />
    </FileUploadProvider>
  );
}
