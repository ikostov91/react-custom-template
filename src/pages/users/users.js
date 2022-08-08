import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Table, Column, Cell, HeaderCell } from 'rsuite-table';
import { Button } from 'react-bootstrap';
import CustomColumn from '../../components/custom-column';
import CustomRow from '../../components/custom-row';
import PageTitle from '../../components/page-title';
import Translate from '../../components/translate';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import history from '../../history';
import { requestUsers, deleteUser } from '../../store/actions/users-actions';
import DeleteConfirmationModal from '../../components/delete-confirmation-modal';
import TablePagination from '../../components/table-pagination';

const Users = ({ usersList, requestUsers, deleteUser, pageParameters, noms }) => {
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

  const { order, sortBy } = pageParameters;

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
          <Button
            variant='primary'
            size='sm'
            onClick={() => history.push('/users/isNew')}
          >
            <Translate id="buttons.add.new.user" />
          </Button>
        </CustomColumn>
      </CustomRow>
      <CustomRow>
        <CustomColumn width={12}>
          <div>
            <Table
              autoHeight
              cellBordered
              data={usersList}
              rowHeight={40}
              headerHeight={40}
              sortColumn={sortBy}
              sortType={order}
              onSortColumn={(dataKey, sortType) => requestUsers({ ...pageParameters, sortBy: dataKey, order: sortType })}
            >
              <Column width={80} sortable fixed>
                <HeaderCell>ID</HeaderCell>
                <Cell dataKey="id" />
              </Column>

              <Column minWidth={150} flexGrow={1} sortable>
                <HeaderCell>First Name</HeaderCell>
                <Cell dataKey="firstName" />
              </Column>

              <Column width={150} flexGrow={1} sortable>
                <HeaderCell>Last Name</HeaderCell>
                <Cell dataKey="lastName" />
              </Column>

              <Column width={100} sortable>
                <HeaderCell>Age</HeaderCell>
                <Cell dataKey="age" />
              </Column>

              <Column minWidth={300} flexGrow={2} sortable>
                <HeaderCell>Email</HeaderCell>
                <Cell dataKey="email" />
              </Column>

              <Column width={100} sortable>
                <HeaderCell>Role</HeaderCell>
                <Cell>
                  {(rowData) => noms?.roles?.find(x => x.id == rowData.role)?.name}
                </Cell>
              </Column>
              
              <Column width={100}>
                <HeaderCell className='text-center'>Action</HeaderCell>
                <Cell>
                  {(rowData) => (
                    <div className='d-flex justify-content-around'>
                      <FiEdit
                        className='pointer-cursor'
                        size={18}
                        onClick={() => history.push(`/users/${rowData.id}`)}
                      />
                      <MdDelete
                        className='pointer-cursor'
                        size={18}
                        onClick={() => showDeleteConfirmationModal(rowData)}
                      />
                    </div>
                  )}
                </Cell>
              </Column>
            </Table>
          </div>
          <div className='mt-2'>
            <TablePagination
              pageParameters={pageParameters}
              requestData={(pageParams) => requestUsers(pageParams)}
            />
          </div>
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
  usersList: state.users.usersList,
  pageParameters: state.users.pageParameters,
  noms: state.app.noms
});

const mapDispatchToProps = {
  requestUsers,
  deleteUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
