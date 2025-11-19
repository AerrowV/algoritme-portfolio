import { isSorted } from "./issorted.js";
import { shuffleDown } from "./shuffle.js";
import { shuffleUp } from "./shuffle.js";


const arrays = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 4, 5, 7, 9, 11],
  [2, 2, 3, 6, 8, 9, 9, 10, 10, 11, 12],
  [9, 8, 7, 6, 5, 4, 3, 2, 1],
  [1, 8, 9, 4, 6, 7, 2, 5, 3],
  [1, 2, 4, 4, 5, 3, 6, 7, 8],
  [4, 4, 4, 4, 4, 4, 4],
];

console.log("\n--------------------------------------------------\n");

for (const arr of arrays) {
  console.log("Checking if arrays are sorted \n", isSorted(arr));
}

console.log("\n--------------------------------------------------\n");

for (const arr of arrays) {
  console.log("From last index: \n", shuffleDown(arr));
}

console.log("\n--------------------------------------------------\n");

for (const arr of arrays) {
  console.log("From first index: \n", shuffleUp(arr));
}

