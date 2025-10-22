import "./App.css"
import Profile from "./Profile"
/*
Fase 2: Creación del Componente Principal
1. Diseño del componente principal:
Crea un nuevo componente que será la página principal.
El componente debe tener una barra superior con el título "About Us".
Debe incluir un contenedor donde se mostrarán varios perfiles.
2. Reutilización del componente "Profile":
Modifica la estructura del proyecto para incluir el componente "Profile" dentro del
componente principal.
Inserta al menos 3 instancias del componente "Profile" con información estática.
3. Separación de archivos:
Asegúrate de que cada componente esté en su propio archivo para una mejor
organización.
*/

function Principal(){

const profilesData = [
{
url: 'src/img/icon.png',
name: 'John Doe',
email: 'johndoe@example.com',
bio: 'Software developer with a passion for building web applications using JavaScript and React.',
skills: ['JavaScript', 'React', 'CSS']
},
{
url: 'src/img/icon.png',
name: 'Jane Smith',
email: 'janesmith@example.com',
skills: ['HTML', 'CSS', 'UX Design']
},
{
url: 'src/img/icon.png',
name: 'Michael Brown',
email: 'michaelbrown@example.com',
bio: 'Full-stack developer focusing on Node.js and database management.',
skills: ['Node.js', 'MongoDB', 'SQL'],
profileType: 'premium'
}
];

return(
    <>
<h1>About us</h1>
<Profile 
url="src/img/icon.png" 
bio= "Software developer with a passion for building web applications susing. JavaScript and React."
name="John Doe"
email="johndoe@example.com"
skills1= "JavaScript"
skills2= "React"
skills3= "Css"
skills4= "Node.js"/>
<Profile 
url="src/img/icon.png" 
bio= "Software developer with a passion for building web applications susing. JavaScript and React."
name="John Doe"
email="johndoe@example.com"

/>
<Profile 
url="src/img/icon.png" 
bio= "Software developer with a passion for building web applications susing. JavaScript and React."
name="John Doe"
email="johndoe@example.com"
skills1= "JavaScript"
skills2= "React"
skills3= "Css"
skills4= "Node.js"
/>
<Profile 
name="John Doe"
email="johndoe@example.com"
skills1= "JavaScript"
skills2= "React"
skills3= "Css"
skills4= "Node.js"
/>
<Profile 
url="src/img/icon.png" 
bio= "Software developer with a passion for building web applications susing. JavaScript and React."
name="John Doe"
email="johndoe@example.com"
skills1= "JavaScript"
skills2= "React"
skills3= "Css"
skills4= "Node.js"
profileType="premium"
/>
</>
)
}
export default Principal


/*
Fase 5: Renderizado de listas y habiliades desde props
En esta fase, vamos a implementar dos cambios:

    1. Renderizado de habilidades (skills) como una lista pasada a través de las props.

    2. Guardar los datos de los perfiles en un array de objetos y renderizar dinámicamente un
    componente Profile para cada elemento del array.
    
Paso 1: Renderizar las habilidades (skills) como props
Asegúrate de que las habilidades se pasen como un array de strings desde el componente
principal y que se rendericen en el componente Profile.

Paso 2: Guardar los datos de los perfiles en un array y renderizar
dinámicamente

En lugar de crear manualmente varias instancias de Profile, ahora vamos a utilizar un array de
objetos que contenga la información de cada persona. El componente principal usará .map()
para renderizar dinámicamente los perfiles.

Ejemplo de datos de perfiles:

const profilesData = [
{
imageUrl: 'https://via.placeholder.com/100',
name: 'John Doe',
email: 'johndoe@example.com',
bio: 'Software developer with a passion for building web applications using JavaScript
and React.',
skills: ['JavaScript', 'React', 'CSS']
},
{
imageUrl: 'https://via.placeholder.com/100',
name: 'Jane Smith',
email: 'janesmith@example.com',
bio: 'Frontend developer specializing in HTML, CSS, and UX design.',
skills: ['HTML', 'CSS', 'UX Design']
},
{
imageUrl: 'https://via.placeholder.com/100',
name: 'Michael Brown',
email: 'michaelbrown@example.com',
bio: 'Full-stack developer focusing on Node.js and database management.',
skills: ['Node.js', 'MongoDB', 'SQL']
}
];
*/