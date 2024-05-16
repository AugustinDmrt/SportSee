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
  const CustomTooltip = (data: any) => {
    try {
      let kg = data.payload[0]["value"];
      let kCal = data.payload[1]["value"];

      return (
        <div className="custom-tooltip">
          <p className="label">{`${kg}kg`}</p>
          <p className="label">{`${kCal}Kcal`}</p>
        </div>
      );
    } catch {
      return null;
    }
  };

  return (
    <div className="daily-chart-container">
      <h2 className="daily-chart-title">Activité quotidienne</h2>
      <BarChart width={835} height={320} data={dataJS}>
        <CartesianGrid horizontal strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis yAxisId="right" dataKey="pv" orientation="right" />
        <YAxis yAxisId="left" dataKey="uv" orientation="left" hide={true} />
        <Tooltip
          offset={40}
          wrapperStyle={{ outline: "none", fontWeight: 600 }}
          content={<CustomTooltip />}
        />
        <Legend
          align="right"
          verticalAlign="top"
          wrapperStyle={{ lineHeight: "50px", marginBottom: "20px" }}
        />
        <Bar
          yAxisId="right"
          dataKey="pv"
          name="Poids (kg)"
          fill="#E60000"
          barSize={20}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          yAxisId="left"
          dataKey="uv"
          name="Calories brûlées (kCal)"
          fill="#282D30"
          barSize={20}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  );
};
export default DailyActivities;
