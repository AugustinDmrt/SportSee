import Apple from "../../assets/icon/apple.svg";
import Cheeseburger from "../../assets/icon/cheeseburger.svg";
import Chicken from "../../assets/icon/chicken.svg";
import Fire from "../../assets/icon/energy.svg";
import "./Card.sass";

const Card = (props: {
  value: string;
  unit: string;
  icon: string;
  color: string;
  text: string;
}) => {
  let logo = "";
  let color = "";
  switch (props.icon) {
    case "Fire":
      logo = Fire;
      color = "rgba(255, 0, 0, 0.1)";
      break;
    case "Chicken":
      logo = Chicken;
      color = "rgba(74, 184, 255, 0.1)";
      break;
    case "Apple":
      logo = Apple;
      color = "rgba(253, 204, 12, 0.1)";
      break;
    case "Cheeseburger":
      logo = Cheeseburger;
      color = "rgba(253, 81, 129, 0.1)";
      break;
    default:
      break;
  }
  return (
    <div className="card-container">
      <div className="card-image-container" style={{ backgroundColor: color }}>
        <img className="card-image" src={logo} alt="" />
      </div>
      <div className="card-content">
        <h2>{props.value}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
