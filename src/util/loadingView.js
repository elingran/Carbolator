// import "./loading.css"
import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

// export default function LoadingView(props){
//     return (<img className ="loading" src="https://zelly.se/wp-content/uploads/2021/06/loading-buffering.gif"></img>
//     );
// }

export default class App extends React.Component {
  render() {
    return (
        <div className='centered'>
            <Loader 
                type="Plane"
                color="#BBB946"
            />
        </div>
    );
  }
}
