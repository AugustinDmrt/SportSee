import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import DataAverageSession from "../../assets/data/data.tsx";
import "./DurationChart.sass";

const DurationChart = () => {
  const data = DataAverageSession[2][0].sessions;
  const dataJS = data.map((session: { day: any; sessionLength: any }) => ({
    name: `Jour ${session.day}`,
    uv: session.sessionLength,
  }));

  return (
    <div className="duration-chart-container">
      <h2
        className="duration-chart-title"
        style={{ color: "#fff", textAlign: "center" }}
      >
        Durée moyenne des sessions
      </h2>
      <LineChart
        width={300}
        height={200}
        data={dataJS}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" stroke="#ffffff" />
        <YAxis stroke="#ffffff" />
        <Tooltip cursor={false} />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#ffffff"
          strokeWidth={2}
          // dot={{ stroke: "#ffffff", strokeWidth: 2, r: 6, fill: "#ffffff" }}
          activeDot={{
            r: 8,
            fill: "#ffffff",
            stroke: "#E60000",
            strokeWidth: 2,
          }}
        />
      </LineChart>
    </div>
  );
};
export default DurationChart;
