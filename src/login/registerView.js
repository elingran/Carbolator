import "./login.css";
import "../App.css";

export default function RegisterView(props){
    
    return (
        <div className="login-register-grid">
            <h1>Register to Carbolator!</h1>
            <p className="paragraph">Register to get access to the features of Carbolator.</p>
            <p className="paragraph-disclaimer">(The password is stored on Firebase, but for security reasons: Use a throw-away password.)</p>
            
            <input className="input" id="name_input" placeholder="Username"/>
            <input className="input" id="email_input" placeholder="Email" type="email"/>
            <input className="input" id="password_input" placeholder="Password" type="password"/>

            <div>
                <button className="secondary-button" onClick={() => props.return() }>Return</button>
                <button className="primary-button" onClick={() => props.register() }>Register</button>
            </div>
            
        </div>
    );
}
