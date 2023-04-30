import { unparse } from 'papaparse';
import { validate as validateUUID } from 'uuid';

export const slug_plus_uuid_from_url = (url) => {
	// Assumes URL like /app/obtype/this-is-the-slug/uuid/ is properly constructed
	return url.split('/').slice(-2).join('/');
};

/**
 * returns true when the site is running on vendelux.com, false if it is running locally or in a staging env
 */
export const isProdSite = () => window.location.hostname === 'vendelux.com';

export const this_slug_plus_uuid = () => {
	return slug_plus_uuid_from_url(window.location.href);
};

export const slug_from_url = (url) => {
	return url.split('/').slice(-2).slice(0)[0];
};

export const this_slug = () => {
	return slug_from_url(window.location.href);
};

export const uuid_from_url = (url) => {
	// Can't do this naively since we have /app/prospectlist/UUID/
	var elements = url.split('/');
	//console.log(elements);
	for (var e of elements) {
		if (e.includes('?')) {
			e = e.substring(0, e.indexOf('?'));
		}
		if (validateUUID(e)) {
			return e;
		} else {
		}
	}
	return '';
};

export const this_uuid = () => {
	return uuid_from_url(window.location.href);
};

export const setLocalStorageItemIfObjectHasProperty = (ob, prop) => {
	if (ob.hasOwnProperty(prop)) {
		localStorage.setItem(prop, ob[prop]);
	}
};

export const userPropsLocalStorage = [
	'expires',
	'name',
	'username',
	'userid',
	'userimage',
	'referralcode',
	'userurl',
	'team',
	'email',
];

export const logoutUser = (e = {}) => {
	// remove user related items from localstorage
	if (e.preventDefault) e.preventDefault();

	userPropsLocalStorage.forEach((key) => localStorage.removeItem(key));
	window.location.href = '/logout';
};

/**
 * getUserDetails: function gets user related items from localstorage and map it to:
 * {
 *  expires: 1662139869,
 *  username: 'testUsername',
 *  userid: 'testUserId',
 *  userimage: 'userimage',
 *  userurl: 'testUserUrl',
 *  referralcode: 'referralcode'
 * }
 */
export const getUserDetails = () => {
	const user = userPropsLocalStorage.reduce((ac, cv) => {
		let item = localStorage.getItem(cv);

		if (cv === 'userimage') {
			// In localstorage null value gets stored as a string. Here we can't do parseInt as url value is string.
			item =
				item === 'null'
					? '/media/pic_folder/placeholders/user-placeholder.png'
					: item;
		}

		// team value is either null or number. In localstorage null gets saved as a string. so using parseInt.
		if (cv === 'team') item = parseInt(item);

		return { ...ac, [cv]: item };
	}, {});

	const isLoggedIn =
		!!user.userid && parseInt(Date.now() / 1000) < user.expires;

	return {
		...user,
		isLoggedIn,
	};
};

// This function return link based on user login state.
export const getLogInRequiredLinks = () => ({
	UPDATES: '/app/feed',
	PROSPECTS: '/app/myprospects',
	DASHBOARD: '/app/planner',
});

export const formatNumber = (number = 0, locale = 'en-US') =>
	new Intl.NumberFormat(locale).format(number);

const usdFormat = new Intl.NumberFormat('en-US', {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});
export const formatUSD = (number) => {
	return '$' + usdFormat.format(number);
};

export const getFormattedCost = (lowCost, highCost) => {
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

export const pluralize = (stem, count, singular_suffix, plural_suffix) => {
	if (count === 1) {
		return stem + singular_suffix;
	}
	return stem + plural_suffix;
};

export const viewEventLabelTextByAttendeeCount = (attendee_count) => {
	if (!attendee_count) return 'View event';

	return (
		'View ' +
		attendee_count +
		' ' +
		pluralize('attendee', attendee_count, '', 's')
	);
};

export const objectCompare = (ob_1, ob_2) => {
	const ob_1_keys = Object.keys(ob_1);
	const ob_2_keys2 = Object.keys(ob_2);

	let obj_are_eq = true;
	if (ob_1_keys.length !== ob_2_keys2.length) {
		obj_are_eq = false;
	}
	const is_object = (obj) => {
		return obj !== null && typeof obj === 'object';
	};
	Object.entries(ob_1).forEach(([key, obj_1_value]) => {
		if (!key.startsWith('_') && obj_are_eq) {
			const obj_2_value = ob_2[key];
			const valid_objects = is_object(obj_1_value) && is_object(obj_2_value);
			if (
				(valid_objects && !objectCompare(obj_1_value, obj_2_value)) ||
				(!valid_objects && obj_1_value !== obj_2_value)
			) {
				obj_are_eq = false;
			}
		}
	});
	return obj_are_eq;
};

export const debounce = (method, timeout = 300) => {
	let clock;
	return (...vals) => {
		clearTimeout(clock);
		clock = setTimeout(() => {
			method.apply(this, vals);
		}, timeout);
	};
};

export const email_regex =
	/^(?:[\w!#$%&'*+\-\/=?^`{|}~]+\.)*[\w!#$%&'*+\-\/=?^`{|}~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/; // eslint-disable-line

export const downloadAsCSV = (data, fileName) => {
	const csv = unparse(data);
	let a = document.createElement('a');
	a.href = window.URL.createObjectURL(new Blob([csv], { type: 'csv' }));
	a.download = fileName;
	a.click();
};

export const escapeRegExp = (value) =>
	value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

export function downloadBase64File(contentType, base64Data, fileName) {
	const linkSource = `data:${contentType};base64,${base64Data}`;
	const downloadLink = document.createElement('a');
	downloadLink.href = linkSource;
	downloadLink.download = fileName;
	downloadLink.click();
}
