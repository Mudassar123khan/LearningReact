import Product from "./Product.jsx";

function ProductTab(){
    let features=["Oled display","high performance"];

    return (
        <>
        <Product title="Phone" features={features}/>
        <Product title="PC" features={["CPU","GPU"]} />
        <Product title="Laptop" features={["intel core 7","NVIDIA RTX 3050 graphics card"]}/>
        </>
    );
}

export default ProductTab;