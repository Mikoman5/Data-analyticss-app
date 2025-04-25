type FileUploaderProps = {
    onFileUpload: (file: File) => void;
    isProcessing: boolean;
  };
  
  const FileUploader = ({ onFileUpload, isProcessing }: FileUploaderProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        onFileUpload(e.target.files[0]);
      }
    };
  
    return (
      <div className="border p-6 bg-white rounded-xl shadow-md">
        <input type="file" accept=".xlsx,.xls" onChange={handleChange} disabled={isProcessing} />
        {isProcessing && <p className="text-blue-500 mt-2">Processing file...</p>}
      </div>
    );
  };
  
  export default FileUploader;
  