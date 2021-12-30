import { Loader } from "@googlemaps/js-api-loader"


const loader = new Loader({
    apiKey: process.env.REACT_APP_API_KEY,
    version: "weekly",
});


export const RouteSource = {   // JS object creation literal

    async apiCall(origin, destination) {
        try {
            var google = await loader.load()
            var service = new google.maps.DistanceMatrixService();
            
            var data = await service.getDistanceMatrix({ 
                origins: [origin],
                destinations: [destination],
                travelMode: 'DRIVING',
            });

            console.log("api called");
            return data;
        }
        
        catch (e) {
            console.log(e);
        }
    }
}


