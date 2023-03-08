/**
 * @param {Array<number>} arr The input integer array to be searched.
 * @param {number} target Target integer to search within the array
 * @return {Array<number>}
 */
export default function binarySearch(arr, target) {
  let low = 0
  let high = arr.length - 1
  while(low<=high){
    let mid = Math.floor (low + (high-low)/2)
    let currVal = arr[mid]
    if(currVal<target){
      low = mid + 1
    }
    else if(currVal == target){
      return mid
    }
    else if(currVal>target){
      high = mid - 1
    }
  }
  return -1
}