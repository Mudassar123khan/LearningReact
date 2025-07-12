import { useState,useEffect } from "react";

export default function Counter(){
    let [countx,setCountx]=useState(0);
    let [county,setCounty]=useState(0);

    function incCountx(){
        setCountx((prev)=>{
            countx=prev+1;
            return countx;
        })
    }
    function incCounty(){
        setCounty((prev)=>{
            county=prev+1;
            return county;
        })
    }
    
    useEffect(function sideEffect(){
        console.log("This is the side effect");
    }, [countx]);

    return (
        <div>
            <h1>Countx={countx}</h1>
            <button onClick={incCountx}>+1</button>
            <h1>County={county}</h1>
            <button onClick={incCounty}>+1</button>
        </div>
    );
}