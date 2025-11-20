export function isSorted(arr) {
    for(let i = 1, len = arr.length; i < len; i++) {
        if(arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}