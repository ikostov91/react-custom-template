import React from 'react';
import classnames from 'classnames';
import Pagination from 'react-bootstrap/Pagination';

const TablePagination = ({ pageParameters = {}, className = '', requestData = () => {} }) => {
  const { page, totalPages } = pageParameters;
  const previousPage = page - 1;
  const nextPage = page + 1;
  return (
    <Pagination size='sm' className='table-pagination'>
      {page > 1 && (
        <>
          <Pagination.First onClick={() => requestData({ ...pageParameters, page: 1})} />
          <Pagination.Prev onClick={() => requestData({ ...pageParameters, page: previousPage})} />
          <Pagination.Item onClick={() => requestData({ ...pageParameters, page: previousPage})}>{previousPage}</Pagination.Item>
        </>
      )}
      <Pagination.Item active>{pageParameters.page}</Pagination.Item>
      {page < totalPages && (
        <>
          <Pagination.Item onClick={() => requestData({ ...pageParameters, page: nextPage})}>{nextPage}</Pagination.Item>
          <Pagination.Next onClick={() => requestData({ ...pageParameters, page: nextPage})} />
          <Pagination.Last onClick={() => requestData({ ...pageParameters, page: totalPages })} />
        </>
      )}
    </Pagination>
  );
};

export default TablePagination;
