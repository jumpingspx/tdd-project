const assert = require('assert');

class Dollar {
	constructor (amt) {
		this.amount = amt;
	}
	
	times = (multiplier) => {
		return new Dollar(this.amount * multiplier);
	}
}

let fiver = new Dollar(5);
let tenner = fiver.times(2);

assert.strictEqual(tenner.amount, 10);