import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { removeContact } from "redux/contacts/operations";
import { Contact } from "../Contact/Contact";

export const ContactList = ({filtered}) => {
    const dispatch = useDispatch();

    function handleDelete (id) {
        dispatch(removeContact(id));
    };

    return (
        <ul>
            {filtered.map(({ id, name, phone }) => {
                return (
                    <li key = {id}>
                        <Contact contact={{id, name, phone }} onDelete={handleDelete}/>
                    </li>
                )
            })}
        </ul>
    )
}

ContactList.proptype = {
    filtered: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.isRequired
        })
    )
}