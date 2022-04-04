import React from 'react';
import styled from '@emotion/styled';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Contacts } from '../../types/Company';
import { QUERIES } from '../../theme';

type ContactsProps = {
  contacts: Contacts;
};

const ContactList = ({ contacts }: ContactsProps) => (
  <ListColumns>
    <List dense={true}>
      {Object.entries(contacts).map(([label, value]) => (
        <ListItem key={label}>
          <ListItemText primary={value} secondary={label} />
        </ListItem>
      ))}
    </List>
  </ListColumns>
);

const ListColumns = styled.div`
  columns: 2;
  @media ${QUERIES.phoneAndSmaller} {
    columns: 1;
  }
`;

export default ContactList;
