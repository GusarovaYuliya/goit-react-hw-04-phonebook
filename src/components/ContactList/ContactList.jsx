import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import css from './ContactList.module.css';

function ContactList({ contacts, filter, handleDeleteUser }) {
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <ContactItem
          handleDeleteUser={handleDeleteUser}
          userName={contact.name}
          userNumber={contact.number}
          id={contact.id}
          key={contact.id}
        />
      ))}
    </ul>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
};




// import ContactItem from './ContactItem';
// import PropTypes from 'prop-types';
// import css from './ContactList.module.css';

// const ContactList = ({ contacts, filter, handleDeleteUser }) => {
//   return (
//     <ul className={css.contactList}>
//       {contacts
//         .filter(
//           contact =>
//             contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//             contact.number.toLowerCase().includes(filter.toLowerCase())
//         )
//         .map(contact => (
//           <ContactItem
//             handleDeleteUser={handleDeleteUser}
//             userName={contact.name}
//             userNumber={contact.number}
//             id={contact.id}
//             key={contact.id}
//           />
//         ))}
//     </ul>
//   );
// };

// export default ContactList;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   filter: PropTypes.string.isRequired,
//   handleDeleteUser: PropTypes.func.isRequired,
// };