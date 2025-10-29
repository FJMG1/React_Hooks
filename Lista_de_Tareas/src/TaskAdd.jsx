import { useState } from 'react'
import './Style.css'
/*
Resuelve al menos el primer ejercicio planteado, si te sobra tiempo, puedes realizar el segundo.

Crea una aplicación de lista de tareas pendientes con los siguientes criterios:
- Se deben poder añadir tareas.
  
- Se deben poder eliminar tareas existentes.
*/
function TaskAdd() {
  
  const tasks=[];  
  const taskList = tasks.map(task =><li>{task}</li>);

  
  return (
    <>
      <div>
        <input type="text" id="task" placeholder='-- Introduce a new task --'></input>
        <button type='submit'>Add</button>
      </div>
      <div>
        <ul>{taskList}</ul>
      </div>
    </>
  )
}

export default TaskAdd
