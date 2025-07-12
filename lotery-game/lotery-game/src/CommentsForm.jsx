import {useState} from "react"


export default function CommentsForm(){
    let [formData,setFormData]= useState({
        userName:"",
        remark:"",
        rating: 5
    })

    function handleForm(event){
        setFormData((currData)=>{
            return {
                ...currData,
                [event.target.name]:event.target.value
            }
        })
    }

    function prevent(event){
        event.preventDefault();
        setFormData({
            userName:"",
            remark:"",
            rating:5
        })
    }

    return (
        <>
        <h1>Comments</h1>
        <form onSubmit={prevent}>
            <input 
                placeholder="enter usename"
                type="text"
                value={formData.userName}
                onChange={handleForm}
                name="userName"
                required
                />
            <br></br><br></br>
            <textarea
                placeholder="enter remark"
                value={formData.remark}
                onChange={handleForm}
                name="remark"
                ></textarea>
            <br></br><br></br>
            <input 
                placeholder="Enter rating"
                type="number"
                value={formData.rating}
                name="rating"
                onChange={handleForm}
                min={1}
                max={5}
                required
                />
            <br></br><br></br>
            <button>Add Comment</button>
        </form>
        </>
    );
}