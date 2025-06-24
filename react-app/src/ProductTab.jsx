import Product from "./Product.jsx";

function ProductTab(){
    return (
        <>
        <Product title="Phone" features={[" oled display"," high performance"]}/>
        <Product title="PC"  />
        <Product title="Laptop" features={["intel core 7",", NVIDIA RTX 3050 graphics card"]}/>
        </>
    );
}

export default ProductTab;