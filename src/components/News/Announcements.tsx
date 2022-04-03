import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Announcement } from '../../types/Company';

type AnnouncementsProps = {
  announcements: Announcement[];
};

const Announcements = ({ announcements }: AnnouncementsProps) => {
  const rows = announcements.map((announcement) => {
    return (
      <TableRow key={announcement.id}>
        <TableCell size="small" sx={{ paddingLeft: 0 }}>
          {announcement.title}
        </TableCell>
        <TableCell size="small" sx={{ paddingLeft: 0 }}>
          {announcement.type}
        </TableCell>
        <TableCell size="small">
          {announcement.date.toLocaleDateString()}
        </TableCell>
      </TableRow>
    );
  });

  return (
    <TableContainer>
      <Table>
        <TableBody>{rows}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default Announcements;
