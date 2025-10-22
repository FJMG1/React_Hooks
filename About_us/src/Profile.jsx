import "./App.css"
/*
Fase 1: Creación de la Página de Perfil
1. Diseño del componente "Profile":
Crea un componente que muestre la información personal de una persona.
Los campos que debe incluir son:
    - Imagen de perfil.
    - Nombre.
    - Email.
    - Bio.
    - Skills (habilidades), mostradas como etiquetas.
*/

/*
Fase 4: Añadir el renderizado condicional
Tienes que hacer que ciertos elementos del componente Profile se muestren solo si se cumple
una condición, como la existencia de un dato o una propiedad, en concreto:
1. Mostrar una imagen por defecto si no hay una URL de imagen proporcionada: Si el
perfil no tiene una imagen, puedes mostrar una imagen por defecto. Esto lo habíamos
hecho utilizando el parámetro por defecto, ahora lo haremos de forma condicional.
2. Ocultar la sección de habilidades si no hay habilidades disponibles: Si la persona no
tiene habilidades en su perfil, la sección de "skills" puede no mostrarse.
3. Mostrar un mensaje si la bio está vacía: Si el perfil no tiene una biografía, puedes
mostrar un mensaje como "Este usuario no ha añadido una bio aún."
4. Resaltar perfiles "premium": Si un perfil tiene un valor especial, como isPremium ,
podrías renderizar un badge o cambiar el estilo del perfil en función de esa prop.
*/

//function Profile(){
const Profile=({url, bio, name, email,skills, claseSkills, profileType})=>{

    const claseSkills = [];


    if(!url){
    url="src/img/icon.png"; 
}

skills.forEach(skill => {
    if(!skill){
        claseSkills.push("oculto")
    }else{
        claseSkills.push("icon2")
    }
});

if(!bio){
    bio="Este usuario no ha añadido una bio aún.";
}
if(profileType){
    profileType="premium";
}else{
    profileType="profile"
}
let skillWriter = function(){
    for (let index = 0; index < skills.lenght; index++) {
        if(skills[index]){

        let div = document.createElement("div");
        div.className=<div className={claseSkills[index]}>{skills[index]}</div>
        }
    }
}
return(
<>
    <div className={profileType}>
        <img src={url} className="icon" alt="icon" />
        <div>
        <h1 id="name">{name}</h1>
        <h2 id="email">{email}</h2>
        <p id="bio">{bio}</p>
           <div id="skills"> 
            <div className={claseSkills[0]}>{skills[0]}</div>
            <div className={claseSkills[1]}>{skills[1]}</div>
            <div className={claseSkills[2]}>{skills[2]}</div>
            <div className={claseSkills[3]}>{skills[3]}</div>
           </div>
        </div>
    </div>
</>
)
}
//}
export default Profile