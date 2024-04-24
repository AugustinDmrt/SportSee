import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";
import "./IntensityChart.sass";

const IntensityChart = () => {
  const data = [
    {
      subject: "Math",
      A: 120,
    },
    {
      subject: "Chinese",
      A: 98,
    },
    {
      subject: "English",
      A: 86,
    },
    {
      subject: "Geography",
      A: 99,
    },
    {
      subject: "Physics",
      A: 85,
    },
    {
      subject: "History",
      A: 65,
    },
  ];
  return (
    <div
      style={{ background: "#282D30", padding: "20px", borderRadius: "10px" }}
    >
      <RadarChart outerRadius={90} width={258} height={263} data={data}>
        <PolarGrid gridType="circle" stroke="#282D30" />
        <PolarAngleAxis dataKey="subject" stroke="#ffffff" />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 150]}
          tick={false}
          axisLine={false}
          tickLine={false}
        />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
        <Legend wrapperStyle={{ bottom: 0 }} iconType="square" />
      </RadarChart>
    </div>
  );
};
export default IntensityChart;
