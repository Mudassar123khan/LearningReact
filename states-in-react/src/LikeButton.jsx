import { useState } from "react";

export default function LikeButton(){
    let [color,setColor]=useState(false);
    function setColorF(){
        let newColor=!color;
        setColor(newColor);
    }
    let styles={
        color:"Red"
    }
    return (
        <div>
           
            <button onClick={setColorF}> {color? (<i className="fa-regular fa-heart"></i>):( <i className="fa-solid fa-heart" style={styles}></i>) }</button>
           
        </div>
    );
}