import React, { useEffect, useState } from "react";

const PdfPage = () => {
  const [pdfFiles, setPdfFiles] = useState([]);

  useEffect(() => {
    const fetchPdfFiles = async () => {
      try {
        const response = await fetch("/api/files/");
        const data = await response.json();
        setPdfFiles(data);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchPdfFiles();
  }, []);

  const handlePdfClick = async (fileId) => {
    try {
      const response = await fetch(`/api/download/${fileId}/`);
      const data = await response.json();
      window.open(data.fileUrl, "_blank");
    } catch (error) {
      console.error("Error opening PDF:", error);
    }
  };

  return (
    <div>
      <h2>PDF Files</h2>
      <ul>
        {pdfFiles.map((file) => (
          <li key={file.id}>
            {file.file.split("/").pop()}{" "}
            <button onClick={() => handlePdfClick(file.id)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PdfPage;
