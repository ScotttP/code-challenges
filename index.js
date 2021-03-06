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
