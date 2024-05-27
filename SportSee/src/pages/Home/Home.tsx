import { useEffect, useState } from "react";
import DataCard from "../../assets/data/data.tsx";
import Card from "../../components/Card/Card";
import DailyActivities from "../../components/DailyActivities/DailyActivities";
import DurationChart from "../../components/DurationChart/DurationChart";
import IntensityChart from "../../components/IntensityChart/IntensityChart";
import NavLeft from "../../components/NavLeft/NavLeft";
import NavTop from "../../components/NavTop/NavTop";
import ScoreChart from "../../components/ScoreChart/ScoreChart";
import getData from "../../utils/getDataAPI.ts";
import "./Home.sass";

const urlId = document.location.href.split("/")[4];

console.log(import.meta.env.VITE_APP_NAME);

const Home = () => {
  const [data, setData] = useState({});
  const [userName, setUserName] = useState("Utilisateur");
  const envMode = import.meta.env.VITE_ENV_MODE;

  useEffect(() => {
    const fetchData = async () => {
      if (envMode === "dev") {
        console.log("Mode développement");
        const devData = DataCard[0].find(
          (user) => user.id === parseInt(urlId)
        ) as {
          id: number;
          userInfos: { firstName: string; lastName: string; age: number };
          todayScore: number;
          keyData: {
            calorieCount: number;
            proteinCount: number;
            carbohydrateCount: number;
            lipidCount: number;
          };
          score?: undefined;
        };
        setData(devData.keyData);
        setUserName(devData.userInfos.firstName);
      } else {
        console.log("Mode production");
        try {
          const userData = await getData(urlId);
          if (userData && userData.keyData) {
            setData(userData.keyData);
            setUserName(userData.userInfos.firstName);
          } else {
            console.error("No user data found");
          }
          console.log(userData);
        } catch (error) {
          console.error("Erreur lors de la récupération des données :", error);
        }
      }
    };

    fetchData();
  }, [envMode, urlId]);

  return (
    <div className="home-container">
      <NavTop />
      <div className="home-content">
        <NavLeft />
        <div className="home-dashboard">
          <h1 className="home-title">
            Bonjour <span>{userName}</span>
          </h1>
          <p className="home-text">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
          <div className="home-group">
            <div className="home-activity">
              <DailyActivities />
              <div className="home-chart">
                <DurationChart />
                <IntensityChart />
                <ScoreChart />
              </div>
            </div>
            <div className="home-card">
              <Card
                value={data.calorieCount}
                unit="kCal"
                icon="Fire"
                text="Calories"
              />
              <Card
                value={data.proteinCount}
                unit="g"
                icon="Chicken"
                text="Protéines"
              />
              <Card
                value={data.carbohydrateCount}
                unit="g"
                icon="Apple"
                text="Glucides"
              />
              <Card
                value={data.lipidCount}
                unit="g"
                icon="Cheeseburger"
                text="Lipides"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
