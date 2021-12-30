import LoginView from "./loginView";
import { loginUser } from "../firebase/firebaseApi"


export default function LoginPresenter(props){
    return (
        <LoginView 
            login = {() => loginUser(document.getElementById('email_input').value, 
                                    document.getElementById('password_input').value) }
            register = {() => window.location.href = '/register' }
        />
    );
}

