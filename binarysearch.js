function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            start = mid + 1; // search right
        } else {
            end = mid - 1;   // search left
        }
    }

    return -1; // not found
}

// Example:
console.log(binarySearch([2, 4, 6, 8, 10], 8)); // output: 3

