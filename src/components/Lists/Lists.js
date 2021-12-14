import React, { useState } from 'react';
import SingleList from './List/SingleList';
import useStyles from './styles';
import {useSelector} from 'react-redux';
import {Grid, CircularProgress} from '@material-ui/core';
import ReactPaginate from 'react-paginate';

const Lists = () => {
    const lists = useSelector(state => state.lists);
    const [pageNumber, setPageNumber] = useState(0);
    const classes = useStyles();

    const listPerPage = 2;

    const pagesVisited = listPerPage * pageNumber;

    const displayLists = lists.slice(pagesVisited, pagesVisited + listPerPage);

    return (
        !lists.length ? <CircularProgress /> : (
            <Grid spacing={3} alignItems='stretch' container className={classes.mainContainer}>
                {displayLists.map(list => {
                    return (
                        <Grid item key={list._id} xs={12} sm={12}>
                            <SingleList list={list}/>
                        </Grid>
                    )
                })}
                <ReactPaginate 
                    previousLabel='Prev'
                    nextLabel='Next'
                    pageCount={Math.ceil(lists.length / listPerPage)}
                    onPageChange={({selected}) => setPageNumber(selected)}
                    containerClassName={classes.container}
                    previousLinkClassName={classes.previousLink}
                    nextLinkClassName={classes.nextLink}
                    disabledClassName={classes.disabled}
                    activeClassName={classes.active}
                />
            </Grid>
        )
    )
}

export default Lists;
