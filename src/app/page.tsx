import { FormParent } from "@/components/FormParent";
import { FileUploadProvider } from "@/contexts/FileUploadContext";

export default function Home() {
  return (
    <FileUploadProvider>
      <FormParent />
    </FileUploadProvider>
  );
}
