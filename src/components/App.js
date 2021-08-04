import React from 'react'
import './App.css'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  const contacts = [
    {
      id: "1",
      name: "John",
      email: "johnsmith@example.com"
    },
    {
      id: "2",
      name: "Bob",
      email: "thisisfake@email.net"
    }
  ]
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App;
