import React from 'react';
import classnames from 'classnames';
import Pagination from 'react-bootstrap/Pagination';

const TablePagination = ({ pageParameters = {}, className = '', requestData = () => {} }) => {
  return (
    <Pagination size='sm' className='table-pagination'>
      {pageParameters.page > 1 && <Pagination.First onClick={() => requestData({ ...pageParameters, page: 1})} />}
      {pageParameters.page > 1 && <Pagination.Prev onClick={() => requestData({ ...pageParameters, page: pageParameters.page - 1})} />}

      {pageParameters.page > 1 && <Pagination.Item onClick={() => requestData({ ...pageParameters, page: pageParameters.page - 1})}>{pageParameters.page - 1}</Pagination.Item>}
      <Pagination.Item active>{pageParameters.page}</Pagination.Item>
      {pageParameters.page < pageParameters.totalPages && <Pagination.Item onClick={() => requestData({ ...pageParameters, page: pageParameters.page + 1})}>{pageParameters.page + 1}</Pagination.Item>}

      {pageParameters.page < pageParameters.totalPages && <Pagination.Next onClick={() => requestData({ ...pageParameters, page: pageParameters.page + 1})} />}
      {pageParameters.page < pageParameters.totalPages && <Pagination.Last onClick={() => requestData({ ...pageParameters, page: pageParameters.totalPages })} />}
    </Pagination>
  );
};

export default TablePagination;
