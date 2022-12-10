import { useDispatch, useSelector } from "react-redux";
import { Formik } from 'formik';
import { WrapperForm, InputForm, SubmitBtn } from './ContactForm.styled'
import { addContact } from "redux/contacts/operations";

export function ContactForm () {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts);


  const handleSubmit = (values, {resetForm}) => {
    const contactName = contacts.items.find(
      item => item.name === values.name.trim()
    )
    if (!contactName){
      dispatch(addContact({...values}));
    } else {
      return alert(`${contactName.name} is already in contacts.`);
    }
    resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ name: '', number: '' }}>
    <WrapperForm>
      <lable>Name</lable>
      <InputForm
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <lable>Number</lable>
      <InputForm
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </WrapperForm>
  </Formik>
  );
}