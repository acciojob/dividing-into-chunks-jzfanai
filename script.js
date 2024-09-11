const divide = (arr, n) => {
    let result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let num of arr) {
        if (currentSum + num > n) {
            // If adding the current number exceeds the maximum sum, finalize the current subarray
            result.push(currentSubarray);
            // Start a new subarray
            currentSubarray = [num];
            currentSum = num;
        } else {
            // Otherwise, add the number to the current subarray
            currentSubarray.push(num);
            currentSum += num;
        }
    }

    // Don't forget to add the last subarray if it's not empty
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));
