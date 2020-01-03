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
import ProfessionalModal from './ProfessionalModal';
import { actions as userActions } from '../../auth';

/**
 * function used to render grid
 *
 * @function {*} renderGrid
 */
const renderGrid = (handlePersonalModalOpen, handleProfModalOpen, userData) => (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
            <Overview
                handleModalOpen={handlePersonalModalOpen}
                userData={userData}
            />
            <About handleModalOpen={handleProfModalOpen} userData={userData} />
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
    const [personalModalOpen, setPersonalModalOpen] = useState(false);
    const [profModalOpen, setprofModalOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getUserData());
    }, []);

    const userData = useSelector(state => state.auth.userData);

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
