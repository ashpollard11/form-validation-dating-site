class NumberRangeValidator extends Validator {
	constructor(selector, min, max) {
		super(selector); //call constructor in validator()
		console.log('constructor from NumberRangeValidator')
		this.min = min; //take arguments and put them into properties of the class
		this.max = max; //take arguments and put them into properties of the class
	}

	validate() {
		super.validate();

		let numericValue = parseFloat(this.$field.value);
		if (isNan(numericValue)) {
			this.errors.push("You must enter a numeric value");
		}
		if (numericValue < this.min) {
			this.errors.push("Number must be greater than " + this.min);
		}
		if (numericValue > this.max) {
			this.errors.push("Number cannot exceed " + this.max);
		}
	}
}