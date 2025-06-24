import "./Product.css"
function Product({title,features}){
    const list=features.map((feature=> <li>{feature}</li>));
    return (
        <div className="Product">
        <h2>{title}</h2>
        <p>{list}</p>
        </div>
    );
}
export default Product;