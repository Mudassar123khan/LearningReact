import "./Product.css"
function Product({title,features,price}){
    const list=features.map((feature=> <li>{feature}</li>));
    let isDiscount=price>30000 ? "Discount:5%" : "";
    
         return (
        <div className="Product">
        <h2>{title}</h2>
        <h4>Price: {price}</h4>
        <p>{list}</p>
        <p>{isDiscount}</p>
        </div>
    );
}
export default Product;