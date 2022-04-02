import React from 'react';
import styled from '@emotion/styled';
import { Profile, Breadcrumbs } from '../../components';
import { PATH } from '../../mocks/mock';
import { useMemberData } from '../../hooks';

const Member = () => {
  const routerParam = 1;
  const { member, isLoading, isError } = useMemberData(routerParam);

  if (isLoading || !member) return <div>Todo: loading component</div>;
  if (isError) return <div>Todo: error component</div>;

  return (
    <ProfileLayout>
      <Breadcrumbs path={PATH} style={{ gridArea: 'breadcrumbs' }} />
      <Profile member={member} style={{ gridArea: 'profile' }} />
    </ProfileLayout>
  );
};

const ProfileLayout = styled.div`
  display: grid;
  grid-template-areas:
    'breadcrumbs breadcrumbs'
    'profile sidebar'
    'chart sidebar'
    'news news'
    'other other'
    'footer footer';
  gap: 8px;
`;

export default Member;
