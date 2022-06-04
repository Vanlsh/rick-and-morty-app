import Pagination from '@mui/material/Pagination';
import React from 'react';
import s from '../Characters.module.scss'

const PaginationComponent = () => {
    return (
        <div className={s.pagination}>
            <Pagination count={10} color="primary" />
        </div>
    );
};

export default PaginationComponent;