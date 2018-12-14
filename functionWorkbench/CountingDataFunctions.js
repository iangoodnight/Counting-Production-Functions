// Import Finished Product SKUs as arr1 and Material SKUs as arr2
const data = require("./Arrays");

// Use ES6 `Set()` and spread operator to filter out duplicates
let uniqueArr1 = [...new Set(data.arr1)];
let uniqueArr2 = [...new Set(data.arr2)];
// create combine array
let newArr = uniqueArr1.concat(uniqueArr2);
// Use ES6 `Set()` and spread operator to filter out duplicates
let newUniqueArr = [...new Set(newArr)];

function compareLengths(b, a) {
	// compare lengths of b:a
	let diff = b.length - a.length;

	return diff;
};

function compareTwoLengths(b1, b2, a1, a2) {
	// compare lengths of b1:a1 and b2:a2
	let diff1,
			diff2;

	diff1 = b1.length - a1.length;
	diff2 = b2.length - a2.length;

	return {
		diff1: diff1,
		diff2: diff2
	}; 
};

function printArr(arr) {

	let formatted = [];

	for (i in arr) {
		formatted.push(arr[i]);
	}

	return formatted.join('\n');

}

function returnPrintArr(arr) {

	let formatted = [];

	for (i in arr) {
		formatted.push(arr[i]);
	}

	return formatted.join('\",\n\"');

}

let result1 = compareTwoLengths(data.arr1, data.arr2, uniqueArr1, uniqueArr2);
let result2 = compareLengths(newArr, newUniqueArr);
let result3 = printArr(newUniqueArr);
let result4 = returnPrintArr(newUniqueArr);

console.log("arr1: " + data.arr1.length +
					"\narr2: " + data.arr2.length + 
					"\nuniqueArr1: " + uniqueArr1.length +
					"\nuniqueArr2: " + uniqueArr2.length +
					"\ndiff1: " + result1.diff1 + 
					"\ndiff2: " + result1.diff2 +
					"\nnewArr: " + newArr.length +
					"\nnewUniqueArr" + newUniqueArr.length +
					"\ndiff: " + result2);

console.log("data field:\n" + result3);