function sumOfMultiples3Or5(n, sum = 0) {
	const multipleOf3or5 = n - 1;
	if (n < 3) {
		return sum;
	} else {
		if (multipleOf3or5 % 3 === 0 || multipleOf3or5 % 5 === 0) {
			sum += multipleOf3or5;
		}
		return sumOfMultiples3Or5(multipleOf3or5, sum);
	}
}