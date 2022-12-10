import { useDispatch, useSelector } from "react-redux";
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from "./ContactForm/ContactForm";
import { Wrapper } from './App.styled';
import { getContacts, getFilter } from "redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from 'redux/contacts/operations';

export function App () {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => 
    {dispatch(fetchContacts());
  }, [dispatch])


  function getFilteredContacts () {
    const normalizedFilter = filter.toLowerCase();
    return contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )
  }

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.items.length === 0 && 
        <p>Contacts are empty</p>
      }
      {contacts.items.length > 0 && 
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