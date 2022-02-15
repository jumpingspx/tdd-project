const assert = require('assert');

// class Dollar {
// 	constructor (amt) {
// 		this.amount = amt;
// 	}
	
// 	times = (multiplier) => {
// 		return new Dollar(this.amount * multiplier);
// 	}
// }

// let fiver = new Dollar(5);
// let tenner = fiver.times(2);

// assert.strictEqual(tenner.amount, 10);

class Money {
	constructor(amt, currency) {
		this.amount = amt;
		this.currency = currency;
	}

	// using arrow function somehow changes the return profile of new Money()
	// divide = (divisor) => {
	// 	return new Money(this.amount / divisor, this.currency);
	// }
	// times = (multiplier) => {
	// 	return new Money(this.amount * multiplier, this.currency);
	// }

	divide(divisor) {
		return new Money(this.amount / divisor, this.currency);
	}

	times(multiplier) {
		return new Money(this.amount * multiplier, this.currency);
	}

}

class Portfolio {
	constructor () {
		this.moneys = []
	};

	add(...moneys) {
		this.moneys = this.moneys.concat(moneys)
	};

	evaluate(currency) {
		let total = this.moneys.reduce((sum, money) => {
			return sum + money.amount
		}, 0);
		return new Money(total, "USD");
	};
};

let tenEuros = new Money(10);
let twentyEuros = tenEuros.times(2);

assert.strictEqual(twentyEuros.amount, 20);

let originalMoney = new Money(4002, "KRW");
let expectedMoneyAfterDivision = new Money(1000.5, "KRW");

assert.deepStrictEqual(originalMoney.divide(4), expectedMoneyAfterDivision);


let fiveDollar = new Money(5, "USD")
let tenDollar = new Money(10, "USD")

assert.deepStrictEqual(fiveDollar.times(2), tenDollar)

let fifteenDollar = new Money(15, "USD");
let portfolio = new Portfolio();
portfolio.add(fiveDollar, tenDollar);

assert.deepStrictEqual(portfolio.evaluate("USD"), fifteenDollar)