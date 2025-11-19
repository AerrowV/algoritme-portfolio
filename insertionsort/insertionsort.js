import { isSorted } from "./issorted.js";

export function insertionSort(arr) {
  let iterations = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let j = i;
    while (arr[j] > arr[j + 1]) {
      console.log("Swapping:", arr[j], "and", arr[j + 1]);
      swap(j, j + 1);
      console.log("Result:", arr);
      j--;
      iterations++;
    }
  }

  function swap(a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  return {
    Array: arr,
    Iterations: iterations,
    Sorted: isSorted(arr)
  };
}
