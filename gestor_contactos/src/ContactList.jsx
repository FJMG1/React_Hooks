// ContactList.jsx
export default function ContactList({ contacts, onDelete }) {
if (contacts.length === 0) {
return <p>No hay ningún contacto</p>;
}
return (
<ul>
{contacts.map((contact) => (
<li key={contact.id}>
<input
type="checkbox"
checked={contact.done}
/>
<span style={{ textDecoration: contact.done ? "line-through" : "none"
}}>
{contact.text}
</span>
<button onClick={() => onDelete(contact.id)}>🗑</button>
</li>
))}
</ul>
);
}