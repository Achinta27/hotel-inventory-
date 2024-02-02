import React, { useState } from 'react';
import { read, utils } from 'xlsx';

const ExcelUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    try {
      if (!selectedFile) {
        alert('Please select an Excel file.');
        return;
      }

      const reader = new FileReader();

      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = read(data, { type: 'array' });

        // Now you can work with the 'workbook' object to access Excel data.
        // For example, to get the first sheet:
        const firstSheetName = workbook.SheetNames[0];
        const firstSheet = workbook.Sheets[firstSheetName];

        // Access cell values:
        const cellValueA1 = firstSheet['A1']?.v;
        alert('Excel file processed successfully!');
        console.log('Cell A1:', cellValueA1);
      };

      reader.readAsArrayBuffer(selectedFile);
    } catch (error) {
      console.error('Error:', error);
      alert('Error processing Excel file. Please check the console for details.');
    }
  };

  return (
    <div className="excel-upload">
      <h2>Upload Excel File</h2>
      <div className="dropzone">
        <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
        <p>{selectedFile ? selectedFile.name : 'Drag and drop or click to select a file'}</p>
      </div>
      <button className="productbutton" onClick={handleFileUpload}>
        Process Excel
      </button>
    </div>
  );
};

export default ExcelUpload;
