import Product from "./Product.jsx";

function ProductTab(){
    let features=["Oled display","high performance"];

    return (
        <>
        <Product title="Phone" features={features} price={30000}/>
        <Product title="PC" features={["CPU","GPU"]} price={100000}/>
        <Product title="Laptop" features={["intel core 7","NVIDIA RTX 3050 graphics card"]} price={70000}/>
        </>
    );
}

export default ProductTab;