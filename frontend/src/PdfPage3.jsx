import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PdfPage3.css"; // 기존 스타일 유지

const PdfPage3 = () => {
  const [results, setResults] = useState([]);

  // 결과 데이터 가져오기
  useEffect(() => {
    axios
      .get("/api/results/")
      .then((response) => setResults(response.data))
      .catch((error) => console.error("Error fetching results:", error));
  }, []);

  return (
    <div>
      <header className="header5">
        <div>AI COMPLIANCE</div>
      </header>
      <div className="dashboard5">
        <div className="card-grid5">
          {/* 기존 카드 1 */}
          <div className="card5 card5-1">
            <h2>UPLOAD</h2>
          </div>

          {/* 기존 카드 2 */}
          <div className="card5 card5-2">
            <h2>NOTICE</h2>
          </div>

          {/* 기존 카드 3 */}
          <div className="card5 card5-3">
            <h2>DOWNLOAD</h2>
          </div>
        </div>

        {/* 결과 데이터 표시 */}
        <div className="results-section">
          <h1>PDF Processing Results</h1>
          <ul>
            {results.map((result) => (
              <li key={result.id}>
                {result.filename} - {result.status}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PdfPage3;

