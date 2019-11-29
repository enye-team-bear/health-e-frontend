import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const TextInput = ({ handleInputChange, value, name, label, type }) => (
    <TextField
        label={label}
        className="i-textInput"
        type={type}
        margin="normal"
        variant="outlined"
        name={name}
        onChange={handleInputChange}
        value={value}
    />
);

TextInput.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export { TextInput };
