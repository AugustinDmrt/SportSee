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

let users = getData();
let urlId = document.location.href.split("/")[4];

Object.values(users).forEach((user) => {
  // if (user.id == urlId) {
  //   console.log(user);
  // }
  console.log(user);
});

const Home = () => {
  const data = DataCard[0][0].keyData;

  return (
    <div className="home-container">
      <NavTop />
      <div className="home-content">
        <NavLeft />
        <div className="home-dashboard">
          <h1 className="home-title">
            Bonjour <span>Thomas</span>
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
                text="Proteines"
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
