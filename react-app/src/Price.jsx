function Price({oldPrice,newPrice}){
    let styles={
        backgroundColor:"#e0c367",
        color:"black",
        height:"30px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px",
        width:"200px"
    }
    return (
        <div style={styles}>
        <span style={{textDecorationLine:"line-through"}}>{oldPrice}</span>
        &nbsp; &nbsp;
        <span style={{fontWeight:"bold"}}>{newPrice}</span>
        </div>
    );
}
export default Price;