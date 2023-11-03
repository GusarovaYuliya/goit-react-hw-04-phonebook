import React, { useState, useEffect } from "react";
import ContactForm from './ContactForm/ContactForm'
import { nanoid } from 'nanoid';
import Search from "./Search/Search";
import ContactList from "./ContactList/ContactList";
import css from 'App.module.css'

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const createUser = data => {
    setContacts([...contacts, { name: data.name, id: nanoid(), number: data.number }]);
  };

  const handleDeleteUser = id => {
    if (window.confirm('Are you sure?')) {
      setContacts([...contacts.filter(user => user.id !== id)]);
    }
  };

  const handlerSearch = e => {
    setFilter(e.currentTarget.value);
  };

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.appContainer}>
      <h1 className={css.titleText}>Phone book</h1>
      <ContactForm
        createUser={createUser}
        userNumber={contacts.number}
        userName={contacts.name}
        contacts={contacts}
      />
      <p className={css.searchText}>Find contacts by name</p>
      <Search onChange={handlerSearch} value={filter} />
      <ContactList
        handleDeleteUser={handleDeleteUser}
        contacts={contacts}
        filter={filter}
      />
    </div>
  );
}

export default App;






// import React, { Component } from "react";
// import ContactForm from './ContactForm/ContactForm'
// import { nanoid } from 'nanoid';
// import Search from "./Search/Search";
// import ContactList from "./ContactList/ContactList";
// import css from 'App.module.css'

// export class App extends Component {

//   state = {
//     contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],

//     filter: '',
//   };

//   handleDeleteUser = id => {
//     if (window.confirm('Are you sure?')) {
//       this.setState({
//         contacts: [...this.state.contacts.filter(user => user.id !== id)],
//       });
//     }
//   };

//   createUser = data => {
//     this.setState({
//       contacts: [
//         ...this.state.contacts,
//         { name: data.name, id: nanoid(), number: data.number },
//       ],
//     });
//   };

//   handlerSearch = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

 
//   render() {
   
//     return (
//       <div className={css.appContainer}>
//         <h1 className={css.titleText}>Phone book</h1>
//         <ContactForm
//           createUser={this.createUser}
//           userNumber={this.state.number}
//           userName={this.state.name}
//           contacts={this.state.contacts}
//         />
//          <p className={css.searchText}>Find contacts by name</p>
//         <Search onChange={this.handlerSearch} value={this.state.filter} />
//         <ContactList
//           handleDeleteUser={this.handleDeleteUser}
//           contacts={this.state.contacts}
//           filter={this.state.filter}
//         />
//       </div>
//     );
//   };
// }

// export default App;