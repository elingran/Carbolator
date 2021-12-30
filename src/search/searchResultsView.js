import "./search.css";
import "../App.css"
import starFill from './icons/star-fill.png';
import starNoFill from './icons/star-no-fill.png';


function SearchResultsView(props){return(
        <div className="results-container result-background">
            <h2>Search results</h2>

            {/* Trip info */}
            <div className="header">
                <div className="tofrom">
                    <div>{props.origin}</div>
                    <div>to</div>
                    <div>{props.destination}</div>
                </div>
                <div>{props.time}</div>
            </div>

            {/* Table with search results */}
            <div className="search-results-grid">
                <div className="headlines">
                    <div>Transportation type</div>
                    <div>Distance</div>
                    <div>Time</div>
                    <div>Carbon emissions</div>
                </div>
                {props.tripResults.map(function(value, index) {return( 
                                <div className="result-row" key={index} id={"row_"+(index)}>
                                    <div>{value.travelMode.split('').map((letter, index) => index ? letter.toLowerCase() : letter.toUpperCase(),).join('')}</div>
                                    <div>{value.distance.text}</div>
                                    <div>{value.duration.text}</div>
                                    <div>{value.carbonEmissions} kg CO<sub>2</sub></div>
                                    {value.saved ? 
                                            <div className="tooltip">
                                                <img className="star-click" alt="star-fill" src={starFill} onClick={() => props.onRemove(index)}/>
                                                <span className="tooltiptext">UNSAVE TRIP</span>
                                            </div>
                                        : 
                                            <div className="tooltip">
                                                <img className="star-click" alt="star-no-fill" src={starNoFill} onClick={() => props.onSave(index)}/>
                                                <span className="tooltiptext">SAVE TRIP</span>
                                            </div>
                                        }
                                        
                                    
                                </div>
                            )})}
            </div>
        </div>
    )
}

export {
    SearchResultsView
}