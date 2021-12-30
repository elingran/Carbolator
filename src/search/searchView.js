import "./search.css";
import "../App.css";
import walkingIcon from './icons/walking.png';
import bicyclingIcon from './icons/bicycling.png';
import drivingIcon from './icons/driving.png';
import transitIcon from './icons/transit.png';
import infoIcon from './icons/info.png';

function SearchView(props){ 
    return(
        <div className="outer-container">
            <div className="container">
                <h1 className="centered">Enter your traveling details</h1>
            </div>

            <div className="search-bar-grid" >
                
                <div className="search-table">
                    <div className="inputs">
                        <div className="infoText">From</div>
                        <div className="search-input">{props.originInput}</div>
                    </div>
                    <div className="inputs">
                        <div className="infoText">To</div>
                        <div className="search-input">{props.destInput}</div>
                    </div>
                    <div className="inputs">
                        <div className="infoText">Departure time</div>
                        <input type="datetime-local" id="time_input" onChange={e => {props.onTimeInput(e.target.value)}}/>
                    </div>
                    <button id="search-button" disabled={props.noInputInFields()} onClick={() => props.onSearch()}>Carbolate!</button>
                    {/* <button className="primary-button" disabled={props.noInputInFields()} onClick={() => props.onSearch()}>Carbolate!</button> */}
                </div>

                <div className="checkboxes">

                    <div className="checkboxSpan">
                        <input type="checkbox" id="walking_checkbox" defaultChecked/>
                        <img id="icon" alt="walk" src={walkingIcon}/>
                        <span className="infoText">Walking </span>
                    </div>

                    <div className="checkboxSpan">
                        <input type="checkbox" id="bicycling_checkbox" defaultChecked/>
                        <img id="icon" alt="bicycling" src={bicyclingIcon}/>
                        <span className="infoText">Bicycling </span>
                    </div>

                    <div className="checkboxSpan">
                        <input type="checkbox" id="driving_checkbox" defaultChecked/>
                        <img id="icon" alt="driving" src={drivingIcon}/>
                        <span className="infoText">Driving </span>
                    </div>

                    <div className="checkboxSpan">
                        <input type="checkbox" id="public_transit_checkbox" defaultChecked/>
                        <img id="icon" alt="transit" src={transitIcon}/>
                        <span className="infoText">Public transit </span>
                    </div>
                    <div className="info-about-carbolator">
                        <img alt="info" src={infoIcon} height="50"/>
                        <span className="infotext">
                            Fill in your location, the place you are going to and time of departure.
                            The Carbolation result will provide trips with information about travel mode, 
                            traveling distance and time, and most importantly: the carbon emissions of the trip.
                        </span>
                    </div>
                </div>
            </div>
        </div>)
}

export {
    SearchView
}