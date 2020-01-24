import { useState } from 'react';
import { userFormData } from './constants';

const useInputFields = () => {
	const [formData, setFormData] = useState(userFormData);

	const handleInputChange = event => {
		event.persist();
		const newFormData = { ...formData };
		const newField = { ...newFormData[event.target.name] };
		newField.value = event.target.value;
		newFormData[event.target.name] = newField;
		setFormData(newFormData);
	};
	const resetState = () => setFormData(userFormData);

	return {
		formData,
		handleInputChange,
		resetState,
	};
};

const useCommentInput = () => {
	const [commentText, setCommentText] = useState('');

	const handleCommentTextChanged = e => {
		e.persist();
		setCommentText(e.target.value);
	};

	const resetState = () => setCommentText('');

	return {
		handleCommentTextChanged,
		resetState,
		commentText,
	};
};

export { useInputFields, useCommentInput };
