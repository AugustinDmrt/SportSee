import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

const IntensityChart = () => {
  const data = [
    {
      subject: "Math",
      A: 120,
      B: 110,
    },
    {
      subject: "Chinese",
      A: 98,
      B: 130,
    },
    {
      subject: "English",
      A: 86,
      B: 130,
    },
    {
      subject: "Geography",
      A: 99,
      B: 100,
    },
    {
      subject: "Physics",
      A: 85,
      B: 90,
    },
    {
      subject: "History",
      A: 65,
      B: 85,
    },
  ];
  return (
    <RadarChart outerRadius={90} width={258} height={263} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Radar
        name="Lily"
        dataKey="B"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
};
export default IntensityChart;
