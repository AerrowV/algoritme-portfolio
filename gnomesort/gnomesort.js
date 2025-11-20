import { isSorted } from "../insertionsort/issorted.js";

export function gnomeSort(arr) {
  console.log("Initial array:", arr);
  if (arr.length <= 1) {
    return {
      Array: arr,
      Iterations: 1,
      Sorted: isSorted(arr),
    };
  }

  let index = 1;

  while (index < arr.length) {
    if (index === 0 || arr[index] >= arr[index - 1]) {
      index++;
    } else {
      console.log("Swapping:", arr[index], "and", arr[index + 1]);
      swap(index, index - 1);
      console.log("Result:", arr);
      index--;
    }
  }

  function swap(a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  return {
    Array: arr,
    Iterations: index,
    Sorted: isSorted(arr),
  };
}
