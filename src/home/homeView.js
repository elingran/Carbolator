import "./home.css";
import "../App.css"
import logo from './logo_centered.png'
import { Link } from "react-router-dom";

export default function HomeView() {return(
    <div>
        <div><img id="home-logo" src={logo} alt="logo"></img></div>
        <h2 id="home-logo-text">THE CARBON CALCULATOR</h2>
        
        <br></br>

        <div className="centered">
            <Link to="/carbolate"><button id="start-carbolating-button">Start Carbolating</button></Link>
        </div>

        <br></br>
        
        <div className="centered">
            <Link to='/about' className="white-text">Read more about us</Link>
        </div>
    </div>
    );
}
