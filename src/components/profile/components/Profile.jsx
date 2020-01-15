/* eslint-disable max-lines-per-function */
import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { Navigation } from '../../Navigation';
import { Experts } from '../../feed/components';
import About from './About';
import Overview from './Overview';
import Password from './Password';
import UpdateModal from './UpdateModal';
import ProfessionalModal from './ProfessionalModal';
import { actions as userActions } from '../../auth';
import { getUserProfile } from '../actions';

/**
 * function used to render grid
 *
 * @function {*} renderGrid
 */

const renderProfile = (
    handlePersonalModalOpen,
    handleProfModalOpen,
    userData,
) => {
    let displayed = (
        <div className="l-loading__block">
            <CircularProgress className="l-loading__progress" />
        </div>
    );
    if (userData) {
        displayed = (
            <Fragment>
                <Overview
                    handleModalOpen={handlePersonalModalOpen}
                    userData={userData}
                />
                <About
                    handleModalOpen={handleProfModalOpen}
                    userData={userData}
                />
                <Password />
            </Fragment>
        );
    }
    return displayed;
};
const renderGrid = (handlePersonalModalOpen, handleProfModalOpen, userData) => (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
            {renderProfile(
                handlePersonalModalOpen,
                handleProfModalOpen,
                userData,
            )}
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
    const [personalModalOpen, setPersonalModalOpen] = useState(false);
    const [profModalOpen, setprofModalOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserProfile());
    }, []);

    const userData = useSelector(state => state.profile.profile);

    const handlePersonalModalOpen = () => {
        setPersonalModalOpen(true);
    };
    const handlePersonalModalClose = () => {
        setPersonalModalOpen(false);
    };

    const handleProfModalOpen = () => {
        setprofModalOpen(true);
    };
    const handleProfModalClose = () => {
        setprofModalOpen(false);
    };
    return (
        <div>
            <Navigation />
            <div className="p-feedPage">
                <div className="p-page__center">
                    {renderGrid(
                        handlePersonalModalOpen,
                        handleProfModalOpen,
                        userData,
                    )}
                </div>
            </div>
            <UpdateModal
                modalOpen={personalModalOpen}
                handleClose={handlePersonalModalClose}
            />
            <ProfessionalModal
                modalOpen={profModalOpen}
                handleClose={handleProfModalClose}
            />
        </div>
    );
};

export default Profile;
