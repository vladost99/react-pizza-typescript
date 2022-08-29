import React from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters, setCurrentPage } from 'redux/slices/filterSlice';

const Pagination: React.FC = () => {

  const dispatch = useDispatch();
  const {currentPage} = useSelector(selectFilters);
  const onChangePage = (number: number) => dispatch(setCurrentPage(number));


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
      />
  )
}

export default Pagination