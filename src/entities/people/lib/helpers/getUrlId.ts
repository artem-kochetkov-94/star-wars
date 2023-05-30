export const getUrlId = (url: string): number => {
  return Number(url.split("/").slice(-2, -1));
};
