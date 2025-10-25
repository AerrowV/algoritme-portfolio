const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

let count = 0;

function binarySearch(searchFor, values) {
  console.log("Searching for... " + searchFor);

  let min = 0;
  let max = values.length - 1;
  let found = false;
  let middle;

  while (min <= max && !found) {
    middle = max - Math.floor((max - min) / 2);

    console.log("Min: ", min, "Max: ", max, "Mid: ", middle);

    if (values[middle] == searchFor) {
      console.log("Found it! " + values[middle]);
      found = true;
    }

    if (values[middle] < searchFor) {
      console.log("Too low " + values[middle]);
      min = middle + 1;
    }
    if (values[middle] > searchFor) {
      console.log("Too high" + values[middle]);
      max = middle - 1;
    }
    count++;
    console.log("Count: " + count);
  }
  
  if (found) {
    return middle;
  } else {
    return -1;
  }
}

const result = binarySearch(35, values);
console.log("Result:", result);
