import { RadialBar, RadialBarChart } from "recharts";
import DataScore from "../../assets/data/data.tsx";
import "./ScoreChart.sass";

const ScoreChart = () => {
  const data = DataScore[0][1];
  const modifiedData = [
    {
      name: "Score",
      uv: data.score * 100,
    },
    {
      name: "Score",
      uv: 100,
      fill: "#FBFBFB",
    },
  ];

  return (
    <div className="score-chart-container">
      <h2 className="score-chart-title">Score</h2>
      <RadialBarChart
        width={258}
        height={263}
        cx="50%"
        cy="50%"
        innerRadius="70%"
        outerRadius="90%"
        barSize={10}
        data={modifiedData}
        startAngle={90}
        endAngle={480}
      >
        <RadialBar
          minAngle={15}
          background={{ fill: "#FBFBFB" }}
          clockWise={true}
          dataKey="uv"
          fill="#ff0000"
          cornerRadius={50}
        />
      </RadialBarChart>
      <div className="score-chart-display">
        <p className="score-chart-value">{data.score * 100}%</p>
        <p className="score-chart-text">
          de votre <br />
          objectif
        </p>
      </div>
    </div>
  );
};

export default ScoreChart;
