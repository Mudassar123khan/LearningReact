import "./Product.css"
function Product(props){
    return (
        <div className="Product">
        <h2>{props.title}</h2>
        <p>Product Description</p>
        </div>
    );
}
export default Product;