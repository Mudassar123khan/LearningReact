import "./Product.css"
import Price from "./Price.jsx"
function Product({title,idx}){
    let oldPrice=["12495","11900","1599","599"];
    let newPrice=["8999","9199","899","278"];
    let discription=[["8000 DPI","5 Programmable Buttons"],["Intutive Surface","Designed for iPad Pro"],["Designed for iPad Pro","Intutive Surface"],["wireless","Optical Orientation"]]
         return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{discription[idx][0]}</p>
            <p>{discription[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
}
export default Product;