type DataInsightsProps = {
    data: any[];
    columns: string[];
  };
  
  const DataInsights = ({ data, columns }: DataInsightsProps) => {
    if (!data || !columns) return null;
  
    const firstColumn = columns[0];
    const values = data.map(row => Number(row[firstColumn]) || 0);
  
    const max = Math.max(...values);
    const min = Math.min(...values);
  
    return (
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Insights</h2>
        <p>Max value in {firstColumn}: {max}</p>
        <p>Min value in {firstColumn}: {min}</p>
      </div>
    );
  };
  
  export default DataInsights;
  