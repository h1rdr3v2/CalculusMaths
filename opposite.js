import Mth from "./Maths.js"
const math = new Mth(f)

// Define the function for which you want to find the roots
function f(x) {
	return x ** 4 - 12
}

function falsePosition(x0, x1, tolerance = 1e-6, maxIterations = 100) {
	const tableData = []

	let x_n, f0, f1, f2
	let iteration = 1
	f1 = f(x1)

	do {
		f0 = f(x0)

		x_n = parseFloat((x0 - (f0 * (x1 - x0)) / (f1 - f0)).toFixed(3))
		f2 = f(x_n)

		if (f2 === 0 || Math.abs(f2) < tolerance) {
			return { root: x_n, table: tableData }
		}

		iteration++
		tableData.push({ iteration, x0, x1, x_n, f2 })
		x0 = parseFloat(x_n.toFixed(4))
	} while (iteration < maxIterations)
	return { root: x_n, table: tableData }
}
const { a, b } = math.findInterval()
const { root, table } = falsePosition(a, b, 0.0000001)
console.table(table)
