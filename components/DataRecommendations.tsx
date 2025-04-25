type DataRecommendationsProps = {
    data: any[] | null;
    columns: string[] | null;
  };
  
  const DataRecommendations = ({ data, columns }: DataRecommendationsProps) => {
    if (!data || !columns) return null;
  
    return (
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
        <p>Based on the data, you might want to look for buying opportunities when values are near the historical minimums!</p>
      </div>
    );
  };
  
  export default DataRecommendations;
  