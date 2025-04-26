import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThumbsUp } from "lucide-react";

interface DataRecommendationsProps {
  data: any[] | null;
  columns: string[] | null;
}

export default function DataRecommendations({ data, columns }: DataRecommendationsProps) {
  const generateDefaultRecommendations = () => [
    {
      title: "Upload Excel File",
      description: "Start by uploading an Excel file to get personalized data insights and recommendations."
    },
    {
      title: "Data Analysis Guide",
      description: "Our tool helps you uncover insights, identify data quality issues, and make informed decisions."
    }
  ];

  const generateDataRecommendations = () => {
    if (!data || !columns || data.length === 0) {
      return generateDefaultRecommendations();
    }

    const recommendations = [];

    const missingDataByColumn = columns.map(column => {
      const missingCount = data.filter(row =>
        row[column] === null || row[column] === undefined || row[column] === ''
      ).length;
      return { column, missingCount, missingPct: (missingCount / data.length) * 100 };
    });

    const columnsWithHighMissing = missingDataByColumn
      .filter(item => item.missingPct > 20)
      .sort((a, b) => b.missingPct - a.missingPct);

    if (columnsWithHighMissing.length > 0) {
      recommendations.push({
        title: "Improve Data Completeness",
        description: `Consider collecting more data for ${columnsWithHighMissing[0].column} as it's missing ${columnsWithHighMissing[0].missingPct.toFixed(1)}% of values.`
      });
    }

    const numericColumns = columns.filter(column => {
      const numericCount = data.filter(row =>
        !isNaN(Number(row[column])) && row[column] !== null && row[column] !== ''
      ).length;
      return (numericCount / data.length) > 0.7;
    });

    if (numericColumns.length > 0) {
      const numericCol = numericColumns[0];
      const values = data
        .map(row => Number(row[numericCol]))
        .filter(val => !isNaN(val));

      if (values.length > 0) {
        const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
        const stdDev = Math.sqrt(
          values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length
        );

        const outliers = values.filter(val => Math.abs(val - mean) > 2.5 * stdDev);
        const outlierPct = (outliers.length / values.length) * 100;

        if (outlierPct > 5) {
          recommendations.push({
            title: "Review Data Quality",
            description: `${outlierPct.toFixed(1)}% of values in ${numericCol} appear to be outliers. Consider validating these data points.`
          });
        }
      }
    }

    return recommendations.length > 0 ? recommendations : generateDefaultRecommendations();
  };

  const recommendations = generateDataRecommendations();

  return (
    <Card className="bg-muted/30 shadow-sm rounded-xl">
      <CardHeader>
        <CardTitle>Recommendations</CardTitle>
        <CardDescription>Data-driven suggestions for improvement</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
            <div className="mt-1">
              <ThumbsUp className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-sm">{rec.title}</h4>
              <p className="text-sm text-muted-foreground">{rec.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
