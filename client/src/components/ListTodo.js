import React, { Fragment,useEffect,useState } from 'react';



export default function ListTodo() {
    const [todos,setTodos] = useState([]);




    const deletetodo = async id =>{
        try{const response = await fetch(`http://localhost:5000/todos/${id}`,{method: "delete"})
            window.location="/"
            

        }catch(err){
            console.log(err.message)
        }
    }

    const EditTodo = async id =>{
        try{const response = await fetch(`http://localhost:5000/todos/${id}`,{method: "put"})
            window.location="/"
            

        }catch(err){
            console.log(err.message)
        }
    }

    const getTodos = async() => {
        try{
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json();
            setTodos(jsonData);
        }catch(err){
            console.log(err.message)
        }
    };
    useEffect(() =>{
        getTodos();
    }, [])
console.log(todos)


  return (
    <Fragment>
        <div className='text-center'>
            <h1>List Todo</h1>
            <table className="table mt-2 text-center">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {todos.map(element=> (
                        
                    <tr key={element.todo_id}>
                        <td>{element.description}</td>
                        <td><button type="button" className="btn btn-warning" onClick={()=>EditTodo(element.todo_id)}>Edit</button></td>
                        <td><button type="button" className="btn btn-danger" onClick={()=>deletetodo(element.todo_id)}>Delete</button></td>
                    </tr>
                        

                    ))};
                
                </tbody>
            </table>




        </div>
    </Fragment>
     
    
  )
}
