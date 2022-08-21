export default function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	} else {
		// split the initial array into half
		const indexToSplit = Math.ceil(arr.length / 2);
		console.log(indexToSplit);
		const firstHalf = mergeSort(arr.slice(0, indexToSplit - 1));
		const secondHalf = mergeSort(arr.slice(indexToSplit));

		const finalProduct = [];
		
		// individually compare each element from both sorted arrays
		// in order to sort them
		for (let i = 0; i < arr.length; i++) {
			if ((firstHalf[0] < secondHalf[0]) && firstHalf[0]) {
				finalProduct.push(firstHalf.shift());
			} else {
				finalProduct.push(secondHalf.shift());
			}
		}
		console.log(finalProduct);
		return finalProduct;
	}
}