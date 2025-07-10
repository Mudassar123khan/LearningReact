import { useState } from "react";

export default function Form(){
    let [fullName,setFullName] = useState("");
    function handle(event){
        console.log(event);
        setFullName(event.target.value);
    }
    function prevent(event){
        event.preventDefault();
        setFullName("");
    }
    return (
        <>
        <form onSubmit={prevent}>
            <label htmlFor="username">Name</label>
            <input type="text" placeholder="enter some value" value={fullName} onChange={handle} id="username"></input>
            <button>Submit</button>
        </form>
        </>
    );
}