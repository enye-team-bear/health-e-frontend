import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const TextInput = ({ handleInputChange, value, name, label, type, error }) => (
    <Fragment>
        {error ? <div className="i-textInput__error-text">{error}</div> : null}
        <TextField
            label={label}
            className={`i-textInput ${error ? '--error' : ''}`}
            type={type}
            margin="normal"
            variant="outlined"
            name={name}
            onChange={handleInputChange}
            value={value}
        />
    </Fragment>
);

TextInput.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export { TextInput };
