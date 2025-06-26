function Button(){
    return (
        <div>
            <button onClick={onClick}>Click</button>
            <button onMouseOver={onMouseOver}>Hover</button>
        </div>
    );
}
function onMouseOver(){
    console.log("Mouse hover");
}
function onClick(){
    console.log("The button was clicked");
}
export default Button;