const myNum = 1041;

myNumBinary = myNum.toString(2);
console.log(myNumBinary);

myNumBinaryArray = Array.from(myNumBinary);
console.log("Binary Array: ", myNumBinaryArray);
console.log("Binary Array at first index:", myNumBinaryArray[0]);
const size = myNumBinaryArray.length;
console.log("Binary Array at last index:", myNumBinaryArray[size - 1]);

var maxTrailingZeros = 0;
var numberOfZeros = 0;

if (myNumBinaryArray[0] == 1 && myNumBinaryArray[size - 1] == 1) {
	for (let i = 0; i < size - 1; i++) {
		if (myNumBinaryArray[i] == 0) {
			console.log("index:", i);
			numberOfZeros += 1;
			console.log("# of Zeros", numberOfZeros);
		} else {
			numberOfZeros = 0;
		}
		if (numberOfZeros > maxTrailingZeros) {
			maxTrailingZeros = numberOfZeros;
		}
		console.log("maxTrailingZeros: ", maxTrailingZeros);
	}
} else {
	console.log("There is no binary gap", 0);
}
