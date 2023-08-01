import Mth from "./Maths.js"
const math = new Mth(f)

// Define the function for which you want to find the roots
function f(x) {
	return x ** 2 - 2 * x - 5
}

// Bisection method to find the root within the specified range [a, b]
function bisectionMethod(a, b, precision) {
	const MAX_ITERATIONS = 1000 // Maximum number of iterations to avoid infinite loop

	let table = []

	// Check if the initial values are valid
	if (f(a) * f(b) >= 0) {
		throw new Error(
			"The function may not have roots within the given range."
		)
	}

	for (let i = 0; i < MAX_ITERATIONS; i++) {
		const c = (a + b) / 2
		const f_c = f(c)

		table.push({ iteration: i + 1, a, b, c, f_c })

		if (Math.abs(f_c) < precision) {
			break // Convergence criteria met, exit loop
		} else if (f(a) * f_c < 0) {
			b = c // The root is in the left half
		} else {
			a = c // The root is in the right half
		}
	}

	return table
}
const { a, b } = math.findInterval()
const precision = 0.001 // Desired level of precision for convergence

console.log(`\n\nThe root lies within the interval [${a}, ${b}]\n`)
// Find the root
const table = bisectionMethod(a, b, precision)

// Print the result table
console.table(table)
