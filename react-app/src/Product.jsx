import "./Product.css"
function Product({title,features}){
    return (
        <div className="Product">
        <h2>{title}</h2>
        <p>{features}</p>
        </div>
    );
}
export default Product;