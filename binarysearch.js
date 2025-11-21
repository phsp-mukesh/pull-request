function binarySearchIterative(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid; // found
        }

        if (arr[mid] < target) {
            start = mid + 1; // search right side
        } else {
            end = mid - 1; // search left side
        }
    }

    return -1; // not found
}

// Example:
console.log(binarySearchIterative([1, 3, 5, 7, 9], 7)); // output: 3

