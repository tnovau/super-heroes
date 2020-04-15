/** @param {string} userAgent */
const isIe10orOlder = (userAgent) => userAgent.indexOf("MSIE ") > -1;
/** @param {string} userAgent */
const isIe11orNewer = (userAgent) => userAgent.indexOf("Trident/") > -1;

/** @param {string} userAgent */
export const isIE = (userAgent) => isIe10orOlder(userAgent) || isIe11orNewer(userAgent);