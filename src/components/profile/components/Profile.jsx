import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Navigation } from '../../Navigation';
import { Experts } from '../../feed/components';
import About from './About';
import Overview from './Overview';
import Password from './Password';
import UpdateModal from './UpdateModal';
import { actions as userActions } from '../../auth';

/**
 * function used to render grid
 *
 * @function {*} renderGrid
 */
const renderGrid = (handleModalOpen, userData) => (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
            <Overview handleModalOpen={handleModalOpen} userData={userData} />
            <About handleModalOpen={handleModalOpen} userData={userData} />
            <Password />
        </Grid>
        <Grid item xs={12} sm={3}>
            <Card className="p-page__card">
                <Experts />
            </Card>
        </Grid>
    </Grid>
);

/**
 * function used to render profile component
 *
 * @function {*} Profile
 */
// eslint-disable-next-line max-lines-per-function
const Profile = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getUserData());
    }, []);

    const userData = useSelector((state) => state.auth.userData);

    const handleModalOpen = () => {
        setModalOpen(true);
    };
    const handleModalClose = () => {
        setModalOpen(false);
    };
    return (
        <div>
            <Navigation />
            <div className="p-feedPage">
                <div className="p-page__center">
                    {renderGrid(handleModalOpen, userData)}
                </div>
            </div>
            <UpdateModal modalOpen={modalOpen} handleClose={handleModalClose} />
        </div>
    );
};

export default Profile;
