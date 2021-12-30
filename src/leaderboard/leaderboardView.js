import "./leaderboard.css";
import "../App.css";
import leaderboardImage from './leaderboard.png';

export default function LeaderboardView(props){
    return(
        <div>
            <h1 className="centered">Leaderboard</h1>
            <div className="centered"><img alt="leaderboard" src={leaderboardImage}/></div>
            <p className="centered" id="leadertext">Here you can see the leaderboard of the average carbon emissions of all Carbolator users.</p>
            <br></br><br></br>
            <div className="leader-container">
                <table id="leader" >
                    <thead>
                        <tr>
                            <th>Ranking</th>
                            <th>User</th>
                            <th>Average carbon emissions</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {props.data.map(function([name, value], index) {return( 
                            <tr key={index}>
                                <td>#{index+1}</td>
                                <td><img className="leaderboard-image" alt="profile" src={value[1] ? value[1] : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}></img> {name}</td>
                                <td className="right-aligned-text">{value[0]} kg CO<sub>2</sub></td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>          
        </div>
    )
}
