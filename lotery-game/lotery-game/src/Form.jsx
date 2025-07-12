import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password:""
  });

  function handleChange(event) {
    setFormData((currData)=>{
        return {...currData,
            [event.target.name]:event.target.value
        };
    });
  };

  function prevent(event) {
    event.preventDefault();
    setFormData({
            fullName:"",
            userName:"",
            password:""
        }
    )
  }
  return (
    <>
      <form onSubmit={prevent} id="userNameForm">
        <label htmlFor="username">userName</label>
        <input
          type="text"
          placeholder="enter username"
          value={formData.userName}
          onChange={handleChange}
          name="userName"
          id="userName"
        ></input>
     
        <label htmlFor="fullName">fullName</label>
        <input
          type="text"
          placeholder="enter full name"
          value={formData.fullName}
          onChange={handleChange}
          name="fullName"
          id="fullName"
        ></input>
        
        <label htmlFor="password">password</label>
        <input 
            type="password"
            placeholder="enter your password"
            onChange={handleChange}
            value={formData.password}
            name="password"
            id="password"
            ></input>
            <button>Submit</button>
         </form>
    </>
  );
}
