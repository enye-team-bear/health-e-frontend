/* eslint-disable max-lines-per-function */
import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Modal from '@material-ui/core/Modal';
import plusIcon from '../../../assets/img/plusIcon.svg';
import { pageData } from '../constants';
import sendIcon from '../../../assets/img/sendIcon.svg';

// APPLICATION STATES
import { useProfInputFields } from '../states';

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

const renderModal = (formData, handleInputChange) => (
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
                <Button variant="contained" className="b-button" type="submit">
                    {pageData.saveText}
                    <img src={sendIcon} alt="send icon" />
                </Button>
            </div>
        </div>
    </Card>
);

const ProfessionalModal = props => {
    const { formData, handleInputChange } = useProfInputFields();
    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={props.modalOpen}
            onClose={props.handleClose}
        >
            {renderModal(formData, handleInputChange)}
        </Modal>
    );
};

export default ProfessionalModal;
