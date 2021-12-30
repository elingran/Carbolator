import "./login.css";
import "../App.css";
import logo from '../home/logo_centered.png'

export default function LoginView(props){
    
    return (
    <div className="app">
        <div className="login-register-grid">
            <img id="login-logo" src={logo} alt="logo" onClick={() => window.location.href = '/'}></img>

            <input className="input font-size-16" id="email_input" placeholder="Email"/>
            <input className="input font-size-16" id="password_input" placeholder="Password" type="password"/>

            <button id="primary-button-login" onClick={() => props.login() }>Log in</button>
            <button id="link-button" onClick={e => { props.register() }}>Don't have an account? Sign up here</button>
        </div>
        
    </div>
    );
}
