import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DailyActivities = () => {
  const data = [
    {
      name: "Lundi",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Mardi",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mercredi",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Jeudi",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Vendredi",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Samedi",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Dimanche",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};
export default DailyActivities;
