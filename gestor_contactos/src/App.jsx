// App.jsx
import { useState } from "react";
import "./App.css"
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

export default function App() {
const [contacts, setContacts] = useState([]);

const addContact = (newContact) => {
setContacts([...contacts, { id: Date.now(), name: newContact.name , phone: newContact.phone }]);
};

const deleteContact = (id) => {
setTasks(contacts.filter((contact) => contact.id !== id));
};

return (
<>
<div className="container">
<h1>Lista de Contactos</h1>
<ContactForm onAddContact={addContact} />
<ContactList contacts={contacts} onDelete={deleteContact}/>
</div>
</>
);
}