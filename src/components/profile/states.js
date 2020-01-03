import { useState } from 'react';
import { profInput } from './constants';

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
	return {
		formData,
		handleInputChange,
	};
};

export { useProfInputFields };
