import React from 'react'
import contacts from './Contacts'
import Contact from './Contact'
import './Contact.css'
export default function ContactList(){
  return(
    <div className="contactList">
      {contacts.map((contact) => (
        <Contact key={contact.name} id={contact.id} phone={contact.phone} whatsapp={contact.whatsapp}/>
      ))}
    </div>
  )
};