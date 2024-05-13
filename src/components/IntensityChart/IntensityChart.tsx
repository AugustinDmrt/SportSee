import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";
import data from "../../assets/data/data.tsx";
import "./IntensityChart.sass";

const IntensityChart = () => {
  const USER_PERFORMANCE = data[3];
  const firstUserData = USER_PERFORMANCE.find((user) => user.userId === 12);

  const dataPerformance = firstUserData.data.map((item) => ({
    subject: firstUserData.kind[item.kind],
    value: item.value,
  }));

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
        <PolarGrid gridType="polygon" radialLines={false} stroke="#ffffff" />
        <PolarAngleAxis dataKey="subject" stroke="#ffffff" />{" "}
        {/* Rétablissez la couleur de trait à "#ffffff" */}
        <PolarRadiusAxis
          angle={30}
          domain={[0, 150]}
          tick={false}
          axisLine={false}
          tickLine={false}
        />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
        <Tooltip />
      </RadarChart>
    </div>
  );
};

export default IntensityChart;
