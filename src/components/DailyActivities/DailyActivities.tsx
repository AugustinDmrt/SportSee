import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import DataActivity from "../../assets/data/data.json";
import "./DailyActivities.sass";

const DailyActivities = () => {
  const data = DataActivity["USER_ACTIVITY"][0];
  const dataJS = data.sessions.map((session) => ({
    name: `Jour ${session.day}`,
    pv: session.kilogram,
    uv: session.calories,
  }));

  return (
    <div className="daily-chart-container">
      <h2 className="daily-chart-title">Activité quotidienne</h2>
      <BarChart width={835} height={320} data={dataJS}>
        <CartesianGrid horizontal strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis dataKey="pv" orientation="right" />
        <YAxis dataKey="uv" orientation="left" hide={true} />
        <Tooltip />
        <Legend
          align="center"
          verticalAlign="top"
          wrapperStyle={{ lineHeight: "40px" }}
        />
        <Bar dataKey="pv" name="Poids (kg)" fill="#E60000" barSize={20} />
        <Bar
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
