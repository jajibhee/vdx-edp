const getURL = (endpoint: string) => {
	const base_url = 'https://vendelux.com/';
	return `${base_url}${endpoint}`;
};

export const routes = {
	signup: getURL('auth/signup'),
	signin: getURL('auth/signin'),
	prospects: getURL('prospects'),
	planner: getURL('planner'),
	explore: getURL('app/events/search'),
	profile: getURL('app/profile/'),
	orgProfile: getURL('app/org/'),
	news: getURL('blog'),
	about: getURL('about'),
	careers: getURL('careers'),
	contact: getURL('contact'),
	pricing: getURL('pricing'),
	terms: getURL('terms'),
	privacy: getURL('privacy'),
};
