import { useState ,useEffect} from "react";

export default function Joker(){
    const URL ="https://official-joke-api.appspot.com/random_joke";
    let [joke,setJoke] = useState({});
    const newJoke= async ()=>{
            let res=await fetch(URL);
            let jsonRes= await res.json();
            console.log(jsonRes);
            setJoke({setup:jsonRes.setup, punchline:jsonRes.punchline})
    }

    useEffect(()=>{
        let getNewJoke=async ()=>{
            let res=await fetch(URL);
            let jsonRes=await res.json();
            setJoke({setup:jsonRes.setup, punchline:jsonRes.punchline})
        }
        getNewJoke();
    },[]);
    return (
        <div>
            <h1>{joke.setup}</h1>
            <h1>{joke.punchline}</h1>
            <button onClick={newJoke}>New Joke</button>
        </div>
    );
}