import React, { useState } from "react";
import axios from "axios";
import "./PdfPage2.css";
import { Bar } from "react-chartjs-2";

const PdfPage2 = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [file, setFile] = useState(null);

  // Chart 데이터
  const data = {
    labels: [
      "AI 정책 준수 가이드",
      "데이터 보호 가이드",
      "FAQ",
      "데이터 분석 가이드",
    ],
    datasets: [
      {
        label: "조회 수",
        data: [120, 80, 60, 100],
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3", "#FFC107"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: { ticks: { stepSize: 20 } },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  // 파일 선택
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadedFile(selectedFile);
      console.log("Selected file:", selectedFile.name);
    }
  };

  // 파일 업로드
  const handleFileUpload = () => {
    if (!file) {
      alert("Please select a file before uploading!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("/api/upload/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        alert("File uploaded successfully");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  return (
    <div>
      <header className="header4">
        <div>AI COMPLIANCE</div>
      </header>
      <div className="sub-header4">2023 상반기</div>
      <div className="card4-grid4">
        {/* UPLOAD 카드 */}
        <div className="card4 card4-1">
          <h2>정책 업로드</h2>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="file-upload-input1"
          />
          {uploadedFile && (
            <p className="file-upload-message">Uploaded: {uploadedFile.name}</p>
          )}
          <button onClick={handleFileUpload} className="upload-button1">
            업로드
          </button>
        </div>

        {/* NOTICE 카드 */}
        <div className="card4 card4-2">
          <div className="notice-section">
            <h3>컴플라이언스 공지사항</h3>
            <p className="notice-item1">
              [2023-07-15] AI 알고리즘 윤리적 검토 완료
            </p>
            <p className="notice-item1">
              [2023-06-30] 데이터 사용 정책 업데이트
            </p>
            <p className="notice-item1">
              [2023-06-01] 컴플라이언스 교육 의무화 시행
            </p>
            <div className="notice-more1">더보기</div>
          </div>
        </div>

        {/* 사용자 통계 카드 */}
        <div className="card4 card4-3">
          <h3>사용자 통계</h3>
          <div className="statistics-container1">
            <div className="statistic-item1">
              <span className="stat-title1">현재 접속자</span>
              <span className="stat-value1">52명</span>
            </div>
            <div className="statistic-item1">
              <span className="stat-title1">총 업로드</span>
              <span className="stat-value1">152건</span>
            </div>
            <div className="statistic-item1">
              <span className="stat-title1">총 다운로드</span>
              <span className="stat-value1">430건</span>
            </div>
          </div>
        </div>

        {/* DOWNLOAD 카드 */}
        <div className="card4 card4-4">
          <h2>DOWNLOAD</h2>
          <button className="download-button1">파일 다운로드</button>
        </div>

        {/* 최근 업데이트 내역 */}
        <div className="card4 card4-5">
          <h3>최근 업데이트 내역</h3>
          <ul className="update-list1">
            <li>[2023-07-10] 정책 검토 시스템 자동화 업데이트</li>
            <li>[2023-06-25] AI 검토 보고서 통합 기능 추가</li>
            <li>[2023-06-01] 데이터 암호화 강화</li>
          </ul>
        </div>

        {/* 유용한 자료 및 도움말 카드 */}
        <div className="card4 card4-6">
          <h3>유용한 자료 및 도움말</h3>
          <div className="helpful-links-container1">
            <div className="helpful-link-row1">
              <div className="helpful-link-item1">
                <a href="#">📘 AI 정책 준수 가이드</a>
              </div>
              <div className="helpful-link-item1">
                <a href="#">🔒 데이터 보호 가이드</a>
              </div>
            </div>
            <div className="helpful-link-row1">
              <div className="helpful-link-item1">
                <a href="#">❓ 컴플라이언스 FAQ</a>
              </div>
              <div className="helpful-link-item1">
                <a href="#">📊 데이터 분석 가이드</a>
              </div>
            </div>
            <div style={{ height: "110px", width: "400px", marginTop: "0px" }}>
              <Bar data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfPage2;
