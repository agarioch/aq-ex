import React from 'react';
import styled from '@emotion/styled';
import { Profile, Breadcrumbs, Sidebar } from '../../components';
import { PATH } from '../../mocks/mock';
import { useMemberData } from '../../hooks';

const Member = () => {
  // mock getting the company id from URL router params
  const routerParam = 1;
  // mock fetching the company data from the API
  const { member, isLoading, isError } = useMemberData(routerParam);

  // TODO: build components to render skeleton loading state and to handle errors
  if (isLoading || !member) return <div>Todo: loading component</div>;
  if (isError) return <div>Todo: error component</div>;

  return (
    <ProfileLayout>
      <Breadcrumbs path={PATH} style={{ gridArea: 'breadcrumbs' }} />
      <Profile member={member} style={{ gridArea: 'profile' }} />
      <Sidebar member={member} style={{ gridArea: 'sidebar' }} />
    </ProfileLayout>
  );
};

const ProfileLayout = styled.div`
  display: grid;
  gap: 32px 26px;
  grid-template-areas:
    'breadcrumbs breadcrumbs'
    'profile sidebar'
    'chart sidebar'
    'news news'
    'other other'
    'footer footer';
  grid-template-columns: 1fr 400px;
`;

export default Member;
