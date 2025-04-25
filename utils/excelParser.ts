import * as XLSX from "xlsx";

export const parseFile = async (file: File) => {
  return new Promise<{ data: any[]; columns: string[] }>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });

      // Read the first sheet only
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: "" }); // defval: "" -> empty cells as ""
      
      if (jsonData.length === 0) {
        reject(new Error("No data found in file."));
      } else {
        const columns = Object.keys(jsonData[0] || {});
        resolve({ data: jsonData, columns });
      }
      
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsArrayBuffer(file);
  });
};
