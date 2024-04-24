import { Legend, RadialBar, RadialBarChart, Tooltip } from "recharts";
import "./ScoreChart.sass";

const ScoreChart = () => {
  const data = [
    {
      name: "18-24",
      uv: 31.47,
      pv: 2400,
      fill: "#8884d8",
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
        outerRadius="80%"
        barSize={10}
        data={data}
        startAngle={180}
        endAngle={0}
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
        <Tooltip />
      </RadialBarChart>
    </div>
  );
};
export default ScoreChart;
