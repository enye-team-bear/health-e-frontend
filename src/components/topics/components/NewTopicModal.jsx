/* eslint-disable max-lines-per-function */
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import Modal from '@material-ui/core/Modal';
import plusIcon from '../../../assets/img/plusIcon.svg';
import { pageData } from '../constants';
import sendIcon from '../../../assets/img/sendIcon.svg';
import { newTopic } from '../actions';

import { useInputFields } from '../states';

const renderPersonalInput = (formData, handleInputChange) => (
    <Fragment>
        <input
            type="text"
            className="f-postCard__input p-modal__input"
            placeholder="Topic Heading"
            name="topic"
            value={formData.topic.value}
            onChange={handleInputChange}
        />
        <input
            type="text"
            className="f-postCard__input p-modal__input"
            placeholder="Topic title"
            name="title"
            value={formData.title.value}
            onChange={handleInputChange}
        />
        <textarea
            type="text"
            className="f-postCard__input p-modal__input"
            placeholder="Topic thread"
            rows="7"
            name="thread"
            value={formData.thread.value}
            onChange={handleInputChange}
        />
    </Fragment>
);

const handleSubmit = (e, formData, dispatch, handleClose, resetState) => {
    e.preventDefault();
    const topicData = {
        topic: formData.topic.value,
        title: formData.title.value,
        thread: formData.thread.value,
    };
    dispatch(newTopic(topicData, handleClose));
    resetState();
};

const renderModal = (
    formData,
    handleInputChange,
    dispatch,
    topicsData,
    handleClose,
    resetState,
) => (
    <form
        onSubmit={e =>
            handleSubmit(e, formData, dispatch, handleClose, resetState)
        }
    >
        <Card className="p-page__card p-modal">
            <div className="p-modal__top">
                <div className="p-modal__heading">Create new topic</div>
            </div>
            <div className="p-modal__body">
                {/* <div className="p-modal__section-head">Personal</div> */}
                {renderPersonalInput(formData, handleInputChange)}
                <div className="p-modal__uploadImage">
                    upload cover photo{' '}
                    <div>
                        <img src={plusIcon} alt="add" />
                    </div>
                </div>
                <div className="p-modal__btn">
                    <Button
                        variant="contained"
                        className="b-button"
                        type="submit"
                        disabled={topicsData.posting}
                    >
                        {topicsData.posting ? (
                            <CircularProgress
                                className="b-button__progress"
                                size={25}
                            />
                        ) : null}
                        post
                    </Button>
                </div>
            </div>
        </Card>
    </form>
);

const NewTopicModal = props => {
    const { formData, handleInputChange, resetState } = useInputFields();
    const dispatch = useDispatch();
    const topicsData = useSelector(state => state.topic);
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
                    dispatch,
                    topicsData,
                    handleClose,
                    resetState,
                )}
            </Modal>
        </div>
    );
};

export default NewTopicModal;
