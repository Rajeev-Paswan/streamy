import reactSvg from "../assets/react.svg";
import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={reactSvg} alt="" />
      </div>
      <div className="sandWitch_bar"></div>
    </div>
  );
}
export default Header;
