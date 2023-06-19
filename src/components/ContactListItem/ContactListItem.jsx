import PropTypes from 'prop-types';
import { Contact, Name,  DeleteBtn } from "./ContactListItem.styled";
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/operations';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const deleteRec = () => {
    dispatch(deleteContact(id));
  } 
  return (
    <Contact>
      <Name>
        {name}: {number}
      </Name>
      <DeleteBtn onClick={deleteRec}>Delete</DeleteBtn>
    </Contact>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};