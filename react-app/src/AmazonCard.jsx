import "./AmazonCard.css";
function AmazonCard({title,description}){
        let list=description.map((mp)=><li>{mp}</li>)
         let st={border:"2px solid black",margin:"5px",padding:"5px",borderRadius:"10px",backgroundColor:"yellow"};
    return (
        <div style={st}>
        <h2>{title}</h2>
        <p>{list}</p>
        </div>
    );
}
export default AmazonCard;