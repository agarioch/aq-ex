import React from 'react';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { COLORS } from '../../theme';

type Path = {
  name: string;
  path: string;
  pageId: number;
};
type BreadcrumbsProps = {
  path: Path[];
  style: React.CSSProperties;
};

const Breadcrumbs = ({ path, style }: BreadcrumbsProps) => (
  <MuiBreadcrumbs style={style}>
    {path.map((path, index, all) => {
      const isCurrent = index === all.length - 1;

      return (
        <Link
          key={path.pageId}
          href={path.path}
          color={isCurrent ? COLORS.gray[700] : undefined}
          underline={isCurrent ? 'none' : 'hover'}
          aria-label="breadcrumb"
        >
          {path.name}
        </Link>
      );
    })}
  </MuiBreadcrumbs>
);

export default Breadcrumbs;
