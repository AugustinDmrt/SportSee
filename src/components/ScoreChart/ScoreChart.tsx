import { Legend, RadialBar, RadialBarChart } from "recharts";
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
      <RadialBarChart
        width={258}
        height={263}
        cx="50%"
        cy="50%"
        innerRadius="70%"
        outerRadius="90%"
        barSize={12}
        data={modifiedData}
        startAngle={90}
        endAngle={480}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#fff" }}
          background={{ fill: "#eee" }}
          clockWise={true}
          dataKey="uv"
          fill="#ff0000"
          cornerRadius={50}
        />
        <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={{
            top: "50%",
            right: "50%",
            transform: "translate(50%, -50%)",
            fontSize: "12px",
          }}
        />
      </RadialBarChart>
    </div>
  );
};

export default ScoreChart;
