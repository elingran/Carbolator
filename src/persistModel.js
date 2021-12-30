import { getData, setData, getSharedData, updateSharedData } from "./firebase/firebaseApi"


export default async function persistModel(model){
    const profileData = await getData("profiles");
    const savedTrips = await getData("savedTrips");
    const leaderboard = await getSharedData("leaderboard");
    
    model.profileData = profileData;
    if(savedTrips) model.savedTrips = savedTrips;
    else model.savedTrips = {}
    model.leaderboardData = leaderboard;
    model.notifyObservers();

    model.addObserver(async function(){

        if(model.updateProfileData){
            setData("profiles", model.profileData);

            // Needs to update the leaderboard data with new name!
            const leaderboard = await getSharedData("leaderboard");
            model.leaderboardData = leaderboard;

            model.updateProfileData = false;
        }

        if(model.updateTripData){
            
            setData("savedTrips", model.savedTrips);

            updateSharedData("leaderboard", model.averageCarbon);
            const leaderboard = await getSharedData("leaderboard");
            model.leaderboardData = leaderboard;

            model.updateTripsData = false;
        }

        
    });
}