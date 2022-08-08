import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import history from '../../../history';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import PageTitle from '../../../components/page-title';
import {
  requestUserDetails,
  saveUserDetails,
  cleanUserDetails
} from '../../../store/actions/users-actions';
import CustomForm from '../../../components/form/custom-form';
import { displayUserNames, userDetailsFormDefinition } from '../utils';
import { Col, Row } from 'react-bootstrap';
import { IS_NEW_ID } from '../../../helpers/constants';

const UserDetails = ({ userDetails, requestUserDetails, saveUserDetails, cleanUserDetails, noms }) => {
  const { id } = useParams();

  useEffect(() => {
    requestUserDetails(id);
    return () => {
      cleanUserDetails();
    };
  }, []);

  if (!userDetails && id !== IS_NEW_ID) {
    return <></>;
  }
  
  const pageTitle = displayUserNames(id, userDetails);

  return (
    <>
      <Row>
        <Col md={12}>
          <PageTitle
            title={pageTitle}
            breadcrumbs={[{
              label: 'breadcrumbs.home', path: '/'
            }, {
              label: 'breadcrumbs.users', path: '/users'
            }, {
              label: 'breadcrumbs.user.details', path: `/users/${id}`, active: true
            }]}
          />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <CustomForm
            fields={userDetailsFormDefinition(noms)}
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
        </Col>
      </Row>
    </>
  )
};

const mapStateToProps = (state) => ({
  userDetails: state.users.userDetails,
  noms: state.app.noms
});

const mapDispatchToProps = {
  requestUserDetails,
  saveUserDetails,
  cleanUserDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
