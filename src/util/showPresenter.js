import { useEffect, useState } from "react";

function Show(props){
    // props.hash, props.children
    const [hashState, setHash]=useState(window.location.hash);
    useEffect( function(){  
        const listener= function(){ setHash(window.location.hash);}
        window.addEventListener("hashchange", listener);   // 1 subscribe
        
        return function(){ window.removeEventListener("hashchange", listener) } // 2
    }, []); 

    let visible = "hidden";
    if(hashState == props.hash) visible = "resultBackround";
    return <div className={visible}>{props.children}</div>
}

export{
    Show
}