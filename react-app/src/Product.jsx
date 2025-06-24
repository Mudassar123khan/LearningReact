import "./Product.css"
function Product({title}){
    return (
        <div className="Product">
        <h2>{title}</h2>
        <p>Product Description</p>
        </div>
    );
}
export default Product;