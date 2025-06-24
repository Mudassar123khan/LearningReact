import AmazonCard from "./AmazonCard.jsx";
import "./AmazonCard.css";
function AmazonCards(){

    return (
        <div className="AmazonCard">
        <h1 style={{border:"2px solid white",fontSize:"40px"}}>Blockbuster deals on Computer accessories | Shop Now</h1>
        <AmazonCard title={"Logitec MX Master"} description={["8000 DPI", "5 Programmable Buttons", "Old Price:12,495 New Price: 8999"]}/>
        <AmazonCard title={"Apple Pencil"} description={["Intutive Touch Surface","Designed for iPad Pro","Old Price:11900 New Price:9199"]}/>
        <AmazonCard title={"Zebronics"} description={["Designed for iPad Pro","Intutive Touch Surface","Old Price:1599 New Price:899"]}/>
        <AmazonCard title={"Petronics Toad"} description={["Wireless Mouse 2.4GHz","Optical Orientation","Old Price:599 New Price:278"]}/>
        </div>
    );
}

export default AmazonCards;