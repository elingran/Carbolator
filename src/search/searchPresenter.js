import { useState } from "react";
import { SearchView } from "./searchView.js";
import {SearchResultsView} from "./searchResultsView.js"

import { DistanceMatrix, AutoCompleteSearch } from '../googleApi.js'
import { EmissionSource } from "../emissionSource.js";

import LoadingView from "../util/loadingView";


async function addTripData(newTripData, travelMode, origin, destination){
    try {
        const fetchedData = await DistanceMatrix(origin, destination, travelMode);
        let data = fetchedData.rows[0].elements[0];
        
        // If api 
        if(data.status !== 'NOT_FOUND' && data.status !== 'ZERO_RESULTS'){
            data["travelMode"] = travelMode;
            data["carbonEmissions"] = Math.round(EmissionSource[travelMode] * data.distance.value / 1000); // Calculate carbon emissions with constants from EmissionSource
            data["saved"] = false;
            newTripData["results"].push(data);
        }
    }
    catch(e){
        alert(e);
    }
}


export default function SearchPresenter(props){
    // Variable inputs, origin and destination is sent to AutoCompleteSearch
    const [originInput, setOriginInput] = useState(null);
    const [destInput, setDestInput] = useState(null);
    const [timeInput, setTimeInput] = useState("");

    // All data is stored in this hook!
    const [tripData, setTripData] = useState({origin: null, destination: null, time: null, results: []});
    
    const [displayTrips, setDisplayTrips] = useState(false); 
    const [loading, setLoading] = useState(false);


    async function onSearch(){
        setLoading(true);
        setDisplayTrips(true);
        
        let newTripData = {};
        newTripData.origin = originInput.label;
        newTripData.destination = destInput.label;
        newTripData.time = timeInput;
        newTripData.results = [];

        // Fetch data
        if(document.getElementById("walking_checkbox").checked) await addTripData(newTripData, "WALKING", originInput.label, destInput.label);
        if(document.getElementById("bicycling_checkbox").checked) await addTripData(newTripData, "BICYCLING", originInput.label, destInput.label);
        if(document.getElementById("driving_checkbox").checked) await addTripData(newTripData, "DRIVING", originInput.label, destInput.label);
        if(document.getElementById("public_transit_checkbox").checked) await addTripData(newTripData, "TRANSIT", originInput.label, destInput.label);
        
        newTripData.results = newTripData.results.sort((first, second) => first.carbonEmissions - second.carbonEmissions);

        setTripData(newTripData);
        setLoading(false);
        window.scrollTo(0,document.body.scrollHeight);
    }
    

    function saveTrip(index){
        // Pass the trip data to model
        props.model.addToTrips(tripData.origin, 
            tripData.destination, tripData.time, 
            tripData.results[index].distance.text, 
            tripData.results[index].duration.text, 
            tripData.results[index].travelMode, 
            tripData.results[index].carbonEmissions);

        let newTripData = {...tripData};
        newTripData.results[index].saved = true;

        setTripData(newTripData); 
    }

    function removeTrip(index){
        // Remove trip data to model
        props.model.removeFromTrips(tripData.time+tripData.results[index].travelMode);
        let newTripData = {...tripData};
        newTripData.results[index].saved = false;
        setTripData(newTripData);  
    }
    
    
    return (
        <div>
            <SearchView
                originInput={<AutoCompleteSearch value={originInput} setValue={setOriginInput}/>}
                destInput={<AutoCompleteSearch value={destInput} setValue={setDestInput}/>}
                onTimeInput={txt => setTimeInput(new Date(txt).toLocaleDateString('en-UK', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'}))}

                noInputInFields={() => originInput===null || destInput===null || timeInput ==="" ? true : false}
                onSearch={() => onSearch()} />
            {loading ? 
                <LoadingView/>
            :
                tripData.results.length ?
                    <SearchResultsView      
                        tripResults = {tripData.results} //data={Object.entries(scoreboardData).sort(([,a],[,b]) => a-b)}
                        origin={tripData.origin}
                        destination={tripData.destination}
                        time={tripData.time}
                        onSave={(index) => saveTrip(index)}
                        onRemove={(index) => removeTrip(index)}/>
                : 
                    displayTrips ? <p className="no-trips centered">No available trips</p> : null
            }
        </div>
    );
}
