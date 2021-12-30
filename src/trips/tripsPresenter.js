
import TripsView from "./tripsView";
import LoadingView from "../util/loadingView";
import { useState } from "react";

import { useModelProperty } from "../util/useModelProperty";



export default function TripsPresenter(props){
    const savedTrips = useModelProperty(props.model, "savedTrips");
    
    // Poor man's fix for React deep state update problem
    const [update, setUpdate] = useState(false);

    
    return (
        <div>{
            savedTrips ?
                <TripsView 
                    data={Object.entries(savedTrips)} 
                    total={Object.keys(savedTrips).reduce((acc, key) => acc += savedTrips[key].carbonEmissions, 0)}
                    onRemove={(key) => {props.model.removeFromTrips(key); setUpdate(!update)}}
                />
            :
                <LoadingView/>
            }
        </div>
        
    );
}
