import { useState } from 'react'
import './Style.css'
/*
Resuelve al menos el primer ejercicio planteado, si te sobra tiempo, puedes realizar el segundo.

Crea una aplicación de lista de tareas pendientes con los siguientes criterios:
- Se deben poder añadir tareas.
  
- Se deben poder eliminar tareas existentes.
*/



function TaskAdd() {
  
const [inputValue, setInputValue] = useState("");
const tasks=[];



function addArrayTask(event){
  tasks.push(inputValue);
  tasks.map(task => <li>{task}</li>);
}

const listItems = tasks.map(task => <li>{task}</li>);
  
  return (
    <>
      <div>
        <input type="text" id="task" placeholder='-- Introduce a new task --'></input>
        <button onClick={addArrayTask}>Add</button>
      </div>
      <div>
        <ul>{listItems}</ul>
      </div>
    </>
  )}

export default TaskAdd
