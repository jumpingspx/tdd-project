class Money {
	constructor (amt, currency) {
		this.amount = amt;
		this.currency = currency;
	}
	divide(divisor) {
		return new Money(this.amount / divisor, this.currency);
	}

	times(multiplier) {
		return new Money(this.amount * multiplier, this.currency);
	}
}

module.exports = Money