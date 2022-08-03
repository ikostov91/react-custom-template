import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import history from '../../../history';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import CustomColumn from '../../../components/custom-column';
import CustomRow from '../../../components/custom-row';
import PageTitle from '../../../components/page-title';
import {
  requestUserDetails,
  saveUserDetails
} from '../../../store/actions/users-actions';
import CustomForm from '../../../components/form/custom-form';
import { userDetailsFormDefinition } from '../utils';

const UserDetails = ({ userDetails, requestUserDetails, saveUserDetails }) => {
  const { id } = useParams();

  useEffect(() => {
    requestUserDetails(id);
  }, []);

  if (!userDetails) {
    return <></>;
  }

  const { firstName, lastName } = userDetails;
  
  return (
    <>
      <CustomRow>
        <CustomColumn width={12}>
          <PageTitle
            title={`${firstName} ${lastName}`}
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
          <CustomForm
            fields={userDetailsFormDefinition}
            data={userDetails}
            onSubmit={(data) => {
              saveUserDetails(id, data);
            }}
            renderSubmitChildren={(
              <div className='mt-2'>
                <Button
                  size='sm'
                  className='float-end'
                  variant='secondary'
                  onClick={() => history.push('/users')}
                >
                  Cancel
                </Button>
                <Button
                  size='sm'
                  type='submit'
                  className='float-end me-2'
                  variant='primary'
                >
                  Save
                </Button>
              </div>
            )}
          />
        </CustomColumn>
      </CustomRow>
    </>
  )
};

const mapStateToProps = (state) => ({
  userDetails: state.users.userDetails
});

const mapDispatchToProps = {
  requestUserDetails,
  saveUserDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
