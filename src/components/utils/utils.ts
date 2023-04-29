import dayjs from 'dayjs';

export const formatNumber = (number = 0, locale = 'en-US') =>
	new Intl.NumberFormat(locale).format(number);

export const getFormattedDate = (startDate: any, endDate: any) => {
	const dateFormat = 'MMM D, YYYY';
	// Same date.
	if (startDate === endDate) {
		return dayjs(startDate).format(dateFormat);
	}
}

export const getFormattedCost = (lowCost: any, highCost: any) => {
	const parsedLowCost = Math.round(parseFloat(lowCost));
	const parsedHighCost = Math.round(parseFloat(highCost));

	if (!parsedLowCost) {
		return 'Free';
	}

	if (parsedLowCost === parsedHighCost) {
		return `$ ${formatNumber(parsedHighCost)}`;
	}

	if (!parsedHighCost) {
		return `$ ${formatNumber(parsedLowCost)}`;
	}

	return `$ ${formatNumber(parsedLowCost)} - ${formatNumber(parsedHighCost)}`;
};

export const truncateString = (str: string, num: number) => {
	// If the length of str is less than or equal to num
	// just return str--don't truncate it.
	if (str.length <= num) {
		return str
	}
	// Return str truncated with '...' concatenated to the end of str.
	return str.slice(0, num) + '...'
}