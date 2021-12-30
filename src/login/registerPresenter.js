import RegisterView from "./registerView";
import { registerUser } from "../firebase/firebaseApi"


export default function RegisterPresenter(props){
    return (
        <RegisterView 
            register = {() => {registerUser(document.getElementById('name_input').value,
                                           document.getElementById('email_input').value,
                                           document.getElementById('password_input').value);
                                } }

            return = {() => window.location.href = '/login' }
        />
    );
}

