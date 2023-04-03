import React from 'react';
import ContactsForm from '../components/Form';
import Filter from '../components/Filter';
import MemoizedContactList from '../components/ContactsList';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors/selectors';
import { getContacts } from 'redux/selectors/selectors';

const filterContacts = (contacts, filter) =>
  contacts.filter(el => el.name.toLowerCase().includes(filter));

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = filterContacts(contacts, filter);

  return (
    <React.Fragment>
      <Typography
        variant="h3"
        variantMapping={{ h3: 'h1' }}
        gutterBottom
        align="center"
      >
        Phonebook
      </Typography>

      <ContactsForm />

      {contacts.length > 1 || filter !== '' ? <Filter /> : null}

      {contacts.length > 0 && (
        <MemoizedContactList contacts={filteredContacts} />
      )}
    </React.Fragment>
  );
}
