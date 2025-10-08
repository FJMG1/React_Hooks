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

function Profile(){


return(
<>
    <div className="profile">
        <img src="src/img/icon.png" className="icon" alt="icon" />
        <div>
        <h1 id="name">John Doe</h1>
        <h2 id="email">johndoe@example.com</h2>
        <p id="bio">Software developer with a passion <br></br>for building web applications susing.<br></br> JavaScript and React.</p>
            <div className="icon2"></div>

        </div>
    </div>
</>
)

}
export default Profile