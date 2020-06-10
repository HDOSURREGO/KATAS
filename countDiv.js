function countDiv(A, B, K) {
	let counter = 0;
	for (let i = A; i <= B; i++) {
		if (i % K == 0) {
			counter += 1;
		}
	}
	return counter;
}

console.log(countDiv(6, 11, 2));
