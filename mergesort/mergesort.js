import { merge } from "./merge.js";
import { isSorted } from "../insertionsort/issorted.js";

export function mergeSort(arr) {
  if (arr.length <= 1) {
    return {
      Array: arr,
      Iterations: 1,
      Sorted: isSorted(arr) 
    };
  }

  const half = Math.floor(arr.length / 2);

  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(half);

  console.log("Splitting:\n", arr, "\ninto\n", firstHalf, "\nand\n", secondHalf, "\n");

  const firstResult = mergeSort(firstHalf);
  const secondResult = mergeSort(secondHalf);

  console.log("Merging sorted halves:\n", firstResult.Array, "\nand\n", secondResult.Array, "\n");
  const mergedArr = merge(firstResult.Array, secondResult.Array);
  console.log("Result:", mergedArr, "\n");

  const iterations = firstResult.Iterations + secondResult.Iterations + 1;

  return {
    Array: mergedArr,
    Iterations: iterations,
    Sorted: isSorted(mergedArr),
  };
}
