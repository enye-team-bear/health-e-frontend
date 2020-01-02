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

const useCommentInput = () => {
	const [commentText, setCommentText] = useState('');

	const handleCommentTextChanged = (e) => {
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

const useCheckedLabel = () => {
	const [checked, setChecked] = useState(true);

	const handleChecked = () => setChecked(!checked);
	return {
		checked,
		handleChecked,
	};
};

export { usePostInput, useCheckedLabel, useCommentInput };
