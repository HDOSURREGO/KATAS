let A = [1, 3, 6, 4, 1, 2];

// let B = A.sort((a, b) => a - b);

// let size = B.length;
// let result = [];
// for (let i = 0; i < size; i++) result.push(+B[i]); // or parseInt(arr[i]) or Number(arr[i])
// console.log("Result array in numbers: ", result); // 71
// console.log("Type of result: ", typeof result);
// console.log("B after parsing to int: ", B);

// let C = B.filter((item) => item > 0);

// console.log("C: ", C);

// let sizeC = C.length;
// console.log("size: ", sizeC);

// let found = false;

// // console.log(C);
// let i = 0;
// for (i; i < sizeC; i++) {
// 	console.log("C[i]:", C[i]);
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
