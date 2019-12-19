import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Modal from '@material-ui/core/Modal';
import plusIcon from '../../../assets/img/plusIcon.svg';
import { pageData } from '../constants';
import sendIcon from '../../../assets/img/sendIcon.svg';

const renderPersonalInput = () => (
    <Fragment>
        <input
            type="text"
            className="f-postCard__input p-modal__input"
            placeholder="Full Name"
        />
        <textarea
            type="text"
            className="f-postCard__input p-modal__input"
            placeholder="Description"
            rows="5"
        />
        <input
            type="text"
            className="f-postCard__input p-modal__input"
            placeholder="Profession"
        />
    </Fragment>
);

const renderProfessionInput = () => (
    <Fragment>
        <input
            type="text"
            className="f-postCard__input p-modal__input"
            placeholder="Current Title"
        />
        <input
            type="text"
            className="f-postCard__input p-modal__input"
            placeholder="Current Job"
        />
        <input
            type="text"
            className="f-postCard__input p-modal__input"
            placeholder="Phone Number"
        />
        <input
            type="email"
            className="f-postCard__input p-modal__input"
            placeholder="Email Address"
        />
    </Fragment>
);

const renderModal = () => (
    <Card className="p-page__card p-modal">
        <div className="p-modal__top">
            <div className="p-modal__heading">Change user details</div>
        </div>
        <div className="p-modal__body">
            <div className="p-modal__section-head">Personal</div>
            {renderPersonalInput()}
            <div className="p-modal__uploadImage">
                cover photo{' '}
                <div>
                    <img src={plusIcon} alt="add" />
                </div>
            </div>
            <div className="p-modal__divider" />
            <div className="p-modal__section-head">Professional</div>
            {renderProfessionInput()}
            <div className="p-modal__btn">
                <Button variant="contained" className="b-button" type="submit">
                    {pageData.saveText}
                    <img src={sendIcon} alt="send icon" />
                </Button>
            </div>
        </div>
    </Card>
);

const UpdateModal = (props) => {
    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={props.modalOpen}
                onClose={props.handleClose}
            >
                {renderModal()}
            </Modal>
        </div>
    );
};

export default UpdateModal;