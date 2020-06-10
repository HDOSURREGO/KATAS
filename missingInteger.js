let A = [5, 10, 15, 3, 7, 20, 26];

// let B = A.sort((a, b) => a - b);

// console.log(B);

// let C = B.filter((item) => item > 0);

// let size = C.length;

// let found = false;

// // console.log(C);
// let i = 0;
// for (i; i < size; i++) {
// 	//  if (i)
// 	// console.log("c  " + C[i]);
// 	// console.log(i);

// 	if (C[i] !== i + 1) {
// 		break;
// 	}
// }

// console.log(i + 1);

let missing = 1;
let sortedArray = A.sort((a, b) => a - b);
console.log(sortedArray);

sortedArray.forEach((element) => {
	if (element == missing) {
		missing += 1;
	} else if (element > missing) {
		console.log("missing integer:", missing);
	}
});
