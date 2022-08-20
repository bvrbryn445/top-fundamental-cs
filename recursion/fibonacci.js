// it took me 2 minutes to accomplish
function fibonacci(n) {
	const arr = [0, 1]; //container for fibonacci numbers
	for (let i = 2; i < n; i++) {
		// add new element using fibonacci formula
		arr[i] = arr[i - 1] + arr[i - 2];
	}
	return n < 2 ? arr.slice(0, n) : arr;
}

//admittedly, it took me around 2-3 hours, no joke
const fibsRec = (n) => {
	if (n <= 2) return [0, 1].slice(0, n);
	const prev = fibsRec(n - 1);
	return [...prev, prev[n-2] + prev[n-3]];
};

console.log(fibonacci(199));
console.log(fibsRec(199));