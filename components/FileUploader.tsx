"use client";

import { ChangeEvent, useRef } from "react";
import { Button } from "@/components/ui/button";

export interface FileUploaderProps {
  onFileUpload: (file: File) => void;
  isProcessing?: boolean;
}

export const FileUploader = ({ onFileUpload, isProcessing }: FileUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed bg-muted/20 p-8 text-center">
      <input
        ref={fileInputRef}
        type="file"
        accept=".xlsx, .xls, .csv"
        onChange={handleFileChange}
        className="hidden"
      />
      <Button
  onClick={handleButtonClick}
  className="w-full"
  disabled={isProcessing}
>
  {isProcessing ? "Processing..." : "Upload File"}
</Button>

      <p className="text-muted-foreground mt-2 text-sm">
        Only .xlsx, .xls, or .csv files
      </p>
    </div>
  );
};
