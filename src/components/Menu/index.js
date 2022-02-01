import "./styles.css";
import {BsLinkedin, BsInstagram, BsGithub} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <div className="menu">
            <a  className="social" href="https://www.linkedin.com/in/joão-ricardodev/">
                <BsLinkedin color="#FFF" size={24}/>
            </a>

            <a  className="social" href="https://www.instagram.com/ricardo.santana_j.r/">
                <BsInstagram color="#FFF" size={24}/>
            </a>

            <a  className="social" href="https://github.com/RicardoSantanaEvangelista">
                <BsGithub color="#FFF" size={24}/>
            </a>
            <Link to={"/links"} className="menu-item">
                Meus Links
            </Link>
        </div>
    );
}