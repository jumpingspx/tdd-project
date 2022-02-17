const assert = require('assert');

const Portfolio = require('./portfolio');
const Money = require('./money')

class MoneyTest {
	testMultiplication () {
		let tenEuros = new Money(10, 'EUR');
		let twentyEuros = new Money(20, 'EUR');

		assert.deepStrictEqual(tenEuros.times(20), twentyEuros);
	}

	testDivision () {
		let originalMoney = new Money(4002, "KRW");
		let expectedMoneyAfterDivision = new Money(1000.5, "KRW");
		
		assert.deepStrictEqual(originalMoney.divide(4), expectedMoneyAfterDivision);
	}

	testAddition () {
		let fiveDollar = new Money(5, "USD")
		let tenDollar = new Money(10, "USD")
		let fifteenDollar = new Money(15, "USD");
		let portfolio = new Portfolio();
		portfolio.add(fiveDollar, tenDollar);
		
		assert.deepStrictEqual(portfolio.evaluate("USD"), fifteenDollar)
	}

	getAllTestMethod() {
		// let testMethod = ['testMultiplication', 'testDivision', 'testAddition'];
		let moneyPrototype = MoneyTest.prototype;
		let allProps = Object.getOwnPropertyNames(moneyPrototype);

		let testMethod = allProps.filter((p) => {
			return typeof moneyPrototype[p] === 'function' && p.startsWith('test');
		})

		return testMethod;
	}
	
	runAllTests () {
		let testMethods = this.getAllTestMethod();
		testMethods.forEach((m) => {
			console.log('Running %s()', m)
			let method = Reflect.get(this, m);
			try {
				Reflect.apply(method, this, []);
			} catch (e) {
				if (e instanceof assert.AssertionError) {
					console.log(e);
				} else {
					throw e;
				}
			}
		})
	}
}

new MoneyTest().runAllTests();
