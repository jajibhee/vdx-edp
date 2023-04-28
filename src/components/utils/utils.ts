export const formatNumber = (number = 0, locale = 'en-US') =>
	new Intl.NumberFormat(locale).format(number);