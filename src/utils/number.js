export const formatNumber = (money, decimalPlace = 2) => {
  if (typeof money !== 'undefined') {
    return `${parseFloat(money)
      .toFixed(decimalPlace)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
  }
  return null;
};

/**
 * Number.prototype.format(n, x, s, c)
 *
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   s: sections delimiter
 * @param mixed   c: decimal delimiter
 */
export const formatCurrency = function (num, n = 2, x = 3, s = ',', c = '.') {
  const re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')';
  const newNum = num.toFixed(Math.max(0, ~~n));

  return (c ? newNum.replace('.', c) : newNum).replace(
    new RegExp(re, 'g'),
    '$&' + (s || ','),
  );
};
