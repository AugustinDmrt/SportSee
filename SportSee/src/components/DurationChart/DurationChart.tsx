import { useEffect, useState } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import DataAverageSession from "../../assets/data/data.tsx";
import getUserAverageSessions from "../../utils/getUserAverageSessions";
import "./DurationChart.sass";

const DurationChart = (props: { urlId: string; envMode: string }) => {
  const [apiData, setApiData] = useState([{}]);
  const mockData = DataAverageSession[2][0].sessions.map((session) => ({
    name: `Jour ${session.day}`,
    uv: session.sessionLength,
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userSession = await getUserAverageSessions(props.urlId);

        if (userSession && userSession.getSessions()) {
          const formattedData = userSession
            .getSessions()
            .map((session: any) => ({
              name: `Jour ${session.day}`,
              uv: session.sessionLength,
            }));
          setApiData(formattedData);
        }
      } catch (error) {
        console.error("Error fetching user sessions:", error);
      }
    };

    fetchData();
  }, [props.urlId]);

  let data = [{}];
  if (props.envMode === "dev") {
    data = mockData;
  } else {
    data = apiData;
  }

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
        data={data}
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
