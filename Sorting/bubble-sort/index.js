/**
 * Bubble Sort is a comparison sort, named for the way the larger elements "bubble" up to the top of the list.
 * Time Complexity (Best)    :  O(N) 
 * Time Complexity (Average) :  O(N^2) 
 * Time Complexity (Worst)   :  O(N^2)
 * Space Complexity          :  O(1)
 */

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr;
}
