import {
    BsFillChatDotsFill,
    BsPieChartFill,
  } from "react-icons/bs";
  import { AiFillSetting } from "react-icons/ai";
  import { MenuLateral } from "../Menu";
  import { Link } from "react-router-dom";
  import { HiCursorClick} from "react-icons/hi";
  function MlateralUser() {
    return (
      <MenuLateral>
        <div className="sidebar">
          <div className="logo_content">
          <div align="center" className="logo">
            <div className="logo_name">
              <HiCursorClick/>
              </div>
            </div>
          </div>
          <ul className="nav_list">
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
              <Link className="linkButton">
                <AiFillSetting />
                <span className="links_name">Setting</span>
              </Link>
            </li>
          </ul>
          
        
        </div>
      </MenuLateral>
    );
  }
  
  export default MlateralUser;
  