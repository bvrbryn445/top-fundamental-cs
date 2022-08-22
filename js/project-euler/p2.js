function evenOnlyFibonacciSum(limit, a = 0, b = 1, sum = 0) {
	const c = a + b;
	a = b;
	b = c;
	if (c % 2 === 0) sum += c;
	return c >= limit ? sum : evenOnlyFibonacciSum(limit, a, b, sum);
}


console.log(evenOnlyFibonacciSum(4000000));