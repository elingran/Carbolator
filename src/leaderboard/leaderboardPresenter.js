import LeaderboardView from "./leaderboardView";
import LoadingView from "../util/loadingView";
import { useModelProperty } from "../util/useModelProperty";

export default function LeaderboardPresenter(props){
    const leaderboardData = useModelProperty(props.model, "leaderboardData");

    return (
        <div>{
            leaderboardData ?
                <LeaderboardView data={Object.entries(leaderboardData).sort(([,a],[,b]) => a[0]-b[0])}/> // Sort data 
            : 
                <LoadingView/>
            }
        </div>
        
    );
}
