import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Navigation } from '../../Navigation';
import { Feeds } from './feeds';
import { getAllPosts } from '../actions';
import { actions as userActions } from '../../auth';

/**
 * function used to render grid
 *
 * @function {*} renderGrid
 */
const renderGrid = userData => (
    <Grid 
        justify="center"
        alignItems="center"
        container 
        spacing={3}>
        
        <Grid item xs={12} sm={8}>
            <Feeds />
        </Grid>

    </Grid>
);

/**
 * function used to render Feed component
 *
 * @function {*} Feed
 */
const Search = () => {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.auth.userData);

    useEffect(() => {
        dispatch(getAllPosts());
        dispatch(userActions.getUserData());
    }, []);
    return (
        <div>
            <Navigation />
            <div className="p-feedPage">
                <div className="p-page__center">{renderGrid(userData)}</div>
            </div>
        </div>
    );
};

export default Search;
