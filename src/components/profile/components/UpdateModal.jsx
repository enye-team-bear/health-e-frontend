/* eslint-disable max-lines-per-function */
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';
import plusIcon from '../../../assets/img/plusIcon.svg';
import { pageData } from '../constants';
import sendIcon from '../../../assets/img/sendIcon.svg';

import { useUserInputFields } from '../states';
import { updateUserProfile } from '../actions';

const renderPersonalInput = (formData, handleInputChange) => (
    <Fragment>
        <input
            type="text"
            className="f-postCard__input p-modal__input"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName.value}
            onChange={handleInputChange}
        />
        <textarea
            type="text"
            className="f-postCard__input p-modal__input"
            placeholder="Description"
            rows="5"
            name="description"
            value={formData.description.value}
            onChange={handleInputChange}
        />
        <input
            type="text"
            className="f-postCard__input p-modal__input"
            placeholder="Profession"
            name="profession"
            value={formData.profession.value}
            onChange={handleInputChange}
        />
    </Fragment>
);

const handleSubmit = (e, formData, dispatch, handleClose, resetState) => {
    e.preventDefault();
    const userData = {
        fullName: formData.fullName.value,
        description: formData.description.value,
        profession: formData.profession.value,
    };
    dispatch(updateUserProfile(userData, handleClose));
    resetState();
};

const renderModal = (
    formData,
    handleInputChange,
    resetState,
    dispatch,
    profileData,
    handleClose,
) => (
    <form
        onSubmit={e =>
            handleSubmit(e, formData, dispatch, handleClose, resetState)
        }
    >
        <Card className="p-page__card p-modal">
            <div className="p-modal__top">
                <div className="p-modal__heading">Change user details</div>
            </div>
            <div className="p-modal__body">
                <div className="p-modal__section-head">Personal</div>
                {renderPersonalInput(formData, handleInputChange)}
                <div className="p-modal__uploadImage">
                    cover photo{' '}
                    <div>
                        <img src={plusIcon} alt="add" />
                    </div>
                </div>
                <div className="p-modal__btn">
                    <Button
                        variant="contained"
                        className="b-button"
                        type="submit"
                        disabled={profileData.loading}
                    >
                        {profileData.loading ? (
                            <CircularProgress
                                className="b-button__progress"
                                size={25}
                            />
                        ) : null}
                        update
                    </Button>
                </div>
            </div>
        </Card>
    </form>
);

const UpdateModal = props => {
    const { formData, handleInputChange, resetState } = useUserInputFields();
    const dispatch = useDispatch();
    const profileData = useSelector(state => state.profile);
    const { handleClose, modalOpen } = props;
    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={modalOpen}
                onClose={handleClose}
            >
                {renderModal(
                    formData,
                    handleInputChange,
                    resetState,
                    dispatch,
                    profileData,
                    handleClose,
                )}
            </Modal>
        </div>
    );
};

export default UpdateModal;
