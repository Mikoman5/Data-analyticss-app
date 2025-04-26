import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface DataSummaryProps {
  data: any[] | null;
  columns: string[] | null;
}

export default function DataSummary({ data, columns }: DataSummaryProps) {
  if (!data || !columns || data.length === 0) {
    return null;
  }

  const getTotalRows = () => data.length;
  const getTotalColumns = () => columns.length;

  const getNumericColumnStats = () => {
    const numericColumns = columns.filter(column => {
      const numericCount = data.filter(row =>
        !isNaN(Number(row[column])) && row[column] !== null && row[column] !== ''
      ).length;
      return (numericCount / data.length) > 0.7;
    });

    return numericColumns.map(column => {
      const values = data
        .map(row => Number(row[column]))
        .filter(val => !isNaN(val));

      if (values.length === 0) return null;

      const sum = values.reduce((acc, val) => acc + val, 0);
      const avg = sum / values.length;
      const min = Math.min(...values);
      const max = Math.max(...values);

      return {
        column,
        avg: avg.toFixed(2),
        min: min.toFixed(2),
        max: max.toFixed(2),
        sum: sum.toFixed(2)
      };
    }).filter(Boolean);
  };

  const getMissingDataPercentage = () => {
    let totalCells = data.length * columns.length;
    let missingCells = 0;

    data.forEach(row => {
      columns.forEach(column => {
        if (row[column] === null || row[column] === undefined || row[column] === '') {
          missingCells++;
        }
      });
    });

    return ((missingCells / totalCells) * 100).toFixed(1);
  };

  const numericStats = getNumericColumnStats();
  const missingDataPct = getMissingDataPercentage();

  return (
    <Card className="bg-muted/30 shadow-sm rounded-xl">
      <CardHeader>
        <CardTitle>Data Summary</CardTitle>
        <CardDescription>Overview of your dataset</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-muted p-4 rounded-md text-center">
            <p className="text-sm font-medium text-muted-foreground">Rows</p>
            <p className="text-2xl font-bold">{getTotalRows().toLocaleString()}</p>
          </div>
          <div className="bg-muted p-4 rounded-md text-center">
            <p className="text-sm font-medium text-muted-foreground">Columns</p>
            <p className="text-2xl font-bold">{getTotalColumns()}</p>
          </div>
          <div className="bg-muted p-4 rounded-md text-center">
            <p className="text-sm font-medium text-muted-foreground">Missing Data</p>
            <p className="text-2xl font-bold">{missingDataPct}%</p>
            <Progress value={Number(missingDataPct)} className="h-2 mt-2" />
          </div>
        </div>

        {numericStats.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">Numeric Column Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {numericStats.slice(0, 4).map((stat, index) => (
                <div key={index} className="border rounded-md p-3 bg-background shadow-sm">
                  <p className="text-xs font-semibold uppercase mb-2">{stat.column}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Average</p>
                      <p className="font-medium">{stat.avg}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Sum</p>
                      <p className="font-medium">{stat.sum}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Min</p>
                      <p className="font-medium">{stat.min}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Max</p>
                      <p className="font-medium">{stat.max}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
