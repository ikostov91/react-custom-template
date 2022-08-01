import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const TablePagination = ({ pageParameters = {}, className = '', requestData = () => {} }) => {
  const { page, totalPages } = pageParameters;
  const previousPage = page - 1;
  const nextPage = page + 1;

  const getFirstPage = () => requestData({ ...pageParameters, page: 1});
  const getPreviousPage = () => requestData({ ...pageParameters, page: previousPage});
  const getNextPage = () => requestData({ ...pageParameters, page: nextPage});
  const getLastPage = () => () => requestData({ ...pageParameters, page: totalPages });

  return (
    <Pagination size='sm' className='table-pagination'>
      {page > 1 && (
        <>
          <Pagination.First onClick={getFirstPage} />
          <Pagination.Prev onClick={getPreviousPage} />
          <Pagination.Item onClick={getPreviousPage}>{previousPage}</Pagination.Item>
        </>
      )}
      <Pagination.Item active>{page}</Pagination.Item>
      {page < totalPages && (
        <>
          <Pagination.Item onClick={getNextPage}>{nextPage}</Pagination.Item>
          <Pagination.Next onClick={getNextPage} />
          <Pagination.Last onClick={getLastPage} />
        </>
      )}
    </Pagination>
  );
};

export default TablePagination;
