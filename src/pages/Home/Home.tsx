import NavLeft from "../../components/NavLeft/NavLeft";
import NavTop from "../../components/NavTop/NavTop";
import "./Home.sass";

const Home = () => {
  return (
    <div className="home-container">
      <NavTop />
      <NavLeft />
    </div>
  );
};

export default Home;
