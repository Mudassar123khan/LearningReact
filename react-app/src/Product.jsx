import "./Product.css"
function Product({title,features,price}){
    const list=features.map((feature=> <li>{feature}</li>));
    if(price>=40000){
         return (
        <div className="Product">
        <h2>{title}</h2>
        <h4>Price: {price}</h4>
        <p>{list}</p>
        <p>You got 5% of discount on {title}</p>
        </div>
    );
    }else{
         return (
        <div className="Product">
        <h2>{title}</h2>
        <h4>Price: {price}</h4>
        <p>{list}</p>
        </div>
    );
    }
}
export default Product;