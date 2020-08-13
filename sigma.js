function sigma(num) {
	if (typeof num !== "number") {
		throw new TypeError("Argument must be a number");
	}
	let sum = num;
	return sum;
}

module.exports = {
	sigma,
};
