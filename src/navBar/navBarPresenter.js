import NavBarView from "./navBarView";
import { logoutUser } from "../firebase/firebaseApi"
import { useLocation } from 'react-router-dom'

export default function NavBarPresenter() {
    let location = useLocation().pathname;

    function myFunction(x) {
        if (x.className === "navlinks" && window.innerWidth <=800){
            x.className += "responsive";
        } else {
            x.className = "navlinks";
        }
      }

    return <NavBarView logout={()=>logoutUser()}
                        myFunction = {x => myFunction(x)}
                        location={location}/>
}
