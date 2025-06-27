export default function Form(){
    return (
        <form>
            <input placeholder="give input here "/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
}

function handleSubmit(event){
    event.preventDefault();
    console.log("form was submitted");
}