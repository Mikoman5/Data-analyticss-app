type DataRecommendationsProps = {
    data: any[] | null;
    columns: string[] | null;
  };
  
  const DataRecommendations = () => (
    <div className="bg-surface border border-border p-6 rounded-card shadow-card space-y-6">
      <h2 className="text-lg font-semibold">Recommendations</h2>
      <p className="text-sm text-subtle mb-2">Data-driven suggestions for improvement</p>
  
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <span className="text-primary text-xl">👍</span>
          <div>
            <h3 className="font-medium">Upload Excel File</h3>
            <p className="text-sm text-subtle">Start by uploading an Excel file to get personalized data insights and recommendations.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-primary text-xl">📊</span>
          <div>
            <h3 className="font-medium">Data Analysis Guide</h3>
            <p className="text-sm text-subtle">Our tool helps you uncover insights, identify data quality issues, and make informed decisions.</p>
          </div>
        </div>
      </div>
    </div>
  );
  
  
  export default DataRecommendations;
  