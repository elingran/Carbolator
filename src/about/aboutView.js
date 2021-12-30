import "./about.css";
import "../App.css";
import { EmissionSource } from "../emissionSource.js";
import calculatorImage from './calculator.png';
import logo from '../home/logo_centered.png'
import { Link } from "react-router-dom";

export default function AboutView(){
    return (
        <div id="about-container">
            
            <h1>About</h1>
            <img id="about-logo" src={logo} alt="logo" onClick={() => window.location.href = '/'}></img>
            <br></br>
            
            <div>    
                <h2 className="centered">Welcome to Carbolator – the carbon calculator!</h2>
                <div className="centered">
                    <p>
                        Here you can calculate the amount of carbon emissions your traveling activies generate, 
                        and compare different traveling options. By doing this you can make greener traveling 
                        choices and join us on the journey of decreasing the carbon footprint.
                        <br></br><br></br>
                        Make sure to <Link to="/register" className="white-text">create a profile</Link> to unlock all features.
                    </p>
                </div>
                    
                <br></br><br></br><br></br>

                <h2>How are the emissions calculated?</h2>
                <div><img alt="calculator" src={calculatorImage}/></div>
                <br></br>
                The emissions are calculated by distances sourced from the&nbsp;
                <a className="white-text" 
                    href="https://developers.google.com/maps/documentation/distance-matrix/overview" 
                    target="_blank" 
                    rel="noreferrer">Google Distance Matrix API</a>.
                
                <br></br><br></br><br></br>

                The distances are multiplied with emission average numbers that are derived in the following ways:

                <h3>Walking and bicycling:</h3>
                {EmissionSource.WALKING} kg CO<sub>2</sub>e/km for walking and&nbsp;
                {EmissionSource.BICYCLING} kg CO<sub>2</sub>e/km for bicycling.
                Depends on what kind of food, BMI and a lot of other factors. This is average for industrial countries like the UK.
                <br></br>
                Source: 
                <a className="white-text" 
                    href="https://www.nature.com/articles/s41598-020-66170-y" 
                    target="_blank" 
                    rel="noreferrer">Nature</a>
                <br></br><br></br>

                <h3>Driving:</h3>
                Average CO<sub>2</sub> emissions from all new cars reached 0.1223 kg CO<sub>2</sub>/km.
                SUV (38 % of newly registered cars in 2019). 
                Most new SUVs registered were petrol vehicles, with average emissions of {EmissionSource.DRIVING} kg CO<sub>2</sub>/km.
                <br></br>
                Source: 
                <a className="white-text" 
                    href="https://www.eea.europa.eu/ims/co2-performance-of-new-passenger" 
                    target="_blank" 
                    rel="noreferrer">EEA</a>
                <br></br><br></br>

                <h3>Public transit:</h3>
                We have used an average carbon footprint as if you only traveled by national rail, {EmissionSource.TRANSIT} kg CO<sub>2</sub>/km.<br></br>
                (Unfortunately, the Distance Matrix API does not return detailed information about bus and train distances respectively.)
                <br></br>
                Source: 
                <a className="white-text" 
                    href="https://ourworldindata.org/travel-carbon-footprint" 
                    target="_blank" rel="noreferrer">Our World in Data</a>
                <br></br><br></br><br></br>

                <p id="copyright-text">
                    © Carbolator (2021)
                    <br></br>
                    Developed by Elin Granstedt, Linnéa Gustafsson, Filippa Leuckfeld & Oskar Svanström
                </p>
                <br></br>
            </div>
        </div>
    );
}
