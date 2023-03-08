// This is the index.js file for 7. Debounce
/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
  let timeoutId;
  function debouncedFunction(...args) {
    // const context = this
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  }

  debouncedFunction.clear = function () {
    clearTimeout(timeoutId);
  };
  debouncedFunction.flush = function (...args) {
    clearTimeout(timeoutId);
    func.apply(this, args);
  };
  return debouncedFunction;
}
