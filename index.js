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

// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

function roundToNext5(n) {
	let remainder = n % 5;
	if (n % 5 === 0) {
		return n;
	} else {
		if (Math.sign(n) === 1) {
			return n - remainder + 5;
		} else if (Math.sign(n) === -1) {
			return n - remainder;
		}
	}
}

//BETTER SOLUTION

function roundToNext5(n) {
	return Math.ceil(n / 5) * 5;
}

//************************/

// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.

function dataReverse(data) {
	let reversed = [];
	for (let i = data.length; i >= 0; i -= 8) {
		reversed = reversed.concat(data.slice(i, i + 8));
	}
	return reversed;
}

//************************/
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Note for F#: The input will be of (int list list) which is a List<List>

// Example Input
// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example Output
// ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {
	return data.map((element) => {
		return element.reduce((age, handicap) => {
			if (age >= 55 && handicap > 7) {
				return "Senior";
			} else {
				return "Open";
			}
		});
	});
}

//************************/

// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

function digPow(n, p) {
	let numArry = n
		.toString()
		.split("")
		.map((element) => Number(element));
	let incrementP = p;

	let newArry = numArry.map((value) => {
		let val = Math.pow(value, incrementP);
		incrementP += 1;
		return val;
	});

	let result = newArry.reduce((acc, curr) => {
		return acc + curr;
	});

	if (Number.isInteger(result / n)) {
		return result / n;
	} else {
		return -1;
	}
}

//************************/

// A simple kata, my first.
// simply tranform an array into a string, like so:

//   transform([4, -56, true, "box"]) => "4-56truebox"

function transform(array) {
	return array
		.map((element) => {
			return String(element);
		})
		.join("");
}

//************************/

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

function upArray(arr) {
	for (let value of arr) {
		if (value < 0 || value === NaN || value === undefined || value > 9)
			return null;
	}
	let num = Number(arr.join(""));
	num++;
	let final = String(num).split("");
	return final.map((element) => Number(element));
}

//************************/

//NEED TO FINISH

// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return an empty value.

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
	if (isNaN(num)) return "NaN";
	let numArray = Array.from(String(num), Number);
	let filteredArray = [];

	for (let i = 0; i < numArray.length; i++) {
		if (typeof numArray[i] === "number") {
			if (!isNaN(numArray[i])) {
				filteredArray.push(numArray[i]);
			}
		}
	}

	for (let i = 0; i < filteredArray.length; i++) {
		if (filteredArray[i] % 2 > 0) {
			//if index value is odd
			if (i === 0 && filteredArray.length > 1) {
				// if value is at the beginning of the array, add dash to the right
				filteredArray.splice(i + 1, 0, "-");
			} else if (i > 0 && i < filteredArray.length - 1) {
				// if value is not at the beginning and is not the last index, add dash to the right
				filteredArray.splice(i + 1, 0, "-");
			}
		} else if (filteredArray[i] % 2 === 0 && filteredArray[i + 1] % 2 > 0)
			//if index value is even and the next value is odd add a dash to the right
			filteredArray.splice(i + 1, 0, "-");
	}
	return filteredArray.join("");
}

// REGEX SOLUTION

function dashatize(num) {
	return String(num)
		.replace(/([13579])/g, "-$1-")
		.replace(/--+/g, "-")
		.replace(/(^-|-$)/g, "");
}

//************************/

// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
	//   str = str.replace(/\s/g,'')
	let strArray = [];
	let inner = [];
	let newArr = [];
	let index = 0;

	for (let i = 0; i < str.length; i++) {
		strArray.push(str);
	}
	console.log(strArray);

	for (let i = 0; i < strArray.length; i++) {
		inner = strArray[i].split("");

		if (inner[index] !== " ") {
			inner[index] = inner[index].toUpperCase();
		}

		newArr.push(inner.join(""));

		index += 1;
	}
	return newArr;
}

//************************/
