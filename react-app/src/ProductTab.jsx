import Product from "./Product.jsx";

function ProductTab(){
    let features=[<li>"Oled display"</li>,<li>high performance</li>];

    return (
        <>
        <Product title="Phone" features={features}/>
        <Product title="PC"  />
        <Product title="Laptop" features={[<li>"intel core 7"</li>,<li>"NVIDIA RTX 3050 graphics card"</li>]}/>
        </>
    );
}

export default ProductTab;