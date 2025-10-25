const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

export function binarySearch(searchFor, values) {
  console.log("Searching for...", searchFor);

  let min = 0;
  let max = values.length - 1;
  let found = false;
  let middle;
  let iterations = 0;

  while (min <= max && !found) {
    middle = Math.floor((max + min) / 2);
    iterations++;

    console.log("Min:", min, "Max:", max, "Mid:", middle, "Val:", values[middle]);

    if (values[middle] == searchFor) {
      console.log("Found it!", values[middle]);
      found = true;
    }

    if (values[middle] < searchFor) {
      console.log("Too low:", values[middle]);
      min = middle + 1;
    }

    if (values[middle] > searchFor) {
      console.log("Too high:", values[middle]);
      max = middle - 1;
    }

    console.log("Iteration:", iterations);
  }

  console.log(
    found
      ? `Found ${searchFor} at index ${middle} in ${iterations} iterations.`
      : `${searchFor} not found after ${iterations} iterations.`
  );

  return {
    found: found,
    index: found ? middle : -1,
    iterations: iterations
  };
}

const result = binarySearch(35, values);
console.log("Result", result);
