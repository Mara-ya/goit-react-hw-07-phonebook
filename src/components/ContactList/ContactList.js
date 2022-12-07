import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { removedContact } from "redux/contactSlice";
import { Contact } from "../Contact/Contact";

export const ContactList = ({filtered}) => {
    const dispatch = useDispatch();

    function handleDelete (id) {
    dispatch(removedContact(id));
    };

    return (
        <ul>
            {filtered.map(({ id, name, number }) => {
                return (
                    <li key = {id}>
                        <Contact contact={{id, name, number }} onDelete={handleDelete}/>
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