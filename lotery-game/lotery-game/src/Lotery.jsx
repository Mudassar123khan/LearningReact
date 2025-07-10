import { useState } from "react";
import Ticket from "./Ticket";
import { genTicket,sum } from "./helper";

export default function Lotery({n, winningSum}){
    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning=sum(ticket)==winningSum;

    function buyTicket(){
        setTicket(genTicket(n));
    }
    return (
        <div>
            <Ticket ticket={ticket}/>
            <br></br>
            <button onClick={buyTicket}> Buy Ticket</button>
            <br></br>
            <br></br>
            {isWinning? ("Won"): ("You Lost")}
        </div>
    );
}