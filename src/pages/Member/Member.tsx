import React from 'react';
import styled from '@emotion/styled';
import {
  Profile,
  Breadcrumbs,
  Sidebar,
  Financials,
  News,
} from '../../components';
import { PATH } from '../../mocks/mock';
import { useMemberData } from '../../hooks';
import { QUERIES } from '../../theme';

const Member = () => {
  // mock getting the company id from URL router params
  const routerParam = 1;
  // mock fetching the company data from the API
  const { member, isLoading, isError } = useMemberData(routerParam);

  // Out of scope: build components to render skeleton loading state and to handle errors
  if (isLoading || !member) return <div>Todo: loading component</div>;
  if (isError) return <div>Todo: error component</div>;

  return (
    <>
      <ProfileLayout>
        <Breadcrumbs path={PATH} style={{ gridArea: 'breadcrumbs' }} />
        <Profile member={member} style={{ gridArea: 'profile' }} />
        <Sidebar member={member} style={{ gridArea: 'sidebar' }} />
        <Financials member={member} style={{ gridArea: 'financials' }} />
      </ProfileLayout>
      <News member={member} />
    </>
  );
};

const ProfileLayout = styled.div`
  display: grid;
  gap: 32px 26px;
  grid-template-areas:
    'breadcrumbs breadcrumbs'
    'profile sidebar'
    'financials sidebar';
  grid-template-columns: 1fr 400px;
  grid-template-rows: auto auto 1fr;
  padding: 32px 64px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 24px 32px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: 16px 16px;
  }
`;

export default Member;
