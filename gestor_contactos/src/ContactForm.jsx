// ContactForm.jsx
import { useState } from "react";
export default function ContactForm({ onAddContact }) {

const [newContact, setNewContact] = useState({id: new Date(), name:"", phone:""});


const handleSubmit = (event) => {
e.preventDefault();
if (!text.trim()) return;
onAddContact(text);
setText("");
};


return (
<form onSubmit={handleSubmit}>

<label>Nombre: </label>
<input
type="text"
placeholder="Nuevo contacto..."
value={text}
onChange={(e) => setText(e.target.value)}
/><br></br>

<label>Número: </label>
<input
type="text"
placeholder="Número de teléfono..."
value={Number}
onChange={(e) => setText(e.target.value)}
/><br></br>
<button>Añadir</button>
</form>
);
}