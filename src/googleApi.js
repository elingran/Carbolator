import { Loader } from "@googlemaps/js-api-loader"
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const loader = new Loader({
    apiKey: process.env.REACT_APP_API_KEY,
    version: "weekly",
});


export async function DistanceMatrix(origin, destination, travelMode) {
    try {
        const google = await loader.load();
        const service = new google.maps.DistanceMatrixService();
        
        const data = await service.getDistanceMatrix({ 
            origins: [origin],
            destinations: [destination],
            travelMode: travelMode,
        });
        
        return data;
    }
    
    catch (e) {
        alert(e);
    }
}



export function AutoCompleteSearch(props) {

    return (
        <GooglePlacesAutocomplete
            apiKey={process.env.REACT_APP_API_KEY}
            selectProps={{
                value: props.value,
                onChange: props.setValue,
            }}
            apiOptions={{ language: 'en-us'}}
    />
      
  );
}

