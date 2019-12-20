import { useState } from 'react';

const usePostInput = () => {
	const [postText, setPostText] = useState('');

	const handlePostTextChanged = (e) => {
		e.persist();
		setPostText(e.target.value);
	};

	const resetState = () => setPostText('');

	return {
		handlePostTextChanged,
		resetState,
		postText,
	};
};

const useCheckedLabel = () => {
	const [checked, setChecked] = useState(true);

	const handleChecked = () => setChecked(!checked);
	return {
		checked,
		handleChecked,
	};
};

export { usePostInput, useCheckedLabel };
