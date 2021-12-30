import "./trip.css";
import "../App.css"
import trashIcon from './trash.png'
import analyticsImage from './analytics.png'
import starImage from '../search/icons/star.png';
import {Link} from "react-router-dom";

export default function TripsView(props){

    let delKey = null;
    
    return(
        <div>
            <h1 className="centered">My trips</h1>
            <div className="centered"><img alt="saved" src={starImage}/></div>
            <br></br><br></br>
           
            <div id="table_trips">
                <table id="trips">
                    <thead>
                        <tr>
                            <th>Origin</th>
                            <th>Destination</th>
                            <th>Time</th>
                            <th>Travel mode</th>
                            <th>Duration</th>
                            <th>Distance</th>
                            <th>Carbon emissions</th>
                            <th></th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {props.data.map(function([key, data]) {return( 
                            <tr key={key}>
                                <td>{data.origin}</td>
                                <td>{data.destination}</td>
                                <td>{data.time}</td>
                                <td>{data.travelMode}</td>
                                <td>{data.duration}</td>
                                <td>{data.distance}</td>
                                <td className="right-aligned-text">{data.carbonEmissions} kg CO<sub>2</sub></td>
                                <td><img id="trash-click" src={trashIcon} alt="" onClick={() => {window.location.hash="#delete-trip"; delKey = key}}/></td>
                            </tr>
                        )})}
                    </tbody>
                </table>
                <br></br><br></br>
                <div className="centered">
                    <div className="border-container">
                        <br></br>
                        <div className="centered"><img alt="analytics" src={analyticsImage}/></div>
                        <div className="total-average-text">
                            <p>Total emissions: <br></br> 
                            {props.total} kg CO<sub>2</sub></p>
                        </div>
                        <div className="total-average-text">
                            <p>Average emissions:  <br></br> 
                            {(props.total / props.data.length).toFixed(0)} kg CO<sub>2</sub></p>
                        </div>
                    </div>
                </div>
                <br></br><br></br>
            </div>

            <div id="delete-trip" className="overlay">
                <div className="popup">
                    <Link className="close" to="/mytrips" onClick={() => window.location.hash=""}>&times;</Link>
                    
                    <div className="profile-grid">
                        <h1 className="profile-header">Delete trip</h1>
                        <p>Are you sure you want to delete this trip?</p>

                        <div>
                            <button id="delete-button" onClick={() => {props.onRemove(delKey); window.location.hash=""}}>Delete</button>
                            <button className="secondary-button" onClick={() => window.location.hash=""}>Cancel</button>
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>

        </div>
    )
}