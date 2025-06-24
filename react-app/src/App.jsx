import './App.css';
import Title from "./Title.jsx";
import Description from "./Description.jsx";
import ProductTab from './ProductTab.jsx';
import SayHello  from './SayHello.jsx';
function App() {
  return (
    <>
    <SayHello userName="Mudassir Khan" textcolor="green"/>
    <ProductTab/>
    </>
  );
}

export default App
