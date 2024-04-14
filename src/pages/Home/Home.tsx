import DailyActivities from "../../components/DailyActivities/DailyActivities";
import NavLeft from "../../components/NavLeft/NavLeft";
import NavTop from "../../components/NavTop/NavTop";
import "./Home.sass";

const Home = () => {
  return (
    <div className="home-container">
      <NavTop />
      <div className="home-content">
        <NavLeft />
        <div className="home-dashbord">
          <h1>
            Bonjour <span>Thomas</span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div>
          <DailyActivities />
        </div>
      </div>
    </div>
  );
};

export default Home;
