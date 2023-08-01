class Mth {
	constructor(f) {
		this.f = f
	}
	// Find the interval where the root lies
	findInterval() {
		let a = 0
		let b = 0
		let i = 0

		// If f(a)f(b) >= 0, then root is not in the interval
		while (this.f(i) * this.f(i + 1) >= 0) {
			i++
		}

		// Now f(a)f(b) < 0, then root is in the interval
		a = i
		b = i + 1
		return { a, b }
	}
}

export default Mth
