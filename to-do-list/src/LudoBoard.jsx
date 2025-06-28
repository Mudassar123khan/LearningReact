import { useState } from "react";

export default function LudoBoard(){
    let [move,setmove]=useState({red:0,blue:0,green:0,yellow:0});
    let [arr,setArr]=useState([]);
    function updateBlue(){
        move.blue+=1;
        setmove({...move});
        setArr([...arr,"MMK"]);
    }
    function updateRed(){
        move.red+=1;
        setmove({...move});
    }
    function updateGreen(){
        move.green+=1;
        setmove({...move});
    }
    function updateYellow(){
        move.yellow+=1;
        setmove({...move});
    }
    return (
        <div>
            <p>Game Started</p>
            <p>{arr}</p>
            <div className="LudoBoard">
                <p>Blue moves={move.blue}</p>
                <button onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>

                <p>Red moves={move.red}</p>
                <button onClick={updateRed} style={{backgroundColor:"red"}}>+1</button>

                <p>Green moves={move.green}</p>
                <button onClick={updateGreen} style={{backgroundColor:"green"}}>+1</button>

                <p>Yellow moves={move.yellow}</p>
                <button onClick={updateYellow} style={{backgroundColor:"yellow",color:"black"}}>+1</button>
            </div>
        </div>
    );
}