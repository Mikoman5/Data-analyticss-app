type FileUploaderProps = {
  onFileUpload: (file: File) => void;
  isProcessing: boolean;
};

const FileUploader = ({ onFileUpload, isProcessing }: FileUploaderProps) => {
  return (
    <div className="bg-surface border border-border p-6 rounded-card shadow-card space-y-4">
      <div className="flex items-center justify-center space-x-2 text-subtle">
        <span className="text-2xl">📤</span>
        <span>Drag and drop or <span className="text-primary underline cursor-pointer">click to select</span></span>
      </div>
      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={(e) => onFileUpload(e.target.files?.[0]!)}
        disabled={isProcessing}
        className="hidden"
        id="upload"
      />
      <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-purple-600">Upload File</button>
    </div>
  );
};


export default FileUploader;
