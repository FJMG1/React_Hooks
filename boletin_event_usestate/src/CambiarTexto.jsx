import React, {useState} from "react"; 

/*
Ejercicio 2: Cambiador de Texto
Objetivo: Crear un componente que muestre un texto y lo cambie al hacer clic en un botón.
1. Crea un componente CambiadorTexto .
2. Usa useState para definir un estado texto con el valor inicial "Texto Original".
3. Agrega un botón que, al hacer clic, cambie el texto a "Texto Modificado".
Extra: Crea un segundo botón para restaurar el texto al original.
 */

function CambiarTexto(){

    //Estado inicial
    const [texto, setTexto]= useState("Texto Original");

    function modificar(){
        setTexto("Texto Modificado");
    }
    function original(){
        setTexto("Texto Original");
    }
return(
<>
<div>
<p>{texto}</p>
<button onClick={modificar}>Modificar</button>
<button onClick={original}>Original</button>
</div>
</>

);
}
export default CambiarTexto;