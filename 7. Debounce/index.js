// This is the index.js file for 7. Debounce
/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
    let timeoutId
    return function(...args){
      // const context = this
      clearTimeout(timeoutId)
      timeoutId = setTimeout(()=>{
        func.apply(this, args)
      },wait)
    }
  }