//Title component
//{}can be used to evaluate expressions. The values written in the {} are treated as JS//
function Title(){
    let name="Mudassir Khan";
  return (
    <>
    <p>hey {name}</p>
    <h3>2*8={2*8}</h3>    
    <h1>Mohd Mudassir Khan</h1>
    </>
  );
}

export default Title;