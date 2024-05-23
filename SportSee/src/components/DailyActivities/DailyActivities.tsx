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

// Fonction pour formater les dates
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${day}-${month}`;
};

const DailyActivities = () => {
  const data = DataAverageSession[1][0].sessions;
  const dataJS = data.map((session) => ({
    name: formatDate(session.day), // Formatage de la date
    pv: session.kilogram,
    uv: session.calories,
  }));

  const CustomTooltip = ({ payload }) => {
    if (!payload || payload.length === 0) {
      return null;
    }

    const kg = payload[0].value;
    const kCal = payload[1].value;

    return (
      <div className="custom-tooltip">
        <p className="label">{`${kg}kg`}</p>
        <p className="label">{`${kCal}Kcal`}</p>
      </div>
    );
  };

  return (
    <div className="daily-chart-container">
      <h2 className="daily-chart-title">Activité quotidienne</h2>
      <BarChart width={835} height={320} data={dataJS}>
        <CartesianGrid horizontal strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#9B9EAC" }}
        />
        <YAxis
          yAxisId="right"
          dataKey="pv"
          orientation="right"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#9B9EAC" }}
        />
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
