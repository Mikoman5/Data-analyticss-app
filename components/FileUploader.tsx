import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Upload } from "lucide-react";
import { useState } from "react";

interface FileUploaderProps {
  onFileUpload: (file: File) => void;
  isProcessing: boolean;
}

export default function FileUploader({ onFileUpload, isProcessing }: FileUploaderProps) {
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (files) {
      handleFiles(files);
    }
  };

  const handleFiles = (files: FileList) => {
    if (files && files[0]) {
      const file = files[0];
      const fileType = file.name.split('.').pop()?.toLowerCase();
      if (fileType === 'xlsx' || fileType === 'xls' || fileType === 'csv') {
        onFileUpload(file);
        toast({
          title: "File uploaded",
          description: `${file.name} uploaded successfully.`,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Invalid file type",
          description: "Please upload an Excel (.xlsx, .xls) or CSV file.",
        });
      }
    }
  };

  return (
    <Card className={`border-2 ${dragActive ? "border-primary border-dashed" : "border-border"} bg-muted/30 shadow-sm rounded-xl`}>
      <CardContent
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        className="flex items-center justify-center flex-col p-6 space-y-4 text-center"
      >
        <div className="p-4 bg-primary/10 rounded-full">
          <Upload className="h-8 w-8 text-primary" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-muted-foreground">
            Drag & Drop your file here, or
          </p>
          <Input
            id="file-upload"
            type="file"
            accept=".xlsx,.xls,.csv"
            onChange={handleChange}
            className="hidden"
          />
          <label
            htmlFor="file-upload"
            className="mt-1 font-medium text-primary cursor-pointer hover:underline"
          >
            click to select
          </label>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Button disabled={isProcessing} className="w-full">
          {isProcessing ? "Processing..." : "Upload File"}
        </Button>
      </CardFooter>
    </Card>
  );
}
