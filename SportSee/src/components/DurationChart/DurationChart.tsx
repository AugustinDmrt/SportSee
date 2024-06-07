import { useEffect, useState } from "react";
import {
  Line,
  LineChart,
  ReferenceArea,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import DataAverageSession from "../../assets/data/data.tsx";
import getUserAverageSessions from "../../utils/getUserAverageSessions";
import "./DurationChart.sass";

const DurationChart = (props: { urlId: string; envMode: string }) => {
  const [apiData, setApiData] = useState([]);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const mockData = DataAverageSession[2]
    .find((user) => user.userId === parseInt(props.urlId))
    .sessions.map((session) => ({
      name: ["L", "M", "M", "J", "V", "S", "D"][session.day - 1],
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
              name: ["L", "M", "M", "J", "V", "S", "D"][session.day - 1],
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

  const data = props.envMode === "dev" ? mockData : apiData;

  const CustomTooltip = ({
    active,
    payload,
    label,
    coordinate,
    index,
  }: any) => {
    if (active && payload && payload.length) {
      setHoverIndex(index);
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffffff",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          <p
            className="label"
            style={{ color: "#000" }}
          >{`${payload[0].value} min`}</p>
        </div>
      );
    }

    setHoverIndex(null);
    return null;
  };

  return (
    <div
      className="duration-chart-container"
      style={{ background: "#E60000", borderRadius: "5px", padding: "10px" }}
    >
      <h2
        className="duration-chart-title"
        style={{ color: "#fff", textAlign: "left", margin: 0 }}
      >
        Durée moyenne des sessions
      </h2>
      <LineChart
        width={300}
        height={200}
        data={data}
        margin={{ top: 20, right: 20, left: 20, bottom: 10 }}
      >
        <XAxis dataKey="name" stroke="#ffffff" tick={{ fontSize: 12 }} />
        <YAxis hide={true} />
        <Tooltip content={<CustomTooltip />} cursor={false} />
        {hoverIndex !== null && hoverIndex < data.length && (
          <ReferenceArea
            x1={data[hoverIndex].name}
            x2={data[data.length - 1].name}
            strokeOpacity={0.3}
            fill="#000"
            fillOpacity={0.1}
          />
        )}
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#ffffff"
          strokeWidth={2}
          dot={false}
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
