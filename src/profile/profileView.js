import "./profile.css";
import "../App.css";
import {Link} from "react-router-dom";

export default function ProfileView(props){

    return (
        <div className="profile-grid">
            <h1 className="profile-header">Profile</h1>
            <img className="profile-image" alt="profile" src={props.profilePicture} onClick={() => window.location.hash="#editprofile"}></img>

            <table style={{borderSpacing: "20px 0px"}}>
                <tbody>
                    <tr>
                        <td >Name:</td>
                        <td style={{ textAlign: 'right' }}>{props.name}</td>
                    </tr>

                    <tr>
                        <td>Email:</td>
                        <td style={{ textAlign: 'right' }}>{props.email}</td>
                    </tr>
                </tbody>
            </table>
            
            <button className="primary-button" onClick={() => window.location.hash="#editprofile"}>Edit</button>
            <button className="secondary-button" onClick={() => props.logout() }>Log out</button>

            <div id="editprofile" className="overlay">
                <div className="popup">
                    <Link className="close" to="/profile" onClick={() => window.location.hash=""}>&times;</Link>

                    <div className="profile-grid">
                        <h1 className="profile-header">Edit profile</h1>
                        
                        <table style={{borderSpacing: "20px 0px"}}>
                            <tbody>
                                <tr>
                                    <td>Username:</td>
                                    <td><input id="new_name_input" className="input-edit" placeholder="New username"/></td>
                                </tr>
                                <tr>
                                    <td>Profile picture:</td>
                                    <td><input id="new_profile_picture" className="input-edit" placeholder="Link to image"/></td>
                                </tr>
                            </tbody>
                        </table>

                        <div>
                            <button className="primary-button" onClick={() => {props.save(); window.location.hash="#"}}>Save</button>
                        </div>
                        <br></br>
                        
                    </div>
                </div>
            </div>

            
        </div>

    )
}
