import React, { Fragment,useState } from "react";





function InputTodo() {
    const [description, setDescription] = useState("")

    const onSubmitForm = async e =>{
        e.preventDefault();
        try{
            const body = {description};
            const response =await fetch("http://localhost:5000/todos",{
                method: "post",
                headers: {"content-type":"application/json"},
                body: JSON.stringify(body)

        
            });
            window.location="/";

        }catch (err){
            console.log(err.message)
        }

    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Input Todo List</h1>
            <form className="d-flex my-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" placeholder="Type Here" value={description} onChange={e => setDescription(e.target.value)} />
                <button className="btn btn-success" >ADD</button>


            </form>
        
        </Fragment>
    );
  }
  
  export default InputTodo;
  