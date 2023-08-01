// Define the equation to solve: f(x) = x**2 + 8x + 5
function f(x) {
	return x ** 2 + 8 * x + 5
}

// Secant method implementation
function secantMethod(x0, x1, tolerance, maxIterations) {
	let x2
	let f0 = f(x0)
	let f1 = f(x1)

	for (let i = 0; i < maxIterations; i++) {
		if (Math.abs(f1 - f0) < tolerance) {
			// We have reached the desired accuracy
			return x1
		}

		x2 = x1 - (f1 * (x1 - x0)) / (f1 - f0)
		x0 = x1
		x1 = x2
		f0 = f1
		f1 = f(x1)
	}

	// If the method doesn't converge within maxIterations
	return null
}

// Set initial guesses for the root
const x0 = -5
const x1 = -4

// Set the desired tolerance and maximum iterations
const tolerance = 1e-6
const maxIterations = 100

// Call the secant method
const root = secantMethod(x0, x1, tolerance, maxIterations)

if (root !== null) {
	console.log("Approximate root:", root)
} else {
	console.log(
		"The method did not converge within the specified maximum iterations."
	)
}
