/* eslint-disable max-lines-per-function */
const diffInYears = (cur, prev) => {
	let diff = (cur.getTime() - prev.getTime()) / 1000;
	diff /= 60 * 60 * 24;
	return Math.abs(Math.round(diff / 365.25));
};

const diffInMonths = (cur, prev) => {
	let diff;
	diff = (cur.getFullYear() - prev.getFullYear()) * 12;
	diff -= prev.getMonth() + 1;
	diff += cur.getMonth();
	return diff <= 0 ? 0 : diff;
};

const diffInWeeks = (cur, prev) => {
	let diff = (cur.getTime() - prev.getTime()) / 1000;
	diff /= 60 * 60 * 24 * 7;
	return Math.abs(Math.round(diff));
};

const diffInDays = (cur, prev) => {
	const diff = Math.floor(
		(cur.getTime() - prev.getTime()) / (1000 * 3600 * 24),
	);
	return diff;
};

const diffInHours = (cur, prev) => {
	const diff = cur.getTime() - prev.getTime();
	return Math.floor((diff % 86400000) / 3600000);
};

const diffInMinutes = (cur, prev) => {
	let diff = (cur.getTime() - prev.getTime()) / 1000;
	diff /= 60;
	return Math.abs(Math.round(diff));
};

const diffInSeconds = (cur, prev) => {
	let diff = Math.floor((cur.getTime() - prev.getTime()) / 1000);
	return diff;
};

const timeConverter = (date) => {
	const currentDay = new Date();
	const postDay = new Date(date);
	const difference = currentDay.getTime() - postDay.getTime();
	const numWeeks = Math.floor(difference / 86400000 / 7);
	// const numDays = Math.floor(difference / 86400000);
	// const numHours = Math.floor((difference % 86400000) / 3600000);
	// const numMinutes = Math.floor(((difference % 86400000) % 86400000) / 60000);

	const numYear = diffInYears(currentDay, postDay);
	const numMonth = diffInMonths(currentDay, postDay);
	const numDay = diffInDays(currentDay, postDay);
	const numWeek = diffInWeeks(currentDay, postDay);
	const numHour = diffInHours(currentDay, postDay);
	const numMinute = diffInMinutes(currentDay, postDay);
	const numSeconds = diffInSeconds(currentDay, postDay);

	let currentTime;

	if (numYear > 0) {
		currentTime = `${numYear} year ago`;
	} else if (numMonth > 0 && numMonth < 13) {
		currentTime = `${numMonth} month ago`;
	} else if (numWeeks > 0 && numWeeks < 5) {
		currentTime = `${numWeeks} weeks ago`;
	} else if (numDay > 0 && numDay < 31) {
		currentTime = `${numDay} days ago`;
	} else if (numHour > 0 && numHour < 25) {
		currentTime = `${numHour} hour ago`;
	} else if (numMinute > 0 && numMinute < 61) {
		currentTime = `${numMinute} minutes ago`;
	} else {
		currentTime = `${numSeconds} seconds ago`;
	}

	return currentTime;
};

export default timeConverter;
