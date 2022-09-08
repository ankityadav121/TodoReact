import React from 'react'

const TodoList = ({todos, setTodos, setEditTodo}) => {
const handleDelete=({id})=>{
    setTodos(todos.filter((todo)=>todo.id!==id));
}

// const handleEdit=({id})=>{
//     const findTodo=todos.find((todo)=>todo.id===id);
//     setEditTodo(findTodo); 

// }

const handleComplete=(todo)=>{
    setTodos(
        todos.map((item)=>{
            if(item.id===todo.id){
                return{...item, completed: !item.completed};
            }
            return item;

        })
    )
}


  return (
    <div>
    {todos.map((todo)=>(
        <li className="list-item" key={todo.id}>
            <input type="text" value={todo.title}  name="" id="" className={`list ${todo.completed ? "complete" : ""}`} onChange={(event)=>event.preventDefault()} />
         
         <div>
           
         </div>
        </li>
    ))}
    </div>
  )
}

export default TodoList