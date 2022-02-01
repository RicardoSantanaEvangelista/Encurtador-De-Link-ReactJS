import "./styles.css";
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Links() {
    return (
      <div className="links-container">

          <div className="links-header">
            <Link to={"/"}>
              <FiArrowLeft size={38} color="#FFF"/>
            </Link>
            <h1>Meus Links</h1>

          </div>

          <div className="links-item">

            <button className="link">
              <FiLink size={18} color="#FFF"/>
              https://ricardosanatana.github.com
            </button>

            <button className="link-delete">
              <FiTrash size={24} color="#FF5454"/>
            </button>

          </div>


          <div className="links-item">

            <button className="link">
              <FiLink size={18} color="#FFF"/>
              https://ricardosanatana.github.com
            </button>

            <button className="link-delete">
              <FiTrash size={24} color="#FF5454"/>
            </button>

          </div>
      </div>
    );
  }
  
  export default Links;