import React from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Link } from '@mui/material';
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

const Breadcrumbs = ({ path, style }: BreadcrumbsProps) => {
  return (
    <MuiBreadcrumbs style={style}>
      {path.map((path, pos, all) => {
        if (pos === all.length - 1) {
          // current page
          return (
            <Link
              key={path.pageId}
              href={path.path}
              color={COLORS.gray[700]}
              underline="none"
              aria-label="breadcrumb"
            >
              {path.name}
            </Link>
          );
        } else {
          // other pages
          return (
            <Link
              key={path.pageId}
              href={path.path}
              underline="hover"
              aria-label="breadcrumb"
            >
              {path.name}
            </Link>
          );
        }
      })}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
