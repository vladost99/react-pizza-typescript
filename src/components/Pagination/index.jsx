import React from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';

const Pagination = ({onChangePage, currentPage}) => {
  return (
    <ReactPaginate
        breakLabel="..."
        className={styles.root}
        nextLabel=">"
        pageRangeDisplayed={4}
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageCount={3}
        previousLabel="<"
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
  )
}

export default Pagination