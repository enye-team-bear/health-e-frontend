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

// APPLICATION STATES
import { useProfInputFields } from '../states';
import { updateUserProfile } from '../actions';

const renderProfessionInput = (formData, handleInputChange) => (
    <Fragment>
        {Object.keys(formData).map((el, i) => (
            <input
                key={i}
                className="f-postCard__input p-modal__input"
                placeholder={formData[el].placeholder}
                onChange={handleInputChange}
                value={formData[el].value}
                name={el}
                type={formData[el].type}
            />
        ))}
    </Fragment>
);

const handleSubmit = (e, formData, dispatch, handleClose, resetState) => {
    e.preventDefault();
    const userData = {
        currentTitle: formData.currentTitle.value,
        currentJob: formData.currentJob.value,
        number: formData.number.value,
        email: formData.email.value,
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
                <div className="p-modal__heading">{pageData.changeUserTxt}</div>
            </div>
            <div className="p-modal__body">
                <div className="p-modal__section-head">
                    {pageData.professionalTxt}
                </div>
                {renderProfessionInput(formData, handleInputChange)}
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

const ProfessionalModal = props => {
    const { formData, handleInputChange, resetState } = useProfInputFields();
    const dispatch = useDispatch();
    const profileData = useSelector(state => state.profile);
    const { handleClose, modalOpen } = props;
    return (
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
    );
};

export default ProfessionalModal;
