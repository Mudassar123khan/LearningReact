import './App.css';

//Title component
function Title(){
  return (
    <h1>Hello World</h1>
  );
}

//Description component
function Description(){
  return (
    <h2>This is a Description</h2>
  );
}
function App() {
  return (
    <div>
      <h1>Mohd Mudassir Khan</h1>
      <Title/>
      <Description/>
    </div>
  );
}

export default App
