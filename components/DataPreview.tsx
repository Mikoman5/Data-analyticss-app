type DataPreviewProps = {
  data: any[] | null;
  columns: string[] | null;
  isLoading: boolean;
};

const DataPreview = ({ data }: { data: any[] | null }) => {
  return (
    <div className="bg-surface border border-border p-6 rounded-card shadow-card">
      <h2 className="text-lg font-semibold mb-2">Data Preview</h2>
      <p className="text-sm text-subtle mb-4">Upload a file to see data preview</p>
      {data ? (
        <table className="w-full text-sm text-gray-700">
          <thead>
            {/* render column headers */}
          </thead>
          <tbody>
            {/* render rows */}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-subtle py-10">No data available</p>
      )}
    </div>
  );
};


export default DataPreview;
