let array = [2, 2, 1, 3, 1, 1, 2, 1, 1, 3, 10];

function distinctiveElement(array) {
	const dinstinctElements = [...new Set(array)];
	return dinstinctElements.length;
	// 	let distinctiveCounter = 1;
	// 	for (let i = 0; i < array.length; i++) {
	// 		let firstElement = array.shift();
	// 		console.log("Array after removing first element: ", array);
	// 		if (firstElement != array[i]) {
	// 			console.log(
	// 				`First element ${firstElement} after removing index ${i} from remaining array`
	// 			);
	// 			distinctiveCounter += 1;
	// 		}
	// 	}
	// 	return distinctiveCounter;
}
console.log("Distinctive elements:", distinctiveElement(array));
