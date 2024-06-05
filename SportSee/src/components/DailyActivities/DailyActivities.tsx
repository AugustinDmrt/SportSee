import { useEffect, useState } from "react";
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
import getUserActivity from "../../utils/getUserActivity.ts";
import "./DailyActivities.sass";

// Fonction pour formater les dates
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${day}-${month}`;
};

const DailyActivities = (props: any) => {
  const [apiData, setApiData] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userActivity = await getUserActivity(props.urlId);

        // Vérification que les données existent et sont bien structurées
        if (userActivity && userActivity.getSessions()) {
          const formattedData = userActivity
            .getSessions()
            .map((session: any) => ({
              name: formatDate(session.day),
              pv: session.kilogram,
              uv: session.calories,
            }));
          setApiData(formattedData);
        } else {
          console.error(
            "User activity data is not in expected format:",
            userActivity
          );
        }
      } catch (error) {
        console.error("Error fetching user activity:", error);
      }
    };

    fetchData();
  }, []);

  // Données mockées
  const mockData = DataAverageSession[1][0].sessions.map((session) => ({
    name: formatDate(session.day),
    pv: session.kilogram,
    uv: session.calories,
  }));
  // Utilisation des données de l'API si disponibles, sinon utilisation des données mockées
  let data = [{}];
  if (props.envMode === "dev") {
    data = mockData;
  } else {
    data = apiData;
  }

  const CustomTooltip = ({ payload }: { payload: any }) => {
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
      <BarChart width={835} height={320} data={data}>
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
          barSize={12}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          yAxisId="left"
          dataKey="uv"
          name="Calories brûlées (kCal)"
          fill="#282D30"
          barSize={12}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  );
};

export default DailyActivities;
