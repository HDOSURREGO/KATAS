let A = [-5, -1, -3, -8];

let B = A.sort((a, b) => a - b);

console.log(B);

let C = B.filter((item) => item > 0);

let size = C.length;

let found = false;

console.log(C);
let i = 0;
for (i; i < size; i++) {
	//  if (i)
	console.log("c  " + C[i]);
	console.log(i);

	if (C[i] !== i + 1) {
		break;
	}
}

console.log(i + 1);
