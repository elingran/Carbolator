import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import LoginPresenter from './login/loginPresenter.js'
import RegisterPresenter from "./login/registerPresenter.js";
import SearchPresenter from './search/searchPresenter.js'
import ProfilePresenter from './profile/profilePresenter.js'
import NavBarPresenter from './navBar/navBarPresenter.js'
import AboutPresenter from './about/aboutPresenter.js'
import HomePresenter from './home/homePresenter.js'
import LeaderboardPresenter from "./leaderboard/leaderboardPresenter.js";
import TripsPresenter from "./trips/tripsPresenter.js";
import LoadingView from "./util/loadingView";

import Model from "./model.js";
import persistModel from "./persistModel.js";

// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebaseConfig.js";

import "./App.css";

function App() {
    // Keeps track of whether a user is logged in!
    const [user, loading] = useAuthState(auth);
    
    const model=new Model();

    // If a user is logged in, persist data with firebase
    if(user) persistModel(model);

    return (
        <div>
            {loading ? <LoadingView/> : // If authentication state is still loading, do not render anything
                <div>
                    <BrowserRouter>
                        {user ? <NavBarPresenter /> : null}
                        
                        <Routes>
                            <Route path="*"           element={<HomePresenter/>} />
                            <Route path="/about"      element={<AboutPresenter/>} />
                            <Route path="/login"      element={user ? <Navigate to='/carbolate'/>          : <LoginPresenter/>} />
                            <Route path="/register"   element={user ? <Navigate to='/'/>                   : <RegisterPresenter/>} />
                            
                            <Route path="/carbolate"  element={user ? <SearchPresenter     model={model}/> : <Navigate to='/login'/>} />
                            <Route path="/profile"    element={user ? <ProfilePresenter    model={model}/> : <Navigate to='/login'/>} />
                            <Route path="/leaderboard" element={user ? <LeaderboardPresenter model={model}/> : <Navigate to='/login'/>} />
                            <Route path="/mytrips"    element={user ? <TripsPresenter      model={model}/> : <Navigate to='/login'/>} />
                            
                        </Routes>
                    </BrowserRouter>       
                </div>
            }
        </div>

    );
}

export default App;

