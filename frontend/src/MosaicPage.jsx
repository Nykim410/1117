import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./MosaicPage.css";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const MosaicPage = () => {
  const [stats, setStats] = useState({});
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("YOLO");
  const [fileList, setFileList] = useState([]);
  const chartRef = useRef(null);

  // 통계 정보 가져오기
  useEffect(() => {
    axios
      .get("/api/stats/")
      .then((response) => setStats(response.data))
      .catch((error) => console.error("Error fetching stats:", error));
  }, []);

  // 모자이크 알고리즘별 데이터
  const algorithms = ["YOLO", "Mediapipe", "HOGDescriptor", "CNN"];
  const algorithmData = {
    YOLO: ["file1.mp4", "file2.mp4"],
    Mediapipe: ["file3.mp4", "file4.mp4"],
    HOGDescriptor: ["file5.mp4", "file6.mp4"],
    CNN: ["file7.mp4", "file8.mp4"],
  };

  // 알고리즘 변경 핸들러
  const handleAlgorithmChange = (algorithm) => {
    setSelectedAlgorithm(algorithm);
    setFileList(algorithmData[algorithm] || []);
  };

  // 차트 렌더링
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // 기존 차트 제거
      if (Chart.instances.length > 0) {
        Chart.instances.forEach((instance) => instance.destroy());
      }

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: Object.keys(stats),
          datasets: [
            {
              label: "Mosaic Statistics",
              data: Object.values(stats),
              backgroundColor: ["#4CAF50", "#FF9800", "#2196F3", "#FFC107"],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, [stats]);

  return (
    <div>
      <header className="header1">
        <div>MOSAIC STATUS</div>
      </header>
      <div className="dashboard1">
        <div className="card-grid1">
          {/* DB 현황 카드 */}
          <div className="card1 card1-1">
            <h2>DB 현황</h2>
            <p>Total PDFs: {stats.total_pdfs || 0}</p>
            <p>Processed PDFs: {stats.processed_pdfs || 0}</p>
          </div>

          {/* 처리 완료 리스트 */}
          <div className="card1 card1-2">
            <h2>처리 완료 리스트</h2>
            <select
              value={selectedAlgorithm}
              onChange={(e) => handleAlgorithmChange(e.target.value)}
            >
              {algorithms.map((algo) => (
                <option key={algo} value={algo}>
                  {algo}
                </option>
              ))}
            </select>
            <ul>
              {fileList.map((file, index) => (
                <li key={index}>{file}</li>
              ))}
            </ul>
          </div>

          {/* 차트 카드 */}
          <div className="card1 card1-3">
            <h2>처리 속도 통계</h2>
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MosaicPage;
