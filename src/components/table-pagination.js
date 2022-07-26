import React from 'react';
import classnames from 'classnames';
import Pagination from 'react-bootstrap/Pagination';

const TablePagination = ({ className = '' }) => {
  const pageParameters = {
    totalPages: 15,
    page: 3,
    hasNext: true,
    hasPrevious: true
  };

  return (
    <Pagination size='sm' className='table-pagination'>
      <Pagination.First onClick={() => alert(1)} />
      <Pagination.Prev onClick={() => alert(pageParameters.page - 1)} />

      <Pagination.Item onClick={() => alert(pageParameters.page - 1)}>{pageParameters.page - 1}</Pagination.Item>
      <Pagination.Item active>{pageParameters.page}</Pagination.Item>
      <Pagination.Item onClick={() => alert(pageParameters.page + 1)}>{pageParameters.page + 1}</Pagination.Item>

      <Pagination.Next onClick={() => alert(pageParameters.page + 1)} />
      <Pagination.Last onClick={() => alert(pageParameters.totalPages)} />
    </Pagination>
  );
};

export default TablePagination;
