export default function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	} else {
		// split the initial array into half
		const indexToSplit = Math.ceil(arr.length / 2);
		const firstHalf = mergeSort(arr.slice(0, indexToSplit));
		const secondHalf = mergeSort(arr.slice(indexToSplit));

		const finalProduct = [];
		// individually compare each element from both sorted arrays
		// in order to sort them
		for (let i = 0; i < arr.length; i++) {
			if ((firstHalf[0] <= secondHalf[0] || !secondHalf.length)) {
				finalProduct.push(firstHalf.shift());
			} else if((firstHalf[0] > secondHalf[0]  || !firstHalf.length)) {
				finalProduct.push(secondHalf.shift());
			}
		}
		// console.log(finalProduct);
		return finalProduct;
	}
}