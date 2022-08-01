import React from 'react';
import CustomColumn from '../../../components/custom-column';
import CustomRow from '../../../components/custom-row';
import PageTitle from '../../../components/page-title';
import Translate from '../../../components/translate';

const UserDetails = () => {
  const id = 1;
  return (
    <>
      <CustomRow>
        <CustomColumn width={12}>
          <PageTitle
            title={<Translate id="pages.users.title.text" />}
            breadcrumbs={[{
              label: 'breadcrumbs.home', path: '/'
            }, {
              label: 'breadcrumbs.users', path: '/users'
            }, {
              label: 'breadcrumbs.user.details', path: `/users/${id}`, active: true
            }]}
          />
        </CustomColumn>
      </CustomRow>
      <CustomRow>
        <CustomColumn width={12}>
          <h1>USER DETAILS</h1>
        </CustomColumn>
      </CustomRow>
    </>
  )
};

export default UserDetails;
