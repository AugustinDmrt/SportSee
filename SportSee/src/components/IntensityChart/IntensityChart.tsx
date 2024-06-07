import { useEffect, useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";
import DataIntensity from "../../assets/data/data.tsx";
import getUserPerformance from "../../utils/getUserPerformance.ts";
import "./IntensityChart.sass";

const IntensityChart = (props: { urlId: string; envMode: string }) => {
  const [apiData, setApiData] = useState<any[]>([]);
  const USER_PERFORMANCE = DataIntensity[3];
  const firstUserData = USER_PERFORMANCE.find((user) => user.userId === 12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userPerformance = await getUserPerformance(props.urlId);

        if (userPerformance) {
          const kindTranslation = {
            1: "Cardio",
            2: "Energie",
            3: "Endurance",
            4: "Force",
            5: "Vitesse",
            6: "Intensité",
          };

          const apiData = userPerformance.data.map((item: any) => ({
            subject: kindTranslation[item.kind],
            value: item.value,
          }));
          setApiData(apiData);
        }
      } catch (error) {
        console.error("Error fetching user performance:", error);
      }
    };

    fetchData();
  }, [props.urlId]);

  const kindTranslation = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  let mockData = [{}];
  if (firstUserData && firstUserData.data) {
    mockData = firstUserData.data.map((item: any) => ({
      subject: kindTranslation[item.kind],
      value: item.value,
    }));
  }

  let data = [{}];
  if (props.envMode === "dev") {
    data = mockData;
  } else {
    data = apiData.length ? apiData : mockData;
  }

  return (
    <div
      style={{ background: "#282D30", padding: "20px", borderRadius: "10px" }}
    >
      <RadarChart outerRadius={90} width={320} height={263} data={data}>
        <PolarGrid gridType="polygon" radialLines={false} stroke="#ffffff" />
        <PolarAngleAxis dataKey="subject" stroke="#ffffff" labelOffset={10} />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 150]}
          tick={false}
          axisLine={false}
          tickLine={false}
        />
        <Radar
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
