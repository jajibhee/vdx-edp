import qs from 'qs';
import algoliasearch from 'algoliasearch/lite';
import { isProdSite } from '../util';
import { isEmpty } from 'lodash';
import { format, parseISO } from 'date-fns';

const is_prod = isProdSite();
export const API_KEY = is_prod
	? process.env.REACT_APP_ALGOLIA_API_KEY
	: process.env.REACT_APP_ALGOLIA_API_KEY_DEV;
export const searchClient = algoliasearch(
	process.env.REACT_APP_ALGOLIA_APPLICATION_ID,
	API_KEY
);

export const INDEX_NAME = is_prod ? 'prod_vendelux' : 'dev_vendelux';

export const INDEX_NAME_BY_TYPE = is_prod
	? {
		event: 'prod_vendelux',
		org: 'prod_organizations',
		profile: 'prod_profiles',
	}
	: {
		event: 'dev_vendelux',
		org: 'dev_organizations',
		profile: 'dev_profiles',
	};

const FILTERS_MAP = {
	'attendees.n': 'people',
	'attendees.t': 'job',
};

export const createURL = (state, dateFilter) => {
	const refinementListArray = Object.entries(state.refinementList);
	const isDefaultRoute =
		!state.query &&
		state.page === 1 &&
		state.refinementList &&
		!refinementListArray.some(([, filter]) => filter.length !== 0) &&
		isEmpty(dateFilter);

	if (isDefaultRoute) {
		return '/app/events/search';
	}

	const queryParameters = {};

	if (dateFilter.startDate && dateFilter.endDate) {
		queryParameters.start_date = encodeURIComponent(
			format(dateFilter.startDate, 'yyyy-MM-dd')
		);
		queryParameters.end_date = encodeURIComponent(
			format(dateFilter.endDate, 'yyyy-MM-dd')
		);
	}

	if (state.query) {
		queryParameters.query = encodeURIComponent(state.query);
	}

	if (state.page !== 1) {
		queryParameters.page = state.page;
	}

	refinementListArray.forEach(([key, value]) => {
		const mappedParam = FILTERS_MAP[key] || key;
		queryParameters[mappedParam] = (value || []).map(encodeURIComponent);
	});

	const queryString = qs.stringify(queryParameters, {
		addQueryPrefix: true,
		arrayFormat: 'repeat',
	});

	return `/app/events/search${queryString}`;
};

export const searchStateToUrl = (searchState, dateFilter) =>
	searchState || dateFilter
		? createURL(searchState, dateFilter)
		: '/app/events/search';

/**
 *
 * @param  {string} locationSearch
 * @param {boolean} initialLoad
 * @returns {SearchState}
 */
export const urlToSearchState = (locationSearch, initialLoad = true) => {
	const {
		query = '',
		page = 1,
		sponsors = [],
		people = [],
		job = [],
		country = [],
		region = [],
		topics = [],
		event_type = [],
		start_date = '',
		end_date = '',
	} = qs.parse(locationSearch.slice(1));
	// `qs` does not return an array when there's a single value.
	const allSponsors = Array.isArray(sponsors)
		? sponsors
		: [sponsors].filter(Boolean);
	const allCountry = Array.isArray(country)
		? country
		: [country].filter(Boolean);
	const allJob = Array.isArray(job) ? job : [job].filter(Boolean);
	const allPeople = Array.isArray(people) ? people : [people].filter(Boolean);
	const allRegion = Array.isArray(region) ? region : [region].filter(Boolean);
	const allTopics = Array.isArray(topics) ? topics : [topics].filter(Boolean);
	const allEventType = Array.isArray(event_type)
		? event_type
		: [event_type].filter(Boolean);

	return {
		searchState: {
			query: decodeURIComponent(query),
			page,
			refinementList: {
				sponsors: allSponsors.map(decodeURIComponent),
				country: allCountry.map(decodeURIComponent),
				'attendees.n': allPeople.map(decodeURIComponent),
				'attendees.t': allJob.map(decodeURIComponent),
				region: allRegion.map(decodeURIComponent),
				topics: allTopics.map(decodeURIComponent),
				event_type: allEventType.map(decodeURIComponent),
			},
			initialLoad,
		},
		dateFilter: {
			startDate: start_date && parseISO(decodeURIComponent(start_date)),
			endDate: end_date && parseISO(decodeURIComponent(end_date)),
		},
	};
};
