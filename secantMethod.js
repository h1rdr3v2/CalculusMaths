import Mth from "./Maths.js"
const math = new Mth(f)

// Define the function for which you want to find the roots
function f(x) {
	return x ** 2 - 10
}

function secantMethod(x0, x1, tolerance = 1e-6, maxIterations = 100) {
	const tableData = []

	let x_n, f0, f1, f2
	let iteration = 1

	do {
		f1 = f(x1)
		f0 = f(x0)
		x_n = parseFloat((x1 - (f1 * (x1 - x0)) / (f1 - f0)).toFixed(3))

		f2 = f(x_n)

		if (f2 === 0 || Math.abs(f2) < tolerance) {
			return { root: x_n, table: tableData }
		}

		iteration++
		tableData.push({ iteration, x0, x1, x_n, f2 })
		x0 = x1
		x1 = parseFloat(x_n.toFixed(4))
	} while (iteration < maxIterations)
	return { root: x_n, table: tableData }
}
const { a, b } = math.findInterval()
const { root, table } = secantMethod(a, b, 0.0000001)
console.table(table)
