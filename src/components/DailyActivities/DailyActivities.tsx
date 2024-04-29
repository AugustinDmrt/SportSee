import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import DataAverageSession from "../../assets/data/data.tsx";
import "./DailyActivities.sass";

const DailyActivities = () => {
  const data = DataAverageSession[1][0].sessions;
  const dataJS = data.map(
    (session: { [x: string]: any; day: any; sessionLength: any }) => ({
      name: `Jour ${session.day}`,
      pv: session.kilogram,
      uv: session.calories,
    })
  );

  return (
    <div className="daily-chart-container">
      <h2 className="daily-chart-title">Activité quotidienne</h2>
      <BarChart width={835} height={320} data={dataJS}>
        <CartesianGrid horizontal strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis yAxisId="right" dataKey="pv" orientation="right" />
        <YAxis yAxisId="left" dataKey="uv" orientation="left" hide={true} />
        <Tooltip />
        <Legend
          align="center"
          verticalAlign="top"
          wrapperStyle={{ lineHeight: "40px" }}
        />
        <Bar
          yAxisId="right"
          dataKey="pv"
          name="Poids (kg)"
          fill="#E60000"
          barSize={20}
        />
        <Bar
          yAxisId="left"
          dataKey="uv"
          name="Calories brûlées (kCal)"
          fill="#282D30"
          barSize={20}
        />
      </BarChart>
    </div>
  );
};
export default DailyActivities;
