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

const Home = () => {
  const [data, setData] = useState({
    score: 0,
    calorieCount: 0,
    proteinCount: 0,
    carbohydrateCount: 0,
    lipidCount: 0,
  });
  const [userName, setUserName] = useState("Utilisateur");
  const envMode = import.meta.env.VITE_ENV_MODE;

  useEffect(() => {
    const fetchData = async () => {
      if (envMode === "dev") {
        console.log("Mode développement");
        const devData = DataCard[0].find((user) => user.id === parseInt(urlId));
        if (devData) {
          setData({
            score:
              devData.todayScore !== undefined
                ? devData.todayScore
                : devData.score,
            calorieCount: devData.keyData.calorieCount,
            proteinCount: devData.keyData.proteinCount,
            carbohydrateCount: devData.keyData.carbohydrateCount,
            lipidCount: devData.keyData.lipidCount,
          });
          setUserName(devData.userInfos.firstName);
        } else {
          console.error("No user data found in development mode");
        }
      } else {
        console.log("Mode production");
        try {
          const userData = await getData(urlId);
          if (userData && userData.keyData) {
            setData({
              score:
                userData.todayScore !== undefined
                  ? userData.todayScore
                  : userData.score,
              calorieCount: userData.keyData.calorieCount,
              proteinCount: userData.keyData.proteinCount,
              carbohydrateCount: userData.keyData.carbohydrateCount,
              lipidCount: userData.keyData.lipidCount,
            });
            setUserName(userData.userInfos.firstName);
          } else {
            console.error("No user data found");
          }
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
              <DailyActivities urlId={urlId} envMode={envMode} />
              <div className="home-chart">
                <DurationChart urlId={urlId} envMode={envMode} />
                <IntensityChart />
                <ScoreChart score={data.score} />
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
