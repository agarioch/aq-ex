import React from 'react';
import Typography from '@mui/material/Typography';
import { Company } from '../../types/Company';
import DataTable from './DataTable';

type SidebarProps = {
  style: React.CSSProperties;
  member: Company;
};
const Sidebar = ({ member, style }: SidebarProps) => {
  return (
    <aside style={style}>
      <Typography variant="h2" sx={{ mb: '0.5rem' }}>
        Trading
      </Typography>
      <DataTable data={member.trading} />
      <Typography variant="h2" sx={{ mt: '2rem', mb: '0.5rem' }}>
        Key Information
      </Typography>
      <DataTable data={member.keyInfo} />
    </aside>
  );
};

export default Sidebar;
