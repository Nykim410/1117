import React, { useState, useEffect } from "react";

const PdfList = () => {
  const [files, setFiles] = useState([]); // PDF 파일 목록 상태 저장

  // PDF 목록 가져오기
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/files/") // 백엔드 API URL
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch files");
        }
        return response.json();
      })
      .then((data) => setFiles(data)) // 데이터 저장
      .catch((error) => console.error("Error fetching files:", error));
  }, []);

  // PDF 클릭 이벤트 처리
  const handlePdfClick = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/files/${id}/`); // 특정 파일 API 호출
      const data = await response.json();
      if (data.file_url) {
        window.open(data.file_url, "_blank"); // 파일 URL 새 탭에서 열기
      } else {
        console.error("Invalid file URL:", data);
      }
    } catch (error) {
      console.error("Error fetching file:", error);
    }
  };

  return (
    <div>
      <h1>Uploaded PDFs</h1>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            <button onClick={() => handlePdfClick(file.id)}>
              {file.file.split("/").pop()} {/* 파일 이름 */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PdfList;

