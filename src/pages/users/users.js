import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Table, Column, Cell, HeaderCell } from 'rsuite-table';
import CustomColumn from '../../components/custom-column';
import CustomRow from '../../components/custom-row';
import PageTitle from '../../components/page-title';
import Translate from '../../components/translate';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import history from '../../history';
import { requestUsers, deleteUser } from '../../store/actions/users-actions';
import DeleteConfirmationModal from '../../components/delete-confirmation-modal';

const Users = ({ usersList, requestUsers, deleteUser }) => {
  useEffect(() => {
    requestUsers();
  }, []);

  const [deleteId, setDeleteId] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const showDeleteConfirmationModal = (rowData) => {
    setDeleteId(rowData.id);
    setDeleteMessage(`${rowData.firstName} ${rowData.lastName}`);
    setShowDeleteModal(true);
  };

  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const confirmDelete = (id) => {
    deleteUser(id);
    setShowDeleteModal(false);
  };

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
          >
            <Column width={80} sortable fixed>
              <HeaderCell>ID</HeaderCell>
              <Cell dataKey="id" />
            </Column>

            <Column width={150} flexGrow={1} sortable>
              <HeaderCell>First Name</HeaderCell>
              <Cell dataKey="firstName" />
            </Column>

            <Column width={150} flexGrow={1} sortable>
              <HeaderCell>Last Name</HeaderCell>
              <Cell dataKey="lastName" />
            </Column>

            <Column width={100} flexGrow={1} sortable>
              <HeaderCell>Age</HeaderCell>
              <Cell dataKey="age" />
            </Column>

            <Column width={300} flexGrow={1} sortable>
              <HeaderCell>Email</HeaderCell>
              <Cell dataKey="email" />
            </Column>

            <Column width={200} flexGrow={1} sortable>
              <HeaderCell>Role</HeaderCell>
              <Cell dataKey="role" />
            </Column>
            
            <Column width={100}>
              <HeaderCell>Action</HeaderCell>
              <Cell>
                {(rowData) => (
                  <>
                    <FiEdit className='pointer-cursor' onClick={() => history.push(`/users/${rowData.id}`)} />
                    <MdDelete className='pointer-cursor' onClick={() => showDeleteConfirmationModal(rowData)} />
                  </>
                )}
              </Cell>
            </Column>
          </Table>
        </CustomColumn>
      </CustomRow>
      <DeleteConfirmationModal
        showModal={showDeleteModal}
        hideModal={hideDeleteModal}
        confirmModal={confirmDelete}
        message={deleteMessage}
        id={deleteId}
      />
    </>
  )
};

const mapStateToProps = (state) => ({
  usersList: state.users.usersList
});

const mapDispatchToProps = {
  requestUsers,
  deleteUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
