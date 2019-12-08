import React from 'react';

/**
 * function used to render authentication error on form
 *  @param {Object} state - the state where error is stored
 * @function {*} renderError
 */
const renderError = state => {
    let err = null;
    if (typeof state.error === 'string') {
        err = <div className="a-formAuth__error">{state.error}</div>;
    }
    return err;
};

export default renderError;
