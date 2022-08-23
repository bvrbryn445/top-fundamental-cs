import mergeSort from '../js/recursions/merge-sort.js';

test('sort a short amount of elements array', () => {
	const unsortedArr = [33, 11, 22, 1];
	const sortedArr = [1, 11, 22, 33];
	expect(mergeSort(unsortedArr))
		.toStrictEqual(sortedArr);
})

test('sort even numbered length array', () => {
	const unsortedArr = [4, 6, 3, 2, 7, 9, 1, 8];
	const sortedArr = [1, 2, 3, 4, 6, 7, 8, 9];
	expect(mergeSort(unsortedArr))
		.toStrictEqual(sortedArr);
})

test('sort odd numbered length array', () => {
	const unsortedArr = [2, 7, 5, 3, 9, 1, 6];
	const sortedArr = [1, 2, 3, 5, 6, 7, 9];
	expect(mergeSort(unsortedArr))
		.toStrictEqual(sortedArr);
});

test('sort duplicated elements', () => {
	const unsortedArr = [2, 6, 5, 3, 6, 1];
	const sortedArr = [1, 2, 3, 5, 6, 6];
	expect(mergeSort(unsortedArr))
		.toStrictEqual(sortedArr);
});

test('sort a large input size array', () => {
	const unsortedArr = [21, 24, 9, 31, 32, 15, 25, 11, 19, 7, 2, 12, 17, 3, 28, 29, 22, 6, 8, 13, 26, 16, 27, 1, 14, 18, 5, 4, 30, 10, 23, 20];
	const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
	expect(mergeSort(unsortedArr))
		.toStrictEqual(sortedArr);
})