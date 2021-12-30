import "./navBar.css";

import menuIcon from './menu-icon.png'
import logo from './logo.png'

import {Link} from "react-router-dom";

export default function NavBarView(props) {
    return(
    
    <div className="topnav">
        <Link to="/"><img src={logo} alt="logo" className="logo"></img></Link>
        <div className="navContainer" 
            onMouseOver={() => props.myFunction(document.getElementById("dropdownNav"))} 
            onMouseOut={() => props.myFunction(document.getElementById("dropdownNav"))}>

            <img src={menuIcon} alt="menu icon" className="icon"  ></img>
            <div className="navlinks" id="dropdownNav" >
                <Link to="/" onClick={e => props.myFunction(document.getElementById("dropdownNav"))}>{props.location === "/" ? <u>HOME</u> : <span>HOME</span>}</Link>
                <Link to="/carbolate" onClick={e => props.myFunction(document.getElementById("dropdownNav"))}>{props.location === "/carbolate" ? <u>CARBOLATE</u> : <span>CARBOLATE</span>}</Link>
                <Link to="/leaderboard" onClick={e => props.myFunction(document.getElementById("dropdownNav"))}>{props.location === "/leaderboard" ? <u>LEADERBOARD</u> : <span>LEADERBOARD</span>}</Link>
                <Link to="/about" onClick={e => props.myFunction(document.getElementById("dropdownNav"))}> {props.location === "/about" ? <u>ABOUT US</u> : <span>ABOUT US</span>}</Link>
                <div className="dropdown">
                    <button className="dropbtn">{props.location === "/profile" || props.location === "/mytrips" ? <u>MY PAGES</u> : <span>MY PAGES</span>}
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/profile" onClick={e => props.myFunction(document.getElementById("dropdownNav"))}>{props.location === "/profile" ? <u>PROFILE</u> : <span>PROFILE</span>}</Link>
                        <Link to="/mytrips" onClick={e => props.myFunction(document.getElementById("dropdownNav"))}>{props.location === "/mytrips" ? <u>MY TRIPS</u> : <span>MY TRIPS</span>}</Link>
                        <Link to="/" onClick={e => props.logout()}>LOG OUT</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    ) 
}
