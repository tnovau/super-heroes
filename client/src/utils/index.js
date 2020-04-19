/** @param {string} userAgent */
const isIe10orOlder = (userAgent) => userAgent.indexOf("MSIE ") > -1;
/** @param {string} userAgent */
const isIe11orNewer = (userAgent) => userAgent.indexOf("Trident/") > -1;

/** @param {string} userAgent */
export const isIE = (userAgent) => isIe10orOlder(userAgent) || isIe11orNewer(userAgent);

/** @param {string} url */
export const replaceHttpWithHttps = (url) => url.replace("http://", "https://");

/**
 * @param {string} string
 * @param {string} searchString
 */
export const includes = (string, searchString) =>
  string.toUpperCase().indexOf(searchString) !== -1;

/** @param {[]} array */
export const distinct = (array) => array
  .filter((item, index, arr) => arr.indexOf(item) === index);

export const sortAsc = (a, b) => ("" + a).localeCompare(b);
export const sortDesc = (a, b) => sortAsc(b, a);