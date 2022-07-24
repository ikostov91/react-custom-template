import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table, Column, Cell, HeaderCell } from 'rsuite-table';
import CustomColumn from '../../components/custom-column';
import CustomRow from '../../components/custom-row';
import PageTitle from '../../components/page-title';
import Translate from '../../components/translate';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import history from '../../history';
import { requestUsers } from '../../store/actions/users-actions';

const Users = ({ usersList, requestUsers }) => {
  useEffect(() => {
    requestUsers();
  }, []);

  return (
    <>
      <CustomRow>
        <CustomColumn width={12}>
          <PageTitle
            title={<Translate id="pages.users.title.text" />}
            breadcrumbs={[{
              label: 'breadcrumbs.home', path: '/'
            }, {
              label: 'breadcrumbs.users', path: '/users', active: true
            }]}
          />
        </CustomColumn>
      </CustomRow>
      <CustomRow>
        <CustomColumn width={12}>
          <Table
            autoHeight
            cellBordered
            data={usersList}
            loading={usersList.length === 0}
          >
            <Column width={80} sortable fixed>
              <HeaderCell>ID</HeaderCell>
              <Cell dataKey="id" />
            </Column>

            <Column width={150} sortable>
              <HeaderCell>First Name</HeaderCell>
              <Cell dataKey="firstName" />
            </Column>

            <Column width={150} sortable>
              <HeaderCell>Last Name</HeaderCell>
              <Cell dataKey="lastName" />
            </Column>

            <Column width={100} sortable>
              <HeaderCell>Age</HeaderCell>
              <Cell dataKey="age" />
            </Column>

            <Column width={300} sortable>
              <HeaderCell>Email</HeaderCell>
              <Cell dataKey="email" />
            </Column>

            <Column width={200} sortable>
              <HeaderCell>Role</HeaderCell>
              <Cell dataKey="role" />
            </Column>
            
            <Column width={100}>
              <HeaderCell>Action</HeaderCell>
              <Cell>
                {(rowData) => (
                  <>
                    <FiEdit className='pointer-cursor' onClick={() => history.push(`/users/${rowData.id}`)} />
                    <MdDelete className='pointer-cursor' onClick={() => alert('DELETED')} />
                  </>
                )}
              </Cell>
            </Column>
          </Table>
        </CustomColumn>
      </CustomRow>
    </>
  )
};

const mapStateToProps = (state) => ({
  usersList: state.users.usersList
});

const mapDispatchToProps = {
  requestUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
