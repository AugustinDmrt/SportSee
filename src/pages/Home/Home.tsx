import Card from "../../components/Card/Card";
import DailyActivities from "../../components/DailyActivities/DailyActivities";
import DurationChart from "../../components/DurationChart/DurationChart";
import IntensityChart from "../../components/IntensityChart/IntensityChart";
import NavLeft from "../../components/NavLeft/NavLeft";
import NavTop from "../../components/NavTop/NavTop";
import ScoreChart from "../../components/ScoreChart/ScoreChart";
import "./Home.sass";

const Home = () => {
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
                value="1, 930"
                unit="kCal"
                icon="Fire"
                color="Red"
                text="Calories"
              />
              <Card value="1" unit="" icon="Chicken" color="" text="" />
              <Card value="1" unit="" icon="Apple" color="" text="" />
              <Card value="1" unit="" icon="Cheeseburger" color="" text="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
