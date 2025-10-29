import { useState } from "react";

/*
jercicio 5: Límite de Clics
Objetivo: Crear un contador que solo permita aumentar hasta un límite específico, por ejemplo, 5.

Crea un componente LimiteContador.
Usa useState para definir un estado contador con valor inicial 0.
Agrega un botón que incremente el contador hasta un máximo de 5.
Si el contador ya está en 5, el botón no debería hacer nada o debería estar deshabilitado.
Extra: Agrega un botón "Reset" para restablecer el contador a 0.
*/
function LimiteContador(){

const [contador, setContador]= useState(0);

function incrementar(){
    if(contador<5)
        {
        setContador(contador+1);        }
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
)}
export default LimiteContador;