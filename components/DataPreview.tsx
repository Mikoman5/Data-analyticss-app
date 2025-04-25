type DataPreviewProps = {
    data: any[] | null;
    columns: string[] | null;
    isLoading: boolean;
  };
  
  const DataPreview = ({ data, columns, isLoading }: DataPreviewProps) => {
    if (isLoading) return <p>Loading data...</p>;
    if (!data || !columns) return <p>No data loaded yet.</p>;
  
    return (
      <div className="overflow-auto bg-white p-4 rounded-xl shadow-md">
        <table className="min-w-full text-sm">
          <thead>
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="p-2 text-left">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 10).map((row, idx) => (
              <tr key={idx}>
                {columns.map((col, cid) => (
                  <td key={cid} className="p-2">{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs mt-2">Showing first 10 rows...</p>
      </div>
    );
  };
  
  export default DataPreview;
  