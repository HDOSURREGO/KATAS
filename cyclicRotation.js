let nums = [3, 8, 9, 7, 6];
let rotatedArray = [];
let size = nums.length;
let K = 3;

// var rotateArray = function (nums, K) {
// 	for (let j = 0; j < K; j++) {
// 		for (let i = 0; i < size - 1; i++) {
// 			rotatedArray[0] = nums[size - 1];
// 			rotatedArray[i + 1] = nums[i];
// 		}
// 		return rotatedArray;
// 	}
// };

function rotateArray(nums, K) {
	// let i = 0;
	// while (i < K) {
	let lastElement = nums.pop();
	let firstElement = nums.shift();

	// i++;
	return nums;
}
// }

rotatedNums = rotateArray(nums);
console.log("rotated nums: ", rotatedNums);
