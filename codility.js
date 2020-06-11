let text = "aabbbbba";

function codility(text) {
	if (text === "b") {
		console.log(true);
	}
	let collection = Array.from(text);

	let collectionSize = collection.length;
	console.log(collectionSize);

	let onlyA = collection.filter((item) => item === "a");
	console.log(onlyA.length);

	if (collectionSize === onlyA.length) {
		console.log(true);
	}

	let onlyB = collection.filter((item) => item === "b");
	console.log(onlyB.length);

	if (collectionSize === onlyB.length) {
		console.log(true);
	}

	console.log(collection);

	let foundB = -1;
	let i = 0;
	for (i; i < collection.length; i++) {
		if (collection[i] === "b") {
			foundB = i;
			break;
		}
	}

	console.log(foundB);
	console.log(collectionSize);
	console.log(foundB === collectionSize - 1);

	if (foundB === collectionSize - 1) {
		console.log(true);
	}
	for (let x = foundB + 1; x < collection.length; x++) {
		console.log(collection[x]);
		if (collection[x] === "a") {
			return false;
		}
	}

	console.log(true);
}

codility(text);
