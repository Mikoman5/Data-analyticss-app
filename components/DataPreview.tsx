import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DataPreviewProps {
  data: any[] | null;
  columns: string[] | null;
  isLoading: boolean;
}

export default function DataPreview({ data, columns, isLoading }: DataPreviewProps) {
  if (isLoading) {
    return (
      <Card className="bg-muted/30 shadow-sm rounded-xl">
        <CardHeader>
          <CardTitle>Data Preview</CardTitle>
          <CardDescription>Loading data...</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-64">
          <div className="animate-pulse text-muted-foreground">
            Processing data...
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!data || !columns || data.length === 0) {
    return (
      <Card className="bg-muted/30 shadow-sm rounded-xl">
        <CardHeader>
          <CardTitle>Data Preview</CardTitle>
          <CardDescription>Upload a file to see data preview</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-64">
          <div className="text-muted-foreground">
            No data available
          </div>
        </CardContent>
      </Card>
    );
  }

  const previewData = data.slice(0, 100);

  return (
    <Card className="bg-muted/30 shadow-sm rounded-xl">
      <CardHeader>
        <CardTitle>Data Preview</CardTitle>
        <CardDescription>Showing first 100 rows</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64 w-full">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead className="sticky top-0 bg-muted">
                <tr>
                  {columns.map((column, index) => (
                    <th key={index} className="px-4 py-2 font-medium text-muted-foreground text-left">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {previewData.map((row, rowIndex) => (
                  <tr key={rowIndex} className="even:bg-muted/30">
                    {columns.map((column, colIndex) => (
                      <td key={`${rowIndex}-${colIndex}`} className="px-4 py-2 border">
                        {row[column]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
