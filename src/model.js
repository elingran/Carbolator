


export default class Model{
    constructor() {
        // Data
        this.profileData = null;
        this.savedTrips = null;
        this.leaderboardData = null;
        this.averageCarbon = 0;
        this.observers = [];
        

        // Used in the persistance callback function
        this.updateProfileData = false;
        this.updateTripData = false;
    }
    

    async setProfileData(data){
        this.profileData = {...data};

        this.updateProfileData = true;
        this.notifyObservers();
    }

    addToTrips(origin, destination, time, distance, duration, travelMode, carbonEmissions){
        let newTrip = { origin: origin, 
                        destination: destination, 
                        time: time,
                        distance: distance,
                        duration: duration,
                        travelMode: travelMode,
                        carbonEmissions: carbonEmissions};
        
        this.savedTrips[time+travelMode] = newTrip;

        this.updateAverageEmissions()
    }

    removeFromTrips(key){
        delete this.savedTrips[key];
        this.updateAverageEmissions()
    }

    async updateAverageEmissions(){
        var keys = Object.keys(this.savedTrips);

        var counter = 0;
        for (const key of keys) counter += this.savedTrips[key].carbonEmissions;

        if(counter !== 0) this.averageCarbon = Math.round(counter/keys.length); // Calculate average emissions
        else this.averageCarbon = 0;

        this.updateTripData = true;
        this.notifyObservers();
    }

    addObserver(cb) {
        this.observers = [...this.observers, cb];
    }

    removeObserver(cb) {
        this.observers = this.observers.filter(added_obs => added_obs !== cb);
    }

    notifyObservers() {
        this.observers.forEach(cb => {
            try {
                cb();
            } catch(error) {
                console.log(error);
            };
        })
    }
}
