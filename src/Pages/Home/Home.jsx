import { Link } from "react-router-dom";
import { HomeStyles } from "../../Styles/Home";
import { HiCursorClick } from "react-icons/hi";
import { Row,Col } from "react-bootstrap";
export default function Home() {
  return (
    <HomeStyles>
      <nav>
        <div className="navbar">
          <div className="logo">
            <div className="logo_name">
              <HiCursorClick />
            </div>
          </div>

          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Latest</a>
            </li>
            <li>
              <a href="#">Category</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="search-box">
            <input type="text" placeholder="Search here..." />
            <a href="#">
              <i className="fas fa-search"></i>
            </a>
          </div>
        </div>
      </nav>

      <div className="content">
        <div className="text-content">
          <div className="text">Bem vindo ao</div>
          <div className="name">Midia Online</div>
          <div className="job">
            <div className="job">
              <span>A sua</span>
              <div className="typing-text">
                <span className="one">Agencia</span>
                <span className="two">de Marketing</span>
              </div>
            </div>
          </div>
          <div className="buttons">
            
                <button>
                  <Link className="linkButton" to="/loginadm">
                    Sou Adm
                  </Link>
                </button>
              
                <button>
                  <Link className="linkButton" to="/loginuser">
                    Sou Usuario
                  </Link>
                </button>
            
          </div>
        </div>
        <div class="marketing">
          <img src="img/Marketing.png" alt="" />
        </div>
      </div>
    </HomeStyles>
  );
}
