import Nav from "react-bootstrap/Nav";
import {
  BsFillGridFill,
  BsFillPersonFill,
  BsFillChatDotsFill,
  BsPieChartFill,
} from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { FaSuitcase } from "react-icons/fa";
import { MenuLateral } from "../Menu";
import { Link } from "react-router-dom";
import { HiCursorClick} from "react-icons/hi";
function Mlateral() {
  return (
    <MenuLateral>
      <div align="center" className="sidebar">
        <div  className="logo_content">
          <div align="center" className="logo">
            <div className="logo_name">
              <HiCursorClick/>
            </div>
          </div>
        </div>
        <ul  className="nav_list">
          <li>
            <a href="/adm" >
              <BsFillGridFill />
              <span className="links_name">Dashboard</span>
            </a>
          </li>
          <li>
            <Link eventKey="disabled" disabled>
              <BsFillPersonFill disabled/>
              <span className="links_name">Usuarios</span>
            </Link>
          </li>
          <li>
            <a>
              <BsFillChatDotsFill />
              <span className="links_name">Mensagens</span>
            </a>
          </li>
          <li>
            <a>
              <BsPieChartFill />
              <span className="links_name">Analystics</span>
            </a>
          </li>
          <li>
            <a >
              <AiFillSetting />
              <span className="links_name">Setting</span>
            </a>
          </li>
        </ul>
        <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              <img src="img/profile.jpg"></img>
              <div className="nome_job">
                <div className="name">Maria</div>
                <div className="job">Gerente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MenuLateral>
  );
}

export default Mlateral;
