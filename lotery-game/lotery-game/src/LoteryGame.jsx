import { useState } from "react";
import {genTicket,sum} from "./helper.js";
export default function LoteryGame(){
    let [ticket,setTicket]=useState(genTicket(3));
    let isWin=sum(ticket)==15;
    function buyTicket(){
         setTicket(genTicket(3));
    }
    return (
        <div>
            <h1>Lotery Game</h1>
            <button onClick={buyTicket}>Buy Ticket</button>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <p>{isWin? ("You won"): ("You Lost")}</p>
        </div>
    );
}