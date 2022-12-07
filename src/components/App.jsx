import { useSelector } from "react-redux";
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from "./ContactForm/ContactForm";
import { Wrapper } from './App.styled';

export function App () {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);

  function getFilteredContacts () {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )
  }

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length === 0 && 
        <p>Contacts are empty</p>
      }
      {contacts.length > 0 && 
        <>
          <Filter />
          <ContactList 
            filtered={getFilteredContacts()} 
          />
        </>
      }
    </Wrapper>
  )
};