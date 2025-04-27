"use client"

import { useRef } from "react"
import { UploadCloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter  } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FileUploaderProps {
  onFileUpload: (file: File) => void;
  isProcessing: boolean;
}


export function FileUploader({ onFileUpload }: FileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      onFileUpload(file)
    }
  }

  return (
    <Card className="flex flex-col items-center justify-center gap-4 py-10">
      <CardContent className="flex flex-col items-center justify-center gap-4">
        <UploadCloud className="h-5 w-5 text-primary" />
        <Button onClick={handleButtonClick} className="text-white">
          Upload File
        </Button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </CardContent>
    </Card>
  )
}
