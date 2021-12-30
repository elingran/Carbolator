import { useEffect, useState } from "react"; 

function useModelProperty(model, propertyName){                     // custom hook
    const [value, setValue]=useState(model[propertyName]);
    
    useEffect( function(){  
              function obs(){
                  setValue(model[propertyName])}
              model.addObserver(obs);
              return function(){ model.removeObserver(obs); }        
           }, [model, propertyName]) ;

        return value;
    }

export{
    useModelProperty
}