import "./Product.css"
function Product({title,features,price}){
    const list=features.map((feature=> <li>{feature}</li>));
    let styles={backgroundColor:"white"};
         return (
        <div className="Product" style={styles}>
        <h2>{title}</h2>
        <h4>Price: {price}</h4>
        <p>{list}</p>
        {price>30000 ? <p>"Discount:5%"</p> : null}
        </div>
    );
}
export default Product;