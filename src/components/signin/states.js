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
	return {
		formData,
		handleInputChange,
	};
};

export { useInputFields };
