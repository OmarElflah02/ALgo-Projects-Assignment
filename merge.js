function mergesort(arr1) {
	// check if array can be split
	if (arr1.length < 2) {
		return arr1;
	}
	// Get Middle index
	const mid = Math.floor(arr1.length / 2);
	// Split Array In Two Sides
	const leftArr = arr1.slice(0, mid);
	const rightArr = arr1.slice(mid);
	// Use recursion To Continue Splitting
	console.log('split: ', leftArr , rightArr);
	return merge(mergesort(leftArr), mergesort(rightArr));
}

function merge(leftArr, rightArr) {
	// Create New Array
	const sortedArr = [];
	// Chech if leftArr and rightArr is empty
	while (leftArr.length && rightArr.length) {
		// Find lower value
		if (leftArr[0] <= rightArr[0]) {
			// Add left value
			sortedArr.push(leftArr.shift());
		} else {
			// Add right value
			sortedArr.push(rightArr.shift());
		}
	}
	const resultArr = [...sortedArr, ...leftArr, ...rightArr];
	console.log('result: ', resultArr);
	return resultArr;
}

const arr1 = [30, 10, -7, 4, -6, 5, 2, 8];
console.log(mergesort(arr1)); // [-7, -6, 2, 4, 5, 8, 10, 30]