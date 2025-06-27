import { useState } from "react";
export default function Counter(){
    let [count,setCount] = useState(0);
    function incCount(){
    setCount(count+1);
    console.log(count);
    }
    return (
        <>
        <h1>States in React</h1>
        <button onClick={incCount}>count={count}</button>
        </>
    );
}


