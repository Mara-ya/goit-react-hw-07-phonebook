import PropTypes from 'prop-types';
import { DeleteBtn } from "./Contact.styled";

export const Contact = ({contact, onDelete}) => {
    const { id, name, phone } = contact;
    return (
        <>
            <span>{name}: {phone}</span>
            <DeleteBtn type='button' onClick={() => onDelete(id)}>Delete</DeleteBtn>
        </>
    )
}

Contact.propType = {
    contact: PropTypes.object.isRequired,
}