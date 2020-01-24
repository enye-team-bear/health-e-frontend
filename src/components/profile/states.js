import { useState } from 'react';
import { profInput, userInput } from './constants';

const useProfInputFields = () => {
	const [formData, setFormData] = useState(profInput);

	const handleInputChange = event => {
		event.persist();
		const newFormData = { ...formData };
		const newField = { ...newFormData[event.target.name] };
		newField.value = event.target.value;
		newFormData[event.target.name] = newField;
		setFormData(newFormData);
	};

	const resetState = () => setFormData(profInput);

	return {
		formData,
		handleInputChange,
		resetState,
	};
};

const useUserInputFields = () => {
	const [formData, setFormData] = useState(userInput);

	const handleInputChange = event => {
		event.persist();
		const newFormData = { ...formData };
		const newField = { ...newFormData[event.target.name] };
		newField.value = event.target.value;
		newFormData[event.target.name] = newField;
		setFormData(newFormData);
	};

	const resetState = () => setFormData(userInput);

	return {
		formData,
		handleInputChange,
		resetState,
	};
};

export { useProfInputFields, useUserInputFields };
