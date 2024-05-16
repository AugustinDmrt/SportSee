import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PoolIcon from "@mui/icons-material/Pool";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import "./NavLeft.sass";

const NavLeft = () => {
  return (
    <div className="navigation-left-container">
      <div className="navigation-left-content">
        <li className="navigation-left-icon">
          <SelfImprovementIcon />
        </li>
        <li className="navigation-left-icon">
          <PoolIcon />
        </li>
        <li className="navigation-left-icon">
          <DirectionsBikeIcon />
        </li>
        <li className="navigation-left-icon">
          <FitnessCenterIcon />
        </li>
      </div>
      <p className="navigation-left-text">Copyright, SportSee 2020</p>
    </div>
  );
};
export default NavLeft;
