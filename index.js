//Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
//This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

function findElement(arr, func) {
	for (let index of arr) {
		if (func(index) === true) {
			console.log(index);
			return index;
		}
	}
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
//returns 2

//************************/

//Check if a value is classified as a boolean primitive. Return true or false.
//Boolean primitives are true and false.

function booWho(bool) {
	if (typeof bool === "boolean") return true;
	else return false;
}

booWho(null);

//************************/

//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
	const arry = str.toLowerCase().split(" ");
	let result = arry.map((value) => {
		return value.replace(value.charAt(0), value.charAt(0).toUpperCase());
	});
	return result.join(" ");
}

titleCase("I'm a little tea pot");
// I'm A Little Tea Pot

//************************/

//   You are given two arrays and an index.
//   Copy each element of the first array into the second array, in order.
//   Begin inserting elements at index n of the second array.
//   Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
	let newArry = [...arr2];
	newArry.splice(n, 0, arr1);
	return newArry.flat();
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
// [1,2,3,4,5,6]

//************************/

// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
	let newArr = [];
	for (let val of arr) {
		if (!!val) {
			// if value is truthy
			newArr.push(val);
		}
	}
	return newArr;
}

bouncer([7, "ate", "", false, 9]);
// [7,"ate",9]

//************************/

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
	arr.push(num);
	arr.sort((x, y) => x - y);
	return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);
//************************/

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

function mutation(arr) {
	let first = arr[0].toLowerCase();
	let second = arr[1].toLowerCase();

	for (let i = 0; i < second.length; i++) {
		if (first.indexOf(second[i]) < 0) return false;
	}
	return true;
}

mutation(["hello", "hey"]);

//************************/

//Chunky Monkey

//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
	let newArry = [];
	for (let i = 0; i < arr.length; i += size) {
		newArry.push(arr.slice(i, i + size));
	}
	return newArry;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

//************************/

// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
	let newArry = [];
	for (let i = 0; i <= n; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			newArry.push(i);
		}
	}
	return newArry.reduce((acc, curr) => acc + curr);
}

//************************/

// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, function should returns 0

// Examples

// sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12 // 2 + 4 + 6
// sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
// sequenceSum(1,5,3) === 5 // 1 + 4

const sequenceSum = (begin, end, increment) => {
	let arry = [];
	if (begin > end) return 0;
	for (let i = begin; i <= end; i += increment) {
		arry.push(i);
	}
	return arry.reduce((acc, curr) => acc + curr);
};
// OR

function sequenceSum(begin, end, step) {
	let sum = 0;
	for (let i = begin; i <= end; i += step) {
		sum += i;
	}
	return sum;
}

//************************/

// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

function rowWeights(array) {
	let evenArr = [];
	let oddArr = [];
	let team1Result = 0;
	let team2Result = 0;

	for (let index in array) {
		if (index % 2 === 0) {
			evenArr.push(array[index]);
			team1Result = evenArr.reduce((acc, curr) => acc + curr);
		} else {
			oddArr.push(array[index]);
			team2Result = oddArr.reduce((acc, curr) => acc + curr);
		}
	}
	return [team1Result, team2Result];
}

//BETTER SOLUTION

function rowWeights(array) {
	let t1 = array.filter((x, i) => i % 2 == 0).reduce((a, item) => a + item, 0);
	let t2 = array.filter((x, i) => i % 2 != 0).reduce((a, item) => a + item, 0);

	return [t1, t2];
}

//************************/

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s) {
	let lowerCount = 0;
	let upperCount = 0;

	for (let index in s) {
		if (s.charCodeAt(index) >= 97 && s.charCodeAt(index) <= 122) {
			lowerCount++;
		} else if (s.charCodeAt(index) >= 65 && s.charCodeAt(index) <= 90) {
			upperCount++;
		}
	}
	if (lowerCount >= upperCount || upperCount === lowerCount) {
		return s.toLowerCase();
	} else return s.toUpperCase();
}

//Better Solution

function solve(s) {
	let lowerC = 0;
	let upperC = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] == s[i].toUpperCase()) {
			upperC++;
		} else {
			lowerC++;
		}
	}
	return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase();
}

//************************/
