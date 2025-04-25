type DataSummaryProps = {
    data: any[];
    columns: string[];
  };
  
  const DataSummary = ({ data, columns }: DataSummaryProps) => {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Data Summary</h2>
        <p>Total Rows: {data.length}</p>
        <p>Total Columns: {columns.length}</p>
      </div>
    );
  };
  
  export default DataSummary;
  