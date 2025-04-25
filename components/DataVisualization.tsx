import "@/utils/chart-setup"; // This runs the ChartJS.register() code


import { Line } from 'react-chartjs-2';

type DataVisualizationProps = {
  data: any[];
  columns: string[];
};

const DataVisualization = ({ data, columns }: DataVisualizationProps) => {
  if (!data || data.length === 0) return null;

  const sampleColumn = columns[0]; // Use first column for example
  const chartData = {
    labels: data.map((_, idx) => idx.toString()),
    datasets: [
      {
        label: sampleColumn,
        data: data.map((row) => Number(row[sampleColumn]) || 0),
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Data Visualization</h2>
      <Line data={chartData} />
    </div>
  );
};

export default DataVisualization;
