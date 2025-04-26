import { useState } from "react";
import Layout from "@/components/Layout";
import FileUploader from "@/components/FileUploader";
import DataPreview from "@/components/DataPreview";
import DataSummary from "@/components/DataSummary";
import DataVisualization from "@/components/DataVisualization";
import DataInsights from "@/components/DataInsights";
import DataRecommendations from "@/components/DataRecommendations";
import { parseFile } from "@/utils/excelParser";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [data, setData] = useState<any[] | null>(null);
  const [columns, setColumns] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleFileUpload = async (file: File) => {
    setIsLoading(true);
    try {
      const result = await parseFile(file);
      setData(result.data);
      setColumns(result.columns);

      toast({
        title: "Data loaded successfully",
        description: `Loaded ${result.data.length} rows and ${result.columns.length} columns of data.`,
      });
    } catch (error: any) {
      console.error("Error parsing file:", error);
      toast({
        variant: "destructive",
        title: "Error loading file",
        description: `There was an error processing your file. ${error.message}`,
      });
      setData(null);
      setColumns(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout title="Excel Data Analyzer">
      <div className="space-y-50"> {/* <--- Increased vertical spacing between sections */}
        
        {/* Upload and Preview Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10"> {/* gap-10 between Upload and Preview */}
          <div className="xl:col-span-1">
            <FileUploader onFileUpload={handleFileUpload} isProcessing={isLoading} />
          </div>
          <div className="xl:col-span-2">
            <DataPreview data={data} columns={columns} isLoading={isLoading} />
          </div>
        </div>

        {/* Data Insights Sections */}
        {data && columns && (
          <>
            <DataSummary data={data} columns={columns} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <DataVisualization data={data} columns={columns} />
              </div>
              <div>
                <DataInsights data={data} columns={columns} />
              </div>
            </div>
          </>
        )}

        {/* Recommendations Section */}
        <DataRecommendations data={data} columns={columns} />
      </div>
    </Layout>
  );
};

export default Index;
