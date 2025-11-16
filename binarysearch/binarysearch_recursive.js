const values = [
  1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41,
  43, 45, 47, 49,
];

export function binarySearchRecursive(search, values, start, end, iterations = 0) {

    let min = start;
    let max = end;

    iterations++;
    console.log("Iteration:", iterations);


    if (min > max) {
        console.log("No more search space.");
        return {
            found: false,
            index: -1,
            iterations: iterations
        };
    }

    let middle = Math.floor((min + max) / 2);
    console.log("Min:", min, "Max:", max, "Mid:", middle);

    if (values[middle] === search) {
        console.log("Found it!", values[middle]);
        return {
            found: true,
            index: middle,
            iterations: iterations
        };
    }

    if (values[middle] < search) {
        console.log("Too low:", values[middle]);
        return binarySearchRecursive(search, values, middle + 1, max, iterations);
    }

    if (values[middle] > search) {
        console.log("Too high:", values[middle]);
        return binarySearchRecursive(search, values, min, middle - 1, iterations);
    }
}

const result = binarySearchRecursive(35, values, 0, values.length - 1);
console.log("Result", result);
