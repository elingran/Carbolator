import ProfileView from "./profileView";
import LoadingView from "../util/loadingView";

import { useModelProperty } from "../util/useModelProperty";
import { logoutUser } from "../firebase/firebaseApi"


export default function ProfilePresenter(props){
    const profileData = useModelProperty(props.model, "profileData");


    function saveData(name, profilePicture){
        let newProfileData = {...props.model.profileData};

        if(name !== "")
            newProfileData.name = name;

        if(profilePicture !== "")
            newProfileData.profilePicture = profilePicture;

        props.model.setProfileData(newProfileData);
    }

    return (
        <div>{
            profileData ?
                    <ProfileView name = {profileData.name} email = {profileData.email}
                    profilePicture={profileData.profilePicture ? profileData.profilePicture : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}
                    logout ={() => logoutUser()} 
                    save = {() => saveData(document.getElementById('new_name_input').value, document.getElementById('new_profile_picture').value)}
                    />
            : 
                <LoadingView/> // loading if data has not yet been fetched from firebase
            }
        </div>
        
    );
}
