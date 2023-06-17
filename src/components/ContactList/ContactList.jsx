import PropTypes from 'prop-types';
import { ContactStyle } from './ContactList.styled';
import { ContactItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'Redux/selectors';

function ContactList() {
  const contacts = useSelector(getContacts);
  const searchValue = useSelector(getFilter);
  const defineList = contacts.filter(({ name }) => name.toLowerCase().includes(searchValue));

  return (
    <ContactStyle>
      {defineList.map(({ name, id, number }) => (
        <ContactItem
          id={id}
          key={id}
          number={number}
          name={name}
          
        />
      ))}
    </ContactStyle>
  );
}

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(Object).isRequired,
};

export default ContactList;
