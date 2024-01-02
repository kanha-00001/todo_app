import express from "express";
import pg from 'pg';
import cors from "cors";



const app = express();
const port = 5000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "perntodo",
    password: "kanha@2003",
    port: 5432,
  });
  db.connect();

app.use(cors());
app.use(express.json());


app.post("/todos",async(req,res)=> {
   try{
    const {description}= req.body
    const newTodo = await db.query("INSERT INTO todo (description) VALUES ($1) RETURNING *",[description]);
    res.json(newTodo.rows[0]);
   } catch (err){
        console.log(err.message);

   } 

})

app.get("/todos", async (req,res) =>{
    try{
        const allTodos = await db.query("SELECT * FROM todo");
        res.json(allTodos.rows);

    } catch (err){
        console.log(err.message);

   } 

    
})

app.get("/todos:id", async (req,res) =>{
    try{
        const {id} = req.params;
        const Todos = await db.query("SELECT * FROM todo where todo_id=$1",[id]);
        res.json(Todos.rows);

    } catch (err){
        console.log(err.message);

   } 

    
})

app.put("/todos/:id", async(req,res) =>{
    try{
        const {id}= req.params;
        const {description} = req.body;
        const updateTodo = await db.query("UPDATE todo SET description = $1 WHERE todo_id= $2",[description,id]);
        res.json("todo was updated")




    }catch (err){
        console.log(err.message);

   } 

   


})
app.delete("/todos/:id", async (req,res) =>{
    try{
        const {id} = req.params;
        const deleteTodo = await db.query("DELETE FROM todo WHERE todo_id = $1",[id]);
        res.json("todo was deletd")

    }catch (err){
        console.log(err.message);

   } 
}

)







app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });