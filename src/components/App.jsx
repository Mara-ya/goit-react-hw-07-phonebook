import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact, removedContact, addFilter} from "redux/contactSlice";
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from "./ContactForm/ContactForm";
import { Wrapper } from './App.styled';

export function App () {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);
  
  function handleChange (e) {
    dispatch(addFilter(e.target.value));
  }
  
  function handleSubmit(data) {
    const contactName = contacts.find(
      contact => contact.name === data.name.trim()
    )
    if (!contactName){
      dispatch(addContact({id: nanoid(5), ...data}));
    } else {
      return alert(`${contactName.name} is already in contacts.`);
    }
  }

  function handleDelete (id) {
    dispatch(removedContact(id));
  };

  function getFilteredContacts () {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )
  }

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit}/>
      <h2>Contacts</h2>
      {contacts.length === 0 && 
      <p>Contacts are empty</p>
      }
      {contacts.length > 0 && 
      <>
        <Filter value={filter} onChange={handleChange}/>
        <ContactList 
          filtered={getFilteredContacts()} 
          onDelete={handleDelete}
        />
      </>
      }
    </Wrapper>
  )
};