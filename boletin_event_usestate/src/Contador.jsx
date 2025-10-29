import React, {useState} from "react";

/*
Ejercicio 1: Contador Interactivo
Objetivo: Crear un contador que permita incrementar y decrementar su valor mediante dos botones.

Crea un componente Contador.
Utiliza el hook useState para crear un estado contador con valor inicial 0.
Agrega dos botones, uno para incrementar y otro para decrementar el valor del contador.
Muestra el valor del contador y asegúrate de que se actualice cada vez que se presione un botón.

*/

function Contador(){
    //Estado pra el contador
    const [contador, setContador]= useState(0);

    function incrementar(){
        setContador(contador+1); //Aumentamos el contador
    }
    function reset(){
        setContador(0); //Reset el contador
    }

return(
<>
<div>
    <p>Contador: {contador}</p>
    <button onClick={incrementar}>+1</button>
    <button onClick={reset}>Reset</button>
</div>
</>

);
}

export default Contador;