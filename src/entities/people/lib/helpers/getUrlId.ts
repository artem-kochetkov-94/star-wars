export const getUrlId = (url: string): string => {
	return url.split('/').slice(-2, -1)[0];
};
