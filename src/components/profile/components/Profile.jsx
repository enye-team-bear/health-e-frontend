import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Navigation } from '../../Navigation';
import { Experts } from '../../feed/components';
import About from './About';
import Overview from './Overview';
import Password from './Password';
import UpdateModal from './UpdateModal';

/**
 * function used to render grid
 *
 * @function {*} renderGrid
 */
const renderGrid = (handleModalOpen) => (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
            <Overview handleModalOpen={handleModalOpen} />
            <About handleModalOpen={handleModalOpen} />
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
const Profile = () => {
    const [modalOpen, setModalOpen] = useState(false);
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
                    {renderGrid(handleModalOpen)}
                </div>
            </div>
            <UpdateModal modalOpen={modalOpen} handleClose={handleModalClose} />
        </div>
    );
};

export default Profile;
