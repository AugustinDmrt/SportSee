import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";
import DataIntensity from "../../assets/data/data.tsx";
import "./IntensityChart.sass";

const IntensityChart = () => {
  const firstUserData = DataIntensity[3][0];

  const dataPerformance = firstUserData.data.map(
    (item: { kind: string | number; value: any }) => ({
      subject: item.kind,
      value: item.value,
    })
  );
  return (
    <div
      style={{ background: "#282D30", padding: "20px", borderRadius: "10px" }}
    >
      <RadarChart
        outerRadius={90}
        width={258}
        height={263}
        data={dataPerformance}
      >
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
