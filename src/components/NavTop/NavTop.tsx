import Logo from "../../assets/Logo/logo.png";
import "./NavTop.sass";

const NavTop = () => {
  return (
    <div className="navigation-top-container">
      <img className="navigation-logo" src={Logo} alt="Logo SportSee" />
      <div className="navigation-top-content">
        <li>
          <a href="">Accueil</a>
        </li>
        <li>
          <a href="">Profil</a>
        </li>
        <li>
          <a href="">Réglage</a>
        </li>
        <li>
          <a href="">Communauté</a>
        </li>
      </div>
    </div>
  );
};
export default NavTop;
