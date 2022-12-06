function insertionSort(arr) {            // 0    1  2  3  4
	for (let i = 1; i < arr.length; i++) // 8 | 21 -2 3 -6
	{
		let numberToInsert = arr[i]; // 21
		let j = i - 1;  // 0
		while (j >= 0 && arr[j] > numberToInsert) {
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = numberToInsert;  // 21
	}
}

const arr = [8, 21, -2, 3, -6];
insertionSort(arr);
console.log(arr); // [-6, -2, 3, 8, 21]